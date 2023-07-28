/**
 * 分析 url 地址，将解析的结果作为对象返回，返回属性有：
 * 1. href - 完整 URL 地址
 * 2. origin - 原始输入
 * 3. protocol - 协议
 * 4. username - 用户名
 * 5. password - 密码
 * 6. host - 域名地址
 * 7. hostname - 域名名称
 * 8. port - 端口号
 * 9. path - 路径
 * 10. pathname - 路径名
 * 11. search - 查询参数
 * 12. searchParams
 * 13. hash - 哈希值
 * ====================================================
 * @method parseURLWithURLConstructor
 * @param {String} url - URL地址
 * @param {String} [base] - 基准 URL 地址
 * @returns {Object}
 */
const parseURLWithURLConstructor = (url, base = undefined) => {
  const results = new URL(url, base)
  const href = results.href
  const origin = results.origin
  const protocol = results.protocol
  const username = results.username
  const password = results.password
  const hostname = results.hostname
  const port = results.port
  const host = results.host
  const pathname = results.pathname
  const search = results.search
  const searchParams = results.searchParams
  const path = results.pathname + results.search
  const hash = results.hash

  return {
    href,
    origin,
    protocol,
    username,
    password,
    hostname,
    port,
    host,
    pathname,
    search,
    searchParams,
    path,
    hash
  }
}

export default parseURLWithURLConstructor
