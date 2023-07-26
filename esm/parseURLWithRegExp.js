import getSearchParams from './getSearchParams'
import _getURLPattern from './_getURLPattern'

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
 * @returns {Object|Null}
 */
const parseURLWithRegExp = (url, base = undefined) => {
  // /^(([^:/?#]+):)?\/\/(([^/?#]+):(.+)@)?([^/?#:]*)(:(\d+))?([^?#]*)(\\?([^#]*))?(#(.*))?/
  const pattern = _getURLPattern()
  const slashAtTheEnd = /\/$/
  let matches
  let href
  let hostname
  let origin
  let protocol
  let username
  let password
  let port
  let host
  let pathname
  let search
  let path
  let hash

  if (base) {
    // 移除 base 最后的斜杠 ‘/’
    base = base.replace(slashAtTheEnd, '')

    // 确保 url 开始有斜杠
    if (!url.startsWith('/')) {
      url = '/' + url
    }

    href = base + url
  } else {
    href = url
  }

  matches = pattern.exec(href)

  if (matches === null) {
    return null
  }

  hostname = matches[6]
  protocol = matches[1] || ''
  username = matches[3] || ''
  password = matches[4] || ''
  port = matches[13] ? matches[13].replace(':', '') : ''
  host = matches[5]
  pathname = matches[15]
  search = matches[17] || ''
  origin = protocol + '//' + host
  path = matches[14]
  hash = matches[18] || ''

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
    path,
    hash,
    searchParams: getSearchParams(search)
  }
}

export default parseURLWithRegExp
