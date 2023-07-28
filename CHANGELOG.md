## [1.2.1](https://github.com/yaohaixiao/parseURL.js/compare/1.2.0...1.2.1) (2023-07-28)


### Bug Fixes

* 修复调整代码结构后，build 配置路径错误问题 ([a0451c6](https://github.com/yaohaixiao/parseURL.js/commit/a0451c6b542bcc001130b95cce0a4f9145bd4ad7))



# [1.2.0](https://github.com/yaohaixiao/parseURL.js/compare/1.1.1...1.2.0) (2023-07-27)


### Features

* 调整代码结构和对应的 README.md 说明信息 ([b53c023](https://github.com/yaohaixiao/parseURL.js/commit/b53c023a76b49c3865107110f138b9ff448fe852))



## [1.1.1](https://github.com/yaohaixiao/parseURL.js/compare/1.1.0...1.1.1) (2023-07-26)


### Bug Fixes

* 移除多余无用的代码和单测代码； ([b413494](https://github.com/yaohaixiao/parseURL.js/commit/b413494f1e631c81fe77213983f29d7efd76f998))
* 修复采用 URL() 函数的判断方法，改成采用功能探测方式；


# 1.1.0 (2023-07-26)

parseURL.js - 专门解析 URL 地址信息的 JavaScript 工具。

## 项目初衷

编写 parseURL.js 主要是为初学 JavaScript 的朋友了解在 JavaScript 中[如何使用 JavaScript 解析 URL？](http://www.yaohaixiao.com/blog/how-to-parse-url-in-javascript/)而开发的。当然，parseURL.js 也完全可以胜任在实际产品开发的应用。


## Features


- 原生 JavaScript 编写，无任何依赖；
- 支持 UMD 模块规范，同时也提供 ES6 模块调用；
- 解析的 URL 地址信息非常全面：
    1. href - 完整 URL 地址
    2. protocol - 协议
    3. username - 用户名
    4. password - 密码
    5. host - 域名地址
    6. hostname - 域名名称
    7. port - 端口号
    8. path - 路径
    9. pathname - 路径名
    10. search - 查询参数
    11. hash - 哈希值
    12. origin
    13. searchParams
- 文件体积小(GZip：1KB)，加载速度快；

