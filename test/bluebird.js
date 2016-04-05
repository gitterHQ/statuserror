var Promise = require('bluebird');
var StatusError = require('..');
var assert = require('assert');

describe('bluebird', function() {
  Promise.config({
    warnings: true
  });

  it('should work nicely with bluebird', function() {
    var caught = 0;
    return new Promise(function(resolve, reject) {
      reject(new StatusError(500));
    })
    .catch(StatusError, function(e) {
      assert.strictEqual(e.status, 500);
      assert.strictEqual(e.message, "Internal Server Error");
      caught++;
    })
    .then(function() {
      assert.strictEqual(caught, 1);
    });
  });

  it('should work with bluebird predicates', function() {
    var caught = 0;
    return new Promise(function(resolve, reject) {
      reject(new StatusError(404));
    })
    .catch({ status: 404 }, function(e) {
      assert.strictEqual(e.status, 404);
      assert.strictEqual(e.message, "Not Found");
      caught++;
    })
    .then(function() {
      assert.strictEqual(caught, 1);
    });
  });

});
