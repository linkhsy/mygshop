<template>
  <div id="app">
    <router-view></router-view>
    <foot-guider v-show='$route.meta.state'></foot-guider>
  </div>
</template>

<script>
import FootGuider from "./components/FootGuider/FootGuider";
export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    "foot-guider": FootGuider
  },
  methods: {}
};
</script>

<style lang='stylus' rel='stylesheet/stylus'>
#app
  width 100%
  height 100%
  background #f5f5f5
  position relative
</style>
