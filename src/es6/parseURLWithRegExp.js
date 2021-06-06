import getURLSearchParams from './getURLSearchParams'

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
const parseURLWithRegExp = (url = location.href, base) => {
  const pattern = /^(([^:/?#]+):)?\/\/(([^/?#]+):(.+)@)?([^/?#:]*)(:(\d+))?([^?#]*)(\\?([^#]*))?(#(.*))?/
  let matches,
    hostname,
    port,
    pathname,
    search,
    searchParams

  if (base) {
    if (/[/]$/.test(base)) {
      base = base.replace(/[/]$/, '')
    }

    if (!/^[/]/.test(url)) {
      url = '/' + url
    }

    url = base + url
  }

  matches = url.match(pattern)
  hostname = matches[6]
  port = matches[8] || ''
  pathname = matches[11] || '/'
  search = matches[10] || ''
  searchParams = (() => {
    const params = getURLSearchParams(url)

    return {
      get (name) {
        return params[name] || ''
      }
    }
  })()

  return {
    href: url,
    origin: (matches[1] ? matches[1] + '//' : '') + hostname,
    protocol: matches[2] || '',
    username: matches[4] || '',
    password: matches[5] || '',
    hostname: hostname,
    port: port,
    host: hostname + port,
    pathname: pathname,
    search: search,
    path: pathname + search,
    hash: matches[13] || '',
    searchParams: searchParams
  }
}

export default parseURLWithRegExp
