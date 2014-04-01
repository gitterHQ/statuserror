/*jshint node: true */
'use strict';

function StatusError(status, message) {
  this.constructor.prototype.__proto__ = Error.prototype;
  Error.captureStackTrace(this, this.constructor);
  this.name = this.constructor.name;
  this.message = message;
  this.status = status;
}

module.exports = StatusError;