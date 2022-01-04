import DocumentCookieWatcher from './dcw.js';
import { JSDOM } from 'jsdom';
const dom = new JSDOM();
global.document = dom.window.document;
global.window = dom.window;

test('newable', () => {
  const dcw = new DocumentCookieWatcher();
  expect(dcw).toBeDefined();
});

test('configurable', () => {
  const dcw = new DocumentCookieWatcher();
  expect(dcw.configurable()).toBe(true);

  dcw.descriptor.configurable = false;
  expect(dcw.configurable()).toBe(false);
});

test('defaults', () => {
  const dcw = new DocumentCookieWatcher();
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

  const dcw = new DocumentCookieWatcher({
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
  const spy = jest.fn();

  const dcw = new DocumentCookieWatcher();
  dcw.log = spy;

  dcw.enable();
  expect(dcw.enabled).toBe(true);
  expect(spy.mock.calls[0].join(' ')).toBe('enabled');

  dcw.enable();
  expect(spy.mock.calls[1].join(' ')).toBe('already enabled');
  
  dcw.descriptor.configurable = false;
  dcw.enable();
  expect(spy.mock.calls[2].join(' ')).toBe('document.cookie not configurable');

  global.document.cookie = 'aaa=bbb';
  expect(global.document.cookie).toBe('aaa=bbb');
});

test('disable', () => {
  const spy = jest.fn();

  const dcw = new DocumentCookieWatcher();
  dcw.log = spy;

  dcw.enable();
  dcw.disable();
  expect(dcw.enabled).toBe(false);
  expect(spy.mock.calls[1].join(' ')).toBe('disabled');

  dcw.disable();
  expect(spy.mock.calls[2].join(' ')).toBe('already disabled');

  dcw.descriptor.configurable = false;
  dcw.disable();
  expect(spy.mock.calls[3].join(' ')).toBe('document.cookie not configurable');

  global.document.cookie = 'aaa=bbb';
  expect(global.document.cookie).toBe('aaa=bbb');
});

test('flush', () => {
  const dcw = new DocumentCookieWatcher();
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

test('DocumentCookieSet', () => {
  const spyDispatchEvent = jest.fn();

  const dcw = new DocumentCookieWatcher();
  dcw.enable();
  dcw.dispatchEvent = spyDispatchEvent;
  global.document.cookie = 'aaa=bbb';

  expect(spyDispatchEvent.mock.calls.length).toBe(1);
  expect(spyDispatchEvent.mock.calls[0][0].type).toBe('DocumentCookieSet');
  expect(spyDispatchEvent.mock.calls[0][0].detail).toStrictEqual({
    rawCookie: 'aaa=bbb',
  });
});

test('timeout', () => {
  const dcw = new DocumentCookieWatcher({timeout:1});
  dcw.enable();

  global.document.cookie = 'aaa=bbb';
  
});