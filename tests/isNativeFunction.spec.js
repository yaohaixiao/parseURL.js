/**
 * @jest-environment jsdom
 */
import isNativeFunction from '../utils/isNativeFunction'

describe('isNativeFunction() 方法：', () => {
  const fn = function () {}
  const ff = class {}
  const f = () => {}

  it(`isNativeFunction(function () {}), 返回：false`, () => {
    expect(isNativeFunction(fn)).toBe(false)
  })

  it(`isNativeFunction(class {}), 返回：false`, () => {
    expect(isNativeFunction(ff)).toBe(false)
  })

  it(`isNativeFunction(() => {}), 返回：false`, () => {
    expect(isNativeFunction(f)).toBe(false)
  })

  it(`isNativeFunction(document.domain), 返回：false`, () => {
    expect(isNativeFunction(document.domain)).toBe(false)
  })

  it(`isNativeFunction(Boolean), 返回：true`, () => {
    expect(isNativeFunction(Boolean)).toBe(true)
  })

  it(`isNativeFunction(String), 返回：true`, () => {
    expect(isNativeFunction(String)).toBe(true)
  })

  it(`isNativeFunction(Number), 返回：true`, () => {
    expect(isNativeFunction(Number)).toBe(true)
  })

  it(`isNativeFunction(Object), 返回：true`, () => {
    expect(isNativeFunction(Object)).toBe(true)
  })

  it(`isNativeFunction(Date), 返回：true`, () => {
    expect(isNativeFunction(Date)).toBe(true)
  })

  it(`isNativeFunction(RegExp), 返回：true`, () => {
    expect(isNativeFunction(RegExp)).toBe(true)
  })

  it(`isNativeFunction(Error), 返回：true`, () => {
    expect(isNativeFunction(Error)).toBe(true)
  })

  it(`isNativeFunction(Math.floor), 返回：true`, () => {
    expect(isNativeFunction(Math.floor)).toBe(true)
  })

  it(`isNativeFunction(console.log), 返回：true`, () => {
    expect(isNativeFunction(console.log)).toBe(true)
  })
})
