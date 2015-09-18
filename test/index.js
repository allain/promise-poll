var test = require('blue-tape');

var poll = require('..');

test('rejects if after timeout', function(t) {
  return poll(function() { return false; }, 50).then(t.fail).catch(function(err) {
    t.ok(err instanceof Error);
  });
});

test('resolves with value predicate returns', function(t) {
  return poll(function() {
    return 'test';
  }, 50).then(function(val) {
    t.equal(val, 'test');
  }, t.fail);
});