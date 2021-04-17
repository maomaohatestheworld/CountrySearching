<template lang="">
<div class="detailPage">
    <div>
       {{dataAll}}

       123
    </div>
</div>
</template>
<script>
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
        .get("https://restcountries.eu/rest/v2/capital/" + this.$route.params.id)
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
    console.log(this.$route.params);
  },
};
</script>
<style lang="">


</style>