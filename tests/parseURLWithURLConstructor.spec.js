import parseURLWithURLConstructor from '@/parseURLWithURLConstructor'

import {
  URL_ONE,
  URL_TWO,
  URL_THREE,
  DATA_ONE,
  DATA_TWO,
  DATA_THREE
} from './utils/enum'

describe('parseURLWithURLConstructor() 方法', () => {
  it(`parseURLWithURLConstructor(${URL_ONE})`, () => {
    expect(JSON.stringify(parseURLWithURLConstructor(URL_ONE))).toEqual(
      JSON.stringify(DATA_ONE)
    )
  })

  it(`parseURLWithURLConstructor('/yaohaixiao/parseurl.js', 'https://github.com')`, () => {
    expect(
      JSON.stringify(
        parseURLWithURLConstructor(
          '/yaohaixiao/parseurl.js',
          'https://github.com'
        )
      )
    ).toEqual(JSON.stringify(DATA_ONE))
  })

  it(`parseURLWithURLConstructor('${URL_TWO}')`, () => {
    expect(JSON.stringify(parseURLWithURLConstructor(URL_TWO))).toEqual(
      JSON.stringify(DATA_TWO)
    )
  })

  it(`parseURLWithURLConstructor('${URL_THREE}')`, () => {
    const url = parseURLWithURLConstructor(URL_THREE)
    expect(JSON.stringify(url)).toEqual(JSON.stringify(DATA_THREE))
    expect(url.searchParams.get('col')).toEqual('24')
    expect(url.searchParams.get('age')).toEqual(null)
  })
})
