var createEvent = require('../');
var test = require('tape');

test('dblclick - has correct defaults', function(t) {
  t.plan(13);
  var e = createEvent('dblclick');
  t.ok(e.bubbles);
  t.ok(e.cancelable);
  t.equal(e.view, window);
  t.equal(e.detail, 2);
  t.equal(e.screenX, 0);
  t.equal(e.screenY, 0);
  t.equal(e.clientX, 0);
  t.equal(e.clientY, 0);
  t.notOk(e.ctrlKey);
  t.notOk(e.altKey);
  t.notOk(e.shiftKey);
  t.notOk(e.metaKey);
  t.equal(e.button, 0);
});

test('dblclick - can set options', function(t) {
  t.plan(13);
  var e = createEvent('dblclick', {
    bubbles: false,
    cancelable: false,
    screenX: 1,
    screenY: 2,
    clientX: 3,
    clientY: 4,
    ctrl: true,
    alt: true,
    shift: true,
    meta: true,
    button: 2
  });
  t.notOk(e.bubbles);
  t.notOk(e.cancelable);
  t.equal(e.view, window);
  t.equal(e.detail, 2);
  t.equal(e.screenX, 1);
  t.equal(e.screenY, 2);
  t.equal(e.clientX, 3);
  t.equal(e.clientY, 4);
  t.ok(e.ctrlKey);
  t.ok(e.altKey);
  t.ok(e.shiftKey);
  t.ok(e.metaKey);
  t.equal(e.button, 2);
});