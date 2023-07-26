import parseURLWithRegExp from '../esm/parseURLWithRegExp'

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

describe('parseURLWithRegExp() 方法', () => {
  it(`parseURLWithRegExp('')，返回：null`, () => {
    expect(parseURLWithRegExp('')).toEqual(null)
  })

  it(`parseURLWithRegExp(${URL_ONE})，返回：${JSON.stringify(
    DATA_ONE
  )}`, () => {
    expect(JSON.stringify(parseURLWithRegExp(URL_ONE))).toEqual(
      JSON.stringify(DATA_ONE)
    )
  })

  it(`parseURLWithRegExp('yaohaixiao/parseurl.js', 'https://github.com')，返回：${JSON.stringify(
    DATA_ONE
  )}`, () => {
    expect(
      JSON.stringify(
        parseURLWithRegExp('yaohaixiao/parseurl.js', 'https://github.com')
      )
    ).toEqual(JSON.stringify(DATA_ONE))
  })

  it(`parseURLWithRegExp('${URL_TWO}')，返回：${JSON.stringify(
    DATA_TWO
  )}`, () => {
    expect(JSON.stringify(parseURLWithRegExp(URL_TWO))).toEqual(
      JSON.stringify(DATA_TWO)
    )
  })

  it(`parseURLWithRegExp('${URL_THREE}')，返回：${JSON.stringify(
    DATA_THREE
  )}`, () => {
    const url = parseURLWithRegExp(URL_THREE)
    expect(JSON.stringify(url)).toEqual(JSON.stringify(DATA_THREE))
    expect(url.searchParams.get('col')).toEqual('24')
    expect(url.searchParams.get('age')).toEqual(null)
  })

  it(`parseURLWithRegExp('${URL_FOUR}')，返回：${JSON.stringify(
    DATA_FOUR
  )}`, () => {
    const url = parseURLWithRegExp(URL_FOUR)
    expect(JSON.stringify(url)).toEqual(JSON.stringify(DATA_FOUR))
    expect(url.searchParams.get('col')).toEqual('24')
    expect(url.searchParams.get('age')).toEqual(null)
  })
})
