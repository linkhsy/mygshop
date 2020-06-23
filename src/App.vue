<template>
  <div id="app">
    <mt-header title="firstpage">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <router-view></router-view>
    <mt-tabbar v-model="selected">
      <mt-tab-item id="home">
        <img slot="icon" src="" />
        外卖
      </mt-tab-item>
      <mt-tab-item id="vip">
        <img slot="icon" src="" />
        订单
      </mt-tab-item>
      <mt-tab-item id="search">
        <img slot="icon" src="" />
        发现
      </mt-tab-item>
      <mt-tab-item id="personal">
        <img slot="icon" src="" />
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: "App",
  data(){
      return {
          selected: '',
      }
  },
  watch:{
      selected(newVal, oldVal){
          console.log(this.selected);
          this.$router.push({name:this.selected})
      }
  }
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
</style>
