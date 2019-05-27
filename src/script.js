(() => {
  const config = {
    handler: (dcw, e) => {
      console.log(dcw.flush());
    }
  };
  const dcw = new window.DocumentCookieWatcher(config);
  dcw.enable();

  window.dcw = dcw;
})();