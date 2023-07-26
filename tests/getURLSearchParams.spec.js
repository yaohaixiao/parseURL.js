import getURLSearchParams from '../esm/getURLSearchParams'

describe('getURLSearchParams() 方法', () => {
  it(`getURLSearchParams('?id=23&name=parseURL')，返回：{id: '23', name: 'parseURL'}`, () => {
    const queryString = '?id=23&name=parseURL'
    expect(getURLSearchParams(queryString)).toEqual({
      id: '23',
      name: 'parseURL'
    })
  })

  it(`getURLSearchParams('?age=24&name=Robert+Yao')，返回：{age: '24', name: 'Robert Yao'}`, () => {
    const queryString = '?age=24&name=Robert+Yao'
    expect(getURLSearchParams(queryString)).toEqual({
      age: '24',
      name: 'Robert Yao'
    })
  })

  it(`getURLSearchParams('')，返回：{}`, () => {
    expect(getURLSearchParams('')).toEqual({})
  })

  it(`getURLSearchParams()，返回：{}`, () => {
    expect(getURLSearchParams()).toEqual({})
  })
})
