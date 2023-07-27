import getURLSearchParams from './getURLSearchParams'

const getSearchParams = (url) => {
  const params = getURLSearchParams(url)

  return {
    get(name) {
      return params[name] || null
    }
  }
}

export default getSearchParams
