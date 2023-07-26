import isConstructor from '../utils/isConstructor'

describe('isConstructor() 方法：', () => {
  describe('自定义（构造）函数：', () => {
    it(`isConstructor(Constructor.prototype = {}), 返回：true`, () => {
      const Yao = function (age) {
        this.age = age
      }

      Yao.prototype = {
        say() {
          console.log(this.age)
        }
      }
      expect(isConstructor(Yao)).toBe(true)
    })

    it(`isConstructor(class {}), 返回：true`, () => {
      const ff = class {}
      expect(isConstructor(ff)).toBe(true)
    })

    it(`isConstructor(console.log), 返回：false`, () => {
      expect(isConstructor(console.log)).toBe(false)
    })

    it(`isConstructor({}), 返回：false`, () => {
      expect(isConstructor({})).toBe(false)
    })
  })

  describe('内置构造函数：', () => {
    it(`isConstructor(Math), 返回：false`, () => {
      expect(isConstructor(Math)).toBe(false)
    })

    it(`isConstructor(Boolean), 返回：true`, () => {
      expect(isConstructor(Boolean)).toBe(true)
    })

    it(`isConstructor(Array), 返回：true`, () => {
      expect(isConstructor(Array)).toBe(true)
    })

    it(`isConstructor(Function), 返回：true`, () => {
      expect(isConstructor(Function)).toBe(true)
    })

    it(`isConstructor(Date), 返回：true`, () => {
      expect(isConstructor(Date)).toBe(true)
    })

    it(`isConstructor(RegExp), 返回：true`, () => {
      expect(isConstructor(RegExp)).toBe(true)
    })

    it(`isConstructor(Object), 返回：true`, () => {
      expect(isConstructor(Object)).toBe(true)
    })

    it(`isConstructor(Promise), 返回：true`, () => {
      expect(isConstructor(Promise)).toBe(true)
    })
  })
})
