test('newable', () => {
  var dcw = new DocumentCookieWatcher();
  expect(dcw).toBeDefined();
});

test('defaults', () => {
  // debug = false,
  // handler = () => {
  //   this.log('handler not set');
  // },
  // interval = 1000,
  // leading = false,
  // trailing = true,
});

test('log', () => {
  const spyLog = jest.spyOn(console, 'log');
  spyLog.mockImplementation(x => x);

  var dcw = new DocumentCookieWatcher({
    debug: true,
  });

  spyLog.mockReset();

  dcw.log('aaa', 'bbb');

  expect(console.log).toBeCalled();
  expect(spyLog.mock.calls[0].join(' ')).toBe('[dcw] aaa bbb');
  spyLog.mockReset();
  spyLog.mockRestore();
});
