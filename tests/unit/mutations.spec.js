import mutations from '@/store/mutations.js'

test('increments by 1', () => {
  const state = {
    counter: 0
  }
  mutations.INCREMENT(state)
  expect(state.counter).toBe(1)
})

test('decrements by 1', () => {
  const state = {
    counter: 10
  }
  mutations.DECREMENT(state)
  expect(state.counter).toBe(9)
})

test('resets to 0', () => {
  const state = {
    counter: 10
  }
  mutations.RESET(state, { value: 0 })
  expect(state.counter).toBe(0)
})