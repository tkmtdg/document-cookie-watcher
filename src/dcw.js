import parse from 'set-cookie-parser';
import _ from 'lodash';

class DocumentCookieWatcher extends EventTarget {
  constructor({
    debug = false,
    handler = () => {
      this.log('handler not set');
    },
    interval = 1000,
    leading = false,
    trailing = true,
  }) {
    super();
    this.debug = debug;
    this.interval = interval;
    this.enabled = false;
    this.cookies = [];
    this.rawCookies = [];
    this.descriptor =
      Object.getOwnPropertyDescriptor(Document.prototype, 'cookie') ||
      Object.getOwnPropertyDescriptor(HTMLDocument.prototype, 'cookie');

    const onDocumentCookieSet = _.throttle(handler, this.interval, {
      leading: leading,
      trailing: trailing
    });
    this.addEventListener('DocumentCookieSet', (e) => {
      this.log('DocumentCookieSet:', e.detail);
      onDocumentCookieSet(this, e);
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

    Object.defineProperty(document, 'cookie', {
      configurable: true,
      enumerable: true,
      get: () => {
        return this.descriptor.get.call(document);
      },
      set: (value) => {
        this.descriptor.set.call(document, value);
        this.log('document.cookie set:', value);

        this.rawCookies.push(value);

        const result = parse(value);
        let parsed = null;
        if (result.length > 0) {
          parsed = result[0];
          this.log('cookie parsed:', parsed);
          this.cookies.push(parsed);
        }

        this.dispatchEvent(new CustomEvent('DocumentCookieSet', {
          detail: {
            raw: value,
            parsed: parsed,
          }
        }));
      }
    });

    this.enabled = true;
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
      set: (value) => {
        this.descriptor.set.call(document, value);
      }
    });

    this.enabled = false;
  }

  flush() {
    const cookies = this.cookies;
    const rawCookies = this.rawCookies;
    this.cookies = [];
    this.rawCookies = [];
    return {
      cookies: cookies,
      rawCookies: rawCookies,
    };
  }
}

// export default DocumentCookieWatcher;
window.DocumentCookieWatcher = DocumentCookieWatcher;