export default {
  total: state => {
    return state.counter;
  },
  overflow: state => max => {
    return state.counter > max;
  }
};
