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
 * @param {String} [base] - 基准 URL 地址
 * @returns {Object}
 */
const parseURL = (url = location.href, base = '') => {
  const isEndWithSlash = /[/]$/

  /**
   * 获取 URL 中的查询参数的键/值对象
   * @param {String} url - 要分析的 URL 地址字符串
   * @returns {Object} - 返回查询参数的键/值对象
   */
  const getURLSearchParams = (url) => {
    return (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce((a, v) => {
      return ((a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1)), a)
    }, {})
  }

  /**
   * 使用正则表达式分析 URL 地址
   * @param {String} url - URL 地址的字符串
   * @returns {Object}
   */
  const parseURLWithRegExp = (url) => {
    const pattern = /^(([^:/?#]+):)?\/\/(([^/?#]+):(.+)@)?([^/?#:]*)(:(\d+))?([^?#]*)(\\?([^#]*))?(#(.*))?/,
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

  /**
   * 使用 URL() 构造函数分析 URL 地址
   * @param {String} url - URL 地址的字符串
   * @returns {Object}
   */
  const parseURLWithURLConstructor = (url) => {
    const results = new URL(url),
      protocol = results.protocol.replace(':', '')

    return {
      href: url,
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
      hash: results.hash.replace('#', ''),
      searchParams: results.searchParams
    }
  }

  // 设置了基准 URL, 并且 url 不是绝对路径时，
  // 如果 URL 是绝对路径，则忽略 base
  if (!/^(([^:/?#]+):)/.test(url) && base) {
    // 移除 base 最后的斜杠 ‘/’
    if (isEndWithSlash.test(base)) {
      base = base.replace(isEndWithSlash, '')
    }

    // 确保 url 开始有斜杠
    if (!/^[/]/.test(url)) {
      url = '/' + url
    }

    // 保证 URL 地址拼接后是一个正确的格式
    url = base + url
  }

  // IE browser
  if (window.ActiveXObject) {
    return parseURLWithRegExp(url)
  } else {
    // Other browsers
    return parseURLWithURLConstructor(url)
  }
}
