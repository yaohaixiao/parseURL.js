# parseURL.js
parseURL.js 提供一个 parseURL() 函数方法，可以很方便快速地解析出 URL 字符串中的各个信息，并将解析出的 URL 信息作为一个对象返回。返回的对象中包含的 URL 信息有：href、origin、username、password、hostname、port、host、pathname、search、path 和 hash。

## Install
parseURL.js 支持 AMD 和 CommonJS 规范的模块调用方式，可以直接使用 npm 安装，也可以使用 script 标签引入到页面。

### npm install

```shell
npm i -S parseurl.js
```

### script 
```html
<script src="path/to/parseURL.js"></script>
```
## Syntax

```js
parseURL(url[, base])
```

### Parameters

- url：是一个表示绝对或相对 URL 的 DOMString。如果url 是相对 URL，则会将 base 用作基准 URL。如果 url 是绝对URL，则无论参数base是否存在，都将被忽略；
- base：可选，是一个表示基准 URL 的 DOMString，在 url 是相对 URL 时，它才会起效。如果未指定，则默认为 ”；

## Usage

```js
const parseURL = require('parseurl.js')

// 使用绝对路径
parseURL('https://github.com/yaohaixiao/parseURL')

// 使用基础路径
parseURL('/yaohaixiao/parseURL', 'https://github.com')

// 获取查询字符串中 id 的值，如果没有则返回空
url.searchParams.get('id')
```
输出结果如下：

```json
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
   "hash": "",
    "searchParams": {}
 }
```

## Example
https://yaohaixiao.github.io/parseURL.js/

## License
Licensed under MIT License.
