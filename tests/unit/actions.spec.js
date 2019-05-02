import actions from '@/store/actions.js'

test('increments by 1', () => {
  let count = 0
  let increment = (state) => {
    count += 1
  }
  actions.increment({ commit: increment })
  expect(count).toBe(1)
})

test('decrements by 1', () => {
  let count = 10
  let decrement = (state) => {
    count -= 1
  }
  actions.increment({ commit: decrement })
  expect(count).toBe(9)
})

test('resets to 0', () => {
  let count = 10
  let reset = (state, { value }) => {
    count = value
  }
  actions.reset({ commit: reset }, { value: 0 })
  expect(count).toBe(0)
})