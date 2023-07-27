/**
 * 分析 url 地址，将解析的结果作为对象返回，返回属性有：
 * 1. href - 完整 URL 地址
 * 2. protocol - 协议
 * 3. username - 用户名
 * 4. password - 密码
 * 5. host - 域名地址
 * 6. hostname - 域名名称
 * 7. port - 端口号
 * 8. path - 路径
 * 9. pathname - 路径名
 * 10. search - 查询参数
 * 11. hash - 哈希值
 * 12. origin
 * 13. searchParams
 * ====================================================
 * @param {String} url - URL地址
 * @param {String} [base] - 基准 URL 地址
 * @returns {Object}
 */
const parseURLWithURLConstructor = (url, base = undefined) => {
  const results = new URL(url, base)
  const protocol = results.protocol

  return {
    href: results.href,
    origin: results.origin,
    protocol,
    username: results.username,
    password: results.password,
    hostname: results.hostname,
    port: results.port,
    host: results.host,
    pathname: results.pathname,
    search: results.search,
    path: results.pathname + results.search,
    hash: results.hash,
    searchParams: results.searchParams
  }
}

export default parseURLWithURLConstructor
