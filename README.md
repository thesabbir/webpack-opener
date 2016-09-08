#[Opener](https://www.npmjs.com/package/opener) plugin for webpack

Opens up your default web browser with provided url when webpack successfully builds your project for first time.

#Install

via npm:

```
npm i -D webpack-opener
```


#Example Usage

```js
const OpenerPlugin = require('webpack-opener');

module.exports = {
  context: __dirname + "/app",
  entry: "./main.js",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },
  plugins: [
    new OpenerPlugin('http://localhost:8090')
  ]
};

```

You need to provide a url string with http:// prefix as argument (default is http://localhost:8080).

#License
The MIT License (MIT)
Copyright (c) 2016 - Sabbir Ahmed

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
