import EventTarget from '@ungap/event-target';
import throttle from 'lodash.throttle';

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
    this.interval = interval;
    this.enabled = false;
    this.rawCookies = [];
    this.descriptor =
      Object.getOwnPropertyDescriptor(Document.prototype, 'cookie') ||
      Object.getOwnPropertyDescriptor(HTMLDocument.prototype, 'cookie');

    const onDocumentCookieSet = throttle(handler, this.interval, {
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
    return this.descriptor && this.descriptor.configurable;
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

  flush() {
    const rawCookies = this.rawCookies;
    this.rawCookies = [];
    this.log('flush', rawCookies);
    return {
      rawCookies: rawCookies,
    };
  }
}

export default DocumentCookieWatcher;
