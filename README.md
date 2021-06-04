# parseURL
parseURL.js 提供一个 parseURL() 函数方法，可以很方便快速地解析出 URL 字符串中的各个信息，并将解析出的 URL 信息作为一个对象返回。返回的对象中包含的 URL 信息有：href、origin、username、password、hostname、port、host、pathname、search、path 和 hash。

## 安装
parseURL.js 支持 AMD 和 CommonJS 规范的模块调用方式，可以直接使用 npm 安装，也可以使用 script 标签引入到页面。

### npm 安装

```shell
npm i -S parseurl.js
```

### script 标签引入
```html
<script src="path/to/parseURL.js"></script>
```

## 调用方法

```js
const parseURL = require('parseurl.js')
parseURL('https://github.com/yaohaixiao/parseURL')
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
   "hash": ""
 }
```

## 在线演示地址
https://yaohaixiao.github.io/parseURL/

## License
Licensed under MIT License.
