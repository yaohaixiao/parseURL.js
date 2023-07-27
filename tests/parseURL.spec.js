import parseURL from '@/parseURL'

import {
  URL_ONE,
  URL_TWO,
  URL_THREE,
  URL_FOUR,
  DATA_ONE,
  DATA_TWO,
  DATA_THREE,
  DATA_FOUR
} from './utils/enum'

describe('parseURL() 方法', () => {
  it(`parseURL('')`, () => {
    expect(parseURL('')).toEqual(null)
  })

  it(`parseURL(${URL_ONE})`, () => {
    expect(JSON.stringify(parseURL(URL_ONE))).toEqual(JSON.stringify(DATA_ONE))
  })

  it(`parseURL('/yaohaixiao/parseurl.js', 'https://github.com')}`, () => {
    expect(
      JSON.stringify(parseURL('/yaohaixiao/parseurl.js', 'https://github.com'))
    ).toEqual(JSON.stringify(DATA_ONE))
  })

  it(`parseURL('${URL_TWO}')`, () => {
    expect(JSON.stringify(parseURL(URL_TWO))).toEqual(JSON.stringify(DATA_TWO))
  })

  it(`parseURL('${URL_THREE}')`, () => {
    const url = parseURL(URL_THREE)
    expect(JSON.stringify(url)).toEqual(JSON.stringify(DATA_THREE))
    expect(url.searchParams.get('col')).toEqual('24')
    expect(url.searchParams.get('age')).toEqual(null)
  })

  it(`parseURL('${URL_FOUR}')`, () => {
    const url = parseURL(URL_FOUR)
    expect(JSON.stringify(url)).toEqual(JSON.stringify(DATA_FOUR))
    expect(url.searchParams.get('col')).toEqual('24')
    expect(url.searchParams.get('age')).toEqual(null)
  })
})
