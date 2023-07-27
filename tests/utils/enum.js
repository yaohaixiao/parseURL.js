import getSearchParams from '../../getSearchParams'

export const URL_ONE = 'https://github.com/yaohaixiao/parseurl.js'
export const URL_TWO = 'https://github.com/yaohaixiao/parseurl.js?col=24&row=23'
export const URL_THREE =
  'https://yaohaixiao:parseUrl.js@github.com:8080/yaohaixiao/parseurl.js?col=24&row=23#top'
export const URL_FOUR =
  '//yaohaixiao:parseUrl.js@github.com:8080/yaohaixiao/parseurl.js?col=24&row=23#top'

export const DATA_ONE = {
  href: URL_ONE,
  origin: 'https://github.com',
  protocol: 'https:',
  username: '',
  password: '',
  hostname: 'github.com',
  port: '',
  host: 'github.com',
  pathname: '/yaohaixiao/parseurl.js',
  search: '',
  path: '/yaohaixiao/parseurl.js',
  hash: '',
  searchParams: getSearchParams(URL_ONE)
}

export const DATA_TWO = {
  href: URL_TWO,
  origin: 'https://github.com',
  protocol: 'https:',
  username: '',
  password: '',
  hostname: 'github.com',
  port: '',
  host: 'github.com',
  pathname: '/yaohaixiao/parseurl.js',
  search: '?col=24&row=23',
  path: '/yaohaixiao/parseurl.js?col=24&row=23',
  hash: '',
  searchParams: getSearchParams(URL_TWO)
}

export const DATA_THREE = {
  href: URL_THREE,
  origin: 'https://github.com:8080',
  protocol: 'https:',
  username: 'yaohaixiao',
  password: 'parseUrl.js',
  hostname: 'github.com',
  port: '8080',
  host: 'github.com:8080',
  pathname: '/yaohaixiao/parseurl.js',
  search: '?col=24&row=23',
  path: '/yaohaixiao/parseurl.js?col=24&row=23',
  hash: '#top',
  searchParams: getSearchParams(URL_THREE)
}

export const DATA_FOUR = {
  href: URL_FOUR,
  origin: '//github.com:8080',
  protocol: '',
  username: 'yaohaixiao',
  password: 'parseUrl.js',
  hostname: 'github.com',
  port: '8080',
  host: 'github.com:8080',
  pathname: '/yaohaixiao/parseurl.js',
  search: '?col=24&row=23',
  path: '/yaohaixiao/parseurl.js?col=24&row=23',
  hash: '#top',
  searchParams: getSearchParams(URL_FOUR)
}
