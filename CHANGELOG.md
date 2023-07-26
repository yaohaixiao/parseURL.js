# 1.0.0 (2023-07-26)

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
