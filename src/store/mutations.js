export default {
  INCREMENT(state) {
    state.counter += 1;
  },
  DECREMENT(state) {
    state.counter -= 1;
  },
  RESET(state, { value }) {
    state.counter = value;
  }
};
