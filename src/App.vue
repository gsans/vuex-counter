<template>
  <div id="app">
    <Counter :total="total" :overflow="overflow"
      @increment="increment" 
      @decrement="decrement" 
      @reset="reset"
    />
  </div>
</template>

<script>
import Counter from "./components/Counter";

export default {
  name: "App",
  components: {
    Counter
  },
  methods: {
    increment() {
      this.$store.dispatch("increment");
    },
    decrement() {
      this.$store.dispatch("decrement");
    },
    reset() {
      this.$store.dispatch("reset", { value: 0 });
    },
  },
  computed: {
    total() {
      return this.$store.getters.total;
    },
    overflow() {
      return this.$store.getters.overflow(10);
    }
  }
};
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Ubuntu:500);
@import url(https://fonts.googleapis.com/css?family=Ubuntu+Mono);

* {
  -webkit-font-smoothing: antialiased !important;
  -moz-osx-font-smoothing: grayscale;
  text-shadow: 0px 0px 3px rgba(0, 0, 0, 0.2);
  font-family: "Ubuntu";
}
</style>