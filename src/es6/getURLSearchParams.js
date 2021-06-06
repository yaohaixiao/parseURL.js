/**
 * 返回 URL 地址中的查询参数（键/值）对象
 * ====================================================
 * @param {String} [url] - 可选参数，URL 地址
 * @returns {Object|Null}
 */
const getURLSearchParams = (url) => {
  return (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce((a, v) => {
    return ((a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1)), a)
  }, {})
}

export default getURLSearchParams
