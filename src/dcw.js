import EventTarget from '@ungap/event-target';
import throttle from 'lodash.throttle';
import uniq from 'lodash.uniq';

class DocumentCookieWatcher extends EventTarget {
  constructor({
    debug = false,
    handler = () => {
      this.log('handler not set');
    },
    interval = 1000,
    leading = false,
    trailing = true,
    timeout = 0,
  } = {}) {
    super();
    this.debug = debug;
    this.handler = handler;
    this.interval = interval;
    this.leading = leading;
    this.trailing = trailing;
    this.enabled = false;
    this.rawCookies = [];
    this.descriptor =
      Object.getOwnPropertyDescriptor(Document.prototype, 'cookie') ||
      Object.getOwnPropertyDescriptor(HTMLDocument.prototype, 'cookie');

    const onDocumentCookieSet = throttle(this.handler, this.interval, {
      leading: leading,
      trailing: trailing,
    });
    this.addEventListener('DocumentCookieSet', e => {
      this.log('DocumentCookieSet event', e.detail);
      onDocumentCookieSet(this, e);
    });
    this.timeout = timeout;
    this.log('created', {
      descriptor: this.descriptor,
      debug: this.debug,
      handler: this.handler,
      interval: this.interval,
      leading: this.leading,
      trailing: this.trailing,
      timeout: this.timeout,
    });
  }

  log(...args) {
    if (this.debug) {
      console.log('[dcw]', ...args);
    }
  }

  configurable() {
    return (
      typeof this.descriptor !== 'undefined' && this.descriptor.configurable
    );
  }

  enable() {
    if (!this.configurable()) {
      this.log('document.cookie not configurable');
      return;
    }

    if (this.enabled) {
      this.log('already enabled');
      return;
    }

    this.startAt = new Date();

    Object.defineProperty(document, 'cookie', {
      configurable: true,
      enumerable: true,
      get: () => {
        return this.descriptor.get.call(document);
      },
      set: value => {
        this.descriptor.set.call(document, value);
        this.log('document.cookie set', value);

        this.rawCookies.push(value);

        if (this.timeout > 0) {
          const now = new Date();
          const diff = now.getTime() - this.startAt.getTime();
          const elapsed = diff / 1000;
          if (elapsed >= this.timeout) {
            this.log('timed out');
            this.disable();
            return;
          }
        }

        this.dispatchEvent(
          new CustomEvent('DocumentCookieSet', {
            detail: {
              rawCookie: value,
            },
          })
        );
      },
    });

    this.enabled = true;
    this.log('enabled');
  }

  disable() {
    if (!this.configurable()) {
      this.log('document.cookie not configurable');
      return;
    }

    if (!this.enabled) {
      this.log('already disabled');
      return;
    }

    Object.defineProperty(document, 'cookie', {
      configurable: true,
      enumerable: true,
      get: () => {
        return this.descriptor.get.call(document);
      },
      set: value => {
        this.descriptor.set.call(document, value);
      },
    });

    this.enabled = false;
    this.log('disabled');
  }

  flush({ filters = [] } = {}) {
    const rawCookies = this.rawCookies;
    this.rawCookies = [];
    const uniqueCookies = uniq(rawCookies);
    const filteredCookies = [];
    uniqueCookies.forEach(rawCookie => {
      if (rawCookie.indexOf('=') === -1) {
        return;
      }
      const trimmed = rawCookie.trim();
      if (/(\r\n|\r|\n)/.test(trimmed)) {
        return;
      }
      const cookieName = trimmed.split('=')[0];
      if (
        Array.isArray(filters) &&
        filters.length > 0 &&
        !filters.includes(cookieName)
      ) {
        return;
      }
      filteredCookies.push(trimmed);
    });
    const result = {
      rawCookies: rawCookies,
      filteredCookies: filteredCookies,
    };
    this.log('flush', result);
    return result;
  }
}

export default DocumentCookieWatcher;
