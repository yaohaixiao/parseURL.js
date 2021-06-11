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
const parseURLWithRegExp = (url = location.href, base = '') => {
  const pattern = /^(([^:/?#]+):)?\/\/(([^/?#]+):(.+)@)?([^/?#:]*)(:(\d+))?([^?#]*)(\\?([^#]*))?(#(.*))?/,
    isEndWithSlash = /[/]$/,
    matches = url.match(pattern),
    hostname = matches[6],
    port = matches[8] || '',
    pathname = matches[11] || '/',
    search = matches[10] || '',
    searchParams = (() => {
      const params = getURLSearchParams(url)

      return {
        get (name) {
          return params[name] || ''
        }
      }
    })()

  // 设置了基准 URL, 并且 url 不是绝对路径时，
  // 如果 URL 是绝对路径，则忽略 base
  if (!/^(([^:/?#]+):)/.test(url) && base) {
    // 移除 base 最后的斜杠 ‘/’
    if (/[/]$/.test(base)) {
      base = base.replace(isEndWithSlash, '')
    }

    // 确保 url 开始有斜杠
    if (!isEndWithSlash.test(url)) {
      url = '/' + url
    }

    // 保证 URL 地址拼接后是一个正确的格式
    url = base + url
  }

  return {
    href: url,
    origin: (matches[1] ? matches[1] + '//' : '') + hostname,
    protocol: matches[2] || '',
    username: matches[4] || '',
    password: matches[5] || '',
    hostname,
    port,
    host: hostname + port,
    pathname,
    search,
    path: pathname + search,
    hash: matches[13] || '',
    searchParams
  }
}

export default parseURLWithRegExp
