# statuserror

[![Join the chat at https://beta.gitter.im/gitterHQ/statuserror](https://badges-beta.gitter.im/gitterHQ/statuserror.svg)](https://beta.gitter.im/gitterHQ/statuserror?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

An error with a status code.

## Usage

Install:

```shell
npm i statuserror --save
```

Use:
```js
var StatusError = require('statuserror');

// Without a message...
var e = new StatusError(404);
// e.status == 404
// e.message = "Not Found"

// With a message...
var e = new StatusError(500, "Something has gone horribly wrong");
// e.status == 500
// e.message = "Something has gone horribly wrong"

// With `throw`...
function doSomething(value) {
  if (!value) throw new StatusError(400, 'Value expected');
  // ...
}

// With Bluebird...
new Promise(function(resolve, reject) {
    reject(new StatusError(500));
  })
  .catch(StatusError, function() {
    //
  })
```
