const test = require('tape');
const window = require('global/window');

const createEvent = require('../');

test('keydown - has correct defaults', (t) => {
  t.plan(9);
  const e = createEvent('keydown');
  t.ok(e.bubbles);
  t.ok(e.cancelable);
  t.equal(e.view, window);
  t.notOk(e.ctrlKey);
  t.notOk(e.altKey);
  t.notOk(e.shiftKey);
  t.notOk(e.metaKey);
  t.equal(e.keyCode, 0);
  t.equal(e.charCode, 0);
});

test('keydown - can set options', (t) => {
  t.plan(9);
  const e = createEvent('keydown', {
    bubbles: false,
    cancelable: false,
    ctrl: true,
    alt: true,
    shift: true,
    meta: true,
    key: 42,
  });
  t.notOk(e.bubbles);
  t.notOk(e.cancelable);
  t.equal(e.view, window);
  t.ok(e.ctrlKey);
  t.ok(e.altKey);
  t.ok(e.shiftKey);
  t.ok(e.metaKey);
  t.equal(e.keyCode, 42);
  t.equal(e.charCode, 42);
});

test('keydown - can pass a string keyname', (t) => {
  t.plan(1);
  const e = createEvent('keydown', { key: 'enter' });
  t.equal(e.keyCode, 13);
});

test('keydown - supports `shift: false`', (t) => {
  t.plan(1);
  const e = createEvent('keydown', { key: 'tab', shift: false });
  t.notOk(e.shiftKey);
});
