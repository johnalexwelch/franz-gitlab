module.exports = Franz => class GitLab extends Franz {
    overrideUserAgent() {
      return window.navigator.userAgent.replace(/(Franz|Electron)([^\s]+\s)/g, '');
    }
  };
  