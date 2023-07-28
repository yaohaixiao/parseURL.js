import getURLSearchParams from './getURLSearchParams'

/**
 * 返回 searchParams 对象（ URLSearchParams 对象实例），
 * 用来获取查询字符串中的某个参数的值
 * ====================================================
 * method getSearchParams
 * @param {String} url
 * @returns {*|null|{get(*): *}}
 */
const getSearchParams = (url) => {
  const params = getURLSearchParams(url)

  return {
    get(name) {
      return params[name] || null
    }
  }
}

export default getSearchParams
