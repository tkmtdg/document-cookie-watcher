import * as compareVersions from 'compare-versions';

class ITPTargetDetector {
  static getFirstMatch(re, s) {
    if (typeof s !== 'string') {
      return '';
    }
    const match = s.match(re);
    return (match && match.length > 0 && match[1]) || '';
  }

  static getTargetPlatform(ua) {
    const platform = {
      isIOS: false,
      isMac: false,
      osVersion: null,
      isSafari: false,
      safariVersion: null,
    };

    if (typeof ua !== 'string') {
      return platform;
    }

    if (/macintosh/i.test(ua)) {
      platform.isMac = true;
      platform.osVersion = this.getFirstMatch(
        /mac os x (\d+(\.?_?\d+)+)/i,
        ua
      ).replace(/[_\s]/g, '.');
    } else if (/(ipod|iphone|ipad)/i.test(ua)) {
      platform.isIOS = true;
      platform.osVersion = this.getFirstMatch(
        /os (\d+([_\s]\d+)*) like mac os x/i,
        ua
      ).replace(/[_\s]/g, '.');
    }

    if (/safari/i.test(ua) && !/chrom(e|ium)/i.test(ua)) {
      platform.isSafari = true;
      platform.safariVersion = this.getFirstMatch(
        /version\/(\d+(\.?_?\d+)+)/i,
        ua
      ).replace(/[_\s]/g, '.');
    }

    return platform;
  }

  static isITP_2_1(ua) {
    if (typeof ua !== 'string') {
      return false;
    }

    const platform = this.getTargetPlatform(ua);

    try {
      if (
        platform.isIOS &&
        platform.osVersion !== null &&
        compareVersions(platform.osVersion, '12.2') >= 0
      ) {
        return true;
      } else if (
        platform.isMac &&
        platform.isSafari &&
        platform.safariVersion !== null &&
        compareVersions(platform.safariVersion, '12.1') >= 0
      ) {
        return true;
      }
    } catch (e) {
      return false;
    }

    return false;
  }
}

export default ITPTargetDetector;
