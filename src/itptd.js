import * as compareVersions from 'compare-versions';

class ITPTargetDetector {
  constructor() {
    // noop
  }

  getFirstMatch(re, s) {
    const match = s.match(re);
    return (match && match.length > 0 && match[1]) || '';
  }

  getTargetPlatform(ua) {
    const platform = {
      isIOS: false,
      isMac: false,
      osVersion: null,
      isSafari: false,
      safariVersion: null,
    };

    if (
      /macintosh/i.test(ua)
    ) {
      platform.isMac = true;
      platform.osVersion = this.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i, ua).replace(/[_\s]/g, '.');
    } else if (
      /(ipod|iphone|ipad)/i.test(ua)
    ) {
      platform.isIOS = true;
      platform.osVersion = this.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i, ua).replace(/[_\s]/g, '.');
    }

    if (
      /safari/i.test(ua) &&
      !/chrom(e|ium)/i.test(ua)
    ) {
      platform.isSafari = true;
      platform.safariVersion = this.getFirstMatch(/version\/(\d+(\.?_?\d+)+)/i, ua).replace(/[_\s]/g, '.');
    }

    return platform;
  }

  isTarget(ua) {
    const platform = this.getTargetPlatform(ua);
    if (
      platform.isIOS &&
      compareVersions(platform.osVersion, '12.2') >= 0
    ) {
      return true;
    } else if (
      platform.isMac &&
      platform.isSafari &&
      compareVersions(platform.safariVersion, '12.1') >= 0
    ) {
      return true;
    }
    return false;
  }
}

export default ITPTargetDetector;