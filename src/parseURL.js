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
 * ====================================================
 * @param {String} url - URL地址
 * @returns {Object}
 */
const parseURLWithRegExp = (url = location.href) => {
  const pattern = /^(([^:/?#]+):)?\/\/(([^/?#]+):(.+)@)?([^/?#:]*)(:(\d+))?([^?#]*)(\\?([^#]*))?(#(.*))?/
  const matches = url.match(pattern)
  const protocol = matches[2] || ''
  const hostname = matches[6]
  const port = matches[8] || ''
  const pathname = matches[11] || '/'
  const search = matches[10] || ''
  const origin = (matches[1] ? matches[1] + '//' : '') + hostname

  return {
    href: url,
    origin: origin,
    protocol: protocol,
    username: matches[4] || '',
    password: matches[5] || '',
    hostname: hostname,
    port: port,
    host: hostname + port,
    pathname: pathname,
    search: search,
    path: pathname + search,
    hash: matches[13] || ''
  }
}

const parseURLWithURLConstructor = (url= location.href) => {
  const results = new URL(url)
  const protocol = results.protocol.replace(':', '')

  return {
    href: url,
    origin: results.origin,
    protocol: protocol,
    username: results.username,
    password: results.password,
    hostname: results.hostname,
    port: results.port,
    host: results.host,
    pathname: results.pathname,
    search: results.search,
    path: results.pathname + results.search,
    hash: results.hash
  }
}

const parseURL = (url= location.href) => {
  if (window.ActiveXObject) {
    return parseURLWithRegExp(url)
  } else {
    return parseURLWithURLConstructor(url)
  }
}
