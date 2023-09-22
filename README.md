# parseURL.js

[![npm version](https://img.shields.io/npm/v/@yaohaixiao/parseurl.js)](https://www.npmjs.com/package/@yaohaixiao/parseurl.js)
![Gzip size](http://img.badgesize.io/https://cdn.jsdelivr.net/gh/yaohaixiao/parseURL.js/parseURL.min.js?compression=gzip&label=gzip%20size)
[![prettier code style](https://img.shields.io/badge/code_style-prettier-07b759.svg)](https://prettier.io)
[![Coverage](https://codecov.io/gh/yaohaixiao/parseURL.js/branch/main/graph/badge.svg)](https://codecov.io/gh/yaohaixiao/parseURL.js)
[![npm downloads](https://img.shields.io/npm/dm/@yaohaixiao/parseurl.js)](https://npmcharts.com/compare/@yaohaixiao/parseurl.js?minimal=true)
[![MIT License](https://img.shields.io/github/license/yaohaixiao/parseurl.js.svg)](https://github.com/yaohaixiao/delegate.js/blob/master/LICENSE)

parseURL.js - 专门解析 URL 地址信息的 JavaScript 工具。



## 项目初衷

编写 parseURL.js 主要是为初学 JavaScript 的朋友了解在 JavaScript 中 [如何使用 JavaScript 解析 URL？](http://www.yaohaixiao.com/blog/how-to-parse-url-in-javascript/)而开发的。当然，parseURL.js 也完全可以胜任在实际产品开发的应用。



## Features


- 原生 JavaScript 编写，无任何依赖；
- 支持 UMD 模块规范，同时也提供 ES6 模块调用；
- 解析的 URL 地址信息非常全面：
  1. href - 完整 URL 地址
  2. origin - 原始输入
  3. protocol - 协议
  4. username - 用户名
  5. password - 密码
  6. host - 域名地址
  7. hostname - 域名名称
  8. port - 端口号
  9. path - 路径
  10. pathname - 路径名
  11. search - 查询参数
  12. searchParams
  13. hash - 哈希值
- 文件体积小(GZip：1KB)，加载速度快；



## Browsers support

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](https://github.com/yaohaixiao/parseURL.js/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](https://github.com/yaohaixiao/parseURL.js/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](https://github.com/yaohaixiao/parseURL.js/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](https://github.com/yaohaixiao/parseURL.js/)</br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](https://github.com/yaohaixiao/parseURL.js/)</br>Opera |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| IE11, Edge                                                                                                                                                                                               | last 10 versions                                                                                                                                                                                           | last 10 versions                                                                                                                                                                                       | last 10 versions                                                                                                                                                                                       | last 10 versions                                                                                                                                                                                   |




## Install
parseURL.js 支持 AMD 和 CommonJS 规范的模块调用方式，可以直接使用 npm 安装，也可以使用 script 标签引入到页面。


### npm install


```shell
npm i -S @yaohaixiao/parseurl.js
```

### script

可以根据项目的实际情况，选择调用 CDN 文件或者本地文件。

#### CDN

```html
<script src="https://cdn.jsdelivr.net/gh/yaohaixiao/parseurl.js/parseURL.min.js"></script>
```

#### Local

```html
<script src="path/to/parseURL.min.js"></script>
```



## Usage

parseURL.js 支持 UMD 模块规范，也支持作为 ES6 模块使用。

### 作为 CommonJS 模块使用

```js
// Node.js 环境中使用
const parseURL = require('@yaohaixiao/parseurl.js')

// 使用绝对路径
const url = parseURL('https://github.com/yaohaixiao/parseurl.js?id=23')

// 获取查询字符串中 id 的值，如果没有则返回空
url.searchParams.get('id') // -> '23'
```

### 作为 ES6 模块使用

```js
// 作为 ES6 模块使用
import parseURL from '@yaohaixiao/parseurl.js/parseURL'

// 使用基础路径
const url = parseURL('/yaohaixiao/parseurl.js?age=24', 'https://github.com')

// 获取查询字符串中 age 的值，如果没有则返回空
url.searchParams.get('age') // -> '24'
```


## API Documentation

parseURL.js 提供了一个核心方法 parseURL().

### parseURL(url[, base])

#### Parameters

##### url

Type: `String`

Default: ``

（必须）表示绝对或相对 URL 的字符串。如果 url 是相对 URL，则会将 base 用作基准 URL。如果 url 是绝对URL，则无论参数base是否存在，都将被忽略；

##### base

Type: `String`

Default: ``

（必须）表示基准 URL 的字符串。在 url 是相对 URL 时，它才会起效。如果未指定，则默认为 ”；

#### Returns

Type: `Object`

返回解析 URL 地址信息后的（JSON）对象：

```js
const url = parseURL('https://yaohaixiao:parseUrl.js@github.com:8080/yaohaixiao/parseurl.js?col=24&row=23#top')
// ->
// {
//   href: "https://yaohaixiao:parseUrl.js@github.com:8080/yaohaixiao/parseurl.js?col=24&row=23#top",
//   origin:
//   "https://github.com:8080",
//   protocol: "https:",
//   username: "yaohaixiao",
//   password: "parseUrl.js",
//   hostname: "github.com",
//   port: "8080",
//   host: "github.com:8080",
//   pathname: "/yaohaixiao/parseurl.js",
//   search: "?col=24&row=23",
//   searchParams: {
//     get(prop) {
//      // ... 获取 search 数据的方法
//     }
//   },
//   path: "/yaohaixiao/parseurl.js?col=24&row=23",
//   hash: "#top"
//  }
```


## License
Licensed under MIT License.
