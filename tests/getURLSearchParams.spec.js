import getURLSearchParams from '@/getURLSearchParams'

describe('getURLSearchParams() 方法', () => {
  it(`getURLSearchParams('?id=23&name=parseURL')`, () => {
    const queryString = '?id=23&name=parseURL'
    expect(getURLSearchParams(queryString)).toEqual({
      id: '23',
      name: 'parseURL'
    })
  })

  it(`getURLSearchParams('?age=24&name=Robert+Yao')`, () => {
    const queryString = '?age=24&name=Robert+Yao'
    expect(getURLSearchParams(queryString)).toEqual({
      age: '24',
      name: 'Robert Yao'
    })
  })

  it(`getURLSearchParams('')`, () => {
    expect(getURLSearchParams('')).toEqual({})
  })

  it(`getURLSearchParams()`, () => {
    expect(getURLSearchParams()).toEqual({})
  })
})
