test('newable', () => {
  var dcw = new DocumentCookieWatcher();
  expect(dcw).toBeDefined();
});

test('configurable', () => {
  const document = {
    cookie: x => x,
  };
  const spy = jest.spyOn(document, 'cookie');
  spy.mockImplementation(x => x);

  var dcw = new DocumentCookieWatcher();

  expect(dcw.configurable()).toBe(true);

  dcw.descriptor.configurable = false;
  expect(dcw.configurable()).toBe(false);

  spy.mockReset();
  spy.mockRestore();
});

test('defaults', () => {
  var dcw = new DocumentCookieWatcher();
  expect(dcw.debug).toBe(false);

  const spy = jest.spyOn(console, 'log');
  spy.mockImplementation(x => x);

  dcw.debug = true;
  dcw.handler();

  expect(console.log).toBeCalled();
  expect(spy.mock.calls[0].join(' ')).toBe('[dcw] handler not set');
  spy.mockReset();
  spy.mockRestore();

  expect(dcw.interval).toBe(1000);
  expect(dcw.leading).toBe(false);
  expect(dcw.trailing).toBe(true);
  expect(dcw.timeout).toBe(0);
});

test('log', () => {
  const spy = jest.spyOn(console, 'log');
  spy.mockImplementation(x => x);

  var dcw = new DocumentCookieWatcher({
    debug: true,
  });

  spy.mockReset();

  dcw.log('aaa', 'bbb');

  expect(console.log).toBeCalled();
  expect(spy.mock.calls[0].join(' ')).toBe('[dcw] aaa bbb');
  spy.mockReset();
  spy.mockRestore();
});
