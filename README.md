# statuserror

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
