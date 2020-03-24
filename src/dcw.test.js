import DocumentCookieWatcher from './dcw.js';
import { JSDOM } from 'jsdom';
const dom = new JSDOM();
global.document = dom.window.document;
global.window = dom.window;

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

test('enable', () => {
  var dcw = new DocumentCookieWatcher();
  dcw.enable();
  expect(dcw.enabled).toBe(true);
  global.document.cookie = 'aaa=bbb';
  expect(global.document.cookie).toBe('aaa=bbb');
});

test('disable', () => {
  var dcw = new DocumentCookieWatcher();
  dcw.enable();
  dcw.disable();
  expect(dcw.enabled).toBe(false);
  dcw.disable();
});

test('flush', () => {
  var dcw = new DocumentCookieWatcher();
  dcw.rawCookies = [
    'aaa=bbb',
    'aaa=bbb',
    'hoge',
    'fuga\r\n=piyo',
    'fuga\r=piyo',
    'fuga\n=piyo',
    'ccc=ddd',
    'eee=fff',
    'ggg=hhh',
  ];

  const result = dcw.flush({ filters: ['ccc', 'ggg'] });
  expect(result.filteredCookies).toStrictEqual(['ccc=ddd', 'ggg=hhh']);
});
