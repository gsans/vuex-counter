import getters from '@/store/getters.js'

test('total returns the counter value', () => {
  const state = {
    counter: 42
  }
  expect(getters.total(state)).toBe(42)
})

test('overflow', () => {
  const state = {
    counter: 11
  }
  expect(getters.overflow(state)(10)).toBe(true)
})