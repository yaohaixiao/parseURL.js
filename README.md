# parseURL
A JavaScript function parse URL string to an object: href, origin, username, password, hostname, port, host, pathname, search, path & hash.

## Install

### npm install

```shell
npm i -S parse-url
```

### script
```html
<script src="path/to/parseURL.js"></script>
```


## Usage

```js
// require as a amd module
const parseURL = require('parse-url')

/* OUTPUT:
 {
 "href": "https://github.com/yaohaixiao/parseURL",
 "origin": "https://github.com",
 "protocol": "https",
 "username": "",
 "password": "",
 "hostname": "github.com",
 "port": "",
 "host": "github.com",
 "pathname": "/yaohaixiao/parseURL",
 "search": "",
 "path": "/yaohaixiao/parseURL",
 "hash": ""
 }
 */
parseURL('https://github.com/yaohaixiao/parseURL')
```
## Example
https://yaohaixiao.github.io/parseURL/

## License
Licensed under MIT License.
