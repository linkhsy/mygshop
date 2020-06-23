<template>
  <div>
    <mt-swipe :auto="2000" style="height:200px" @change="handleChange">
      <mt-swipe-item v-for='({url,title},index) in swiperUrl' :key='index'>
          <img :src="url" :alt="title" class="swiperImg">
      </mt-swipe-item>
      
    </mt-swipe>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      swiperUrl: []
    };
  },
  methods: {
      handleChange(index){
          
      }
  },
  created() {
    this.$axios.get("swiper").then(res => {
      this.swiperUrl = res.data;
    });
  },
  mounted() {}
};
</script>

<style lang="" scope>
    .swiperImg{
        width: 100%;
        height: 200px;
    }
</style>