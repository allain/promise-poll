var Promise = require('native-promise-only');

module.exports = function poll(predicate, timeout, interval) {
  if (typeof predicate !== 'function') return Promise.reject(new Error('predicate must be a function'));
  if (typeof timeout !== 'number') return Promise.reject(new Error('timeout must be given'));

  return new Promise(function(resolve, reject) {
    function check() {
      var result = predicate();
      if (result) {
        clearInterval(intervalId);
        clearInterval(timeoutId);
        return resolve(result);
      }
    }
    check();

    var intervalId = setInterval(check, interval || 10);
    var timeoutId = setTimeout(function() {
      clearInterval(intervalId);
      reject(new Error('timeout'));
    }, timeout);
  });
};