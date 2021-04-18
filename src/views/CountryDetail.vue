<template >
  <div class="detailPage">
    <div class="headBlock">
<div></div>
<div></div>
<div></div>
    </div>
    <div class="MiddleBlock">
      <div>Native name: {{ dataAll[0].nativeName }}</div>
     
    </div>
  </div>
</template>
<script>
// import VueRouter from 'vue-router';
// Vue.use(VueRouter);
const axios = require("axios");
export default {
  data() {
    return {
      dataAll: [],
    };
  },
  methods: {
    getCountriesinfos() {
      axios
        .get(
          "https://restcountries.eu/rest/v2/capital/" + this.$route.params.id
        )
        .then((res) => {
          console.log("res:", res.data);
          this.dataAll = res.data;
        })
        .catch((err) => {
          console.error("err:", err);
        });
    },
  },
  created() {
    this.getCountriesinfos();
    document.title = this.$route.meta.title;
    document.description = this.$route.meta.description;
  },
};
</script>
<style lang="scss" scoped>
.detailPage{
  .headBlock{

  }
  .MiddleBlock{
    
  }
}
</style>