<template>
  <div id="app">
    <Counter :total="total" 
      @increment="increment" 
      @decrement="decrement" 
      @reset="reset"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Counter from "./components/Counter";

export default {
  name: "App",
  components: {
    Counter
  },
  methods: {
    ...mapActions(['increment', 'decrement', 'reset'])
  },
  computed: {
    ...mapGetters({ total: 'total' })
  }
};
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Ubuntu:500);
@import url(https://fonts.googleapis.com/css?family=Ubuntu+Mono);

* {
  -webkit-font-smoothing: antialiased !important; 
  -moz-osx-font-smoothing: grayscale;
  text-shadow: 0px 0px 3px rgba(0,0,0,0.2);
  font-family: "Ubuntu";
}
</style>
