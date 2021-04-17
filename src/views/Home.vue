<template>
  <div class="HomePage">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div class="titleBlock">
      <input
        class="form-control"
        v-model="message"
        placeholder="模糊搜尋國名"
      />
    </div>
    <country-search :son_message="message" />
  </div>
  <!-- <div class="home">
    
    <img alt="Vue logo" src="../assets/logo.png" />

    <div class="block">
      <input
        class="form-control"
        v-model="message"
        placeholder="模糊搜尋國名"
      />
      <div>
        <div class="table tbA" v-if="message != ''">
          <table>
            <thead>
              <tr v-for="(item, index) in filterSearch" :key="index">
                <td>{{ item.name }}</td>
                <td>{{ item.alpha2Code }}</td>
                <td>{{ item.alpha3Code }}</td>
                <td>{{ item.demonym }}</td>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </div>
    <div class="table tbB" v-if="message == ''">
      <table>
        <thead>
          <tr class="header" v-for="(item, index) in dataAll" :key="index.name">
            <td>
              {{ dataAll[index].name }}
            </td>
            <td>
              {{ dataAll[index].alpha2Code }}
            </td>
            <td>
              {{ dataAll[index].alpha3Code }}
            </td>
            <td>
              {{ dataAll[index].demonym }}
            </td>
          </tr>

          <tr></tr>
        </thead>
      </table>
    </div>
  </div> -->
</template>

<script>
const axios = require("axios");
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import countrySearch from "@/components/CountrySearch.vue";

export default {
  name: "HomePage",
  data() {
    return {
      dataAll: [],
      message: "",
    };
  },

  components: {
    HelloWorld,
    countrySearch,
  },

  methods: {
    getCountriesinfos() {
      axios
        .get("https://restcountries.eu/rest/v2/")
        .then((res) => {
          console.log(res.data);
          this.dataAll = res.data;
        })
        .catch((err) => {});
    },
  },
  created() {
    this.getCountriesinfos();
  },
  computed: {
    filterSearch() {
      return this.dataAll.filter((item, index, array) => {
        // item.name.indexOf('this.message')
        // console.log( item.name.indexOf('a'));
        if (
          item.name.indexOf(this.message) !== -1 ||
          item.demonym.indexOf(this.message) !== -1
        ) {
          return true;
        }
      });
    },
    // selectMatchItem(lists, keyWord) {
    //   let resArr = this.dataAll;
    //   lists.filter((item) => {
    //     for (let i in item) {
    //       if (item[i].indexOf(keyWord) >= 0) {
    //         resArr.push(item);
    //       }
    //     }
    //   });
    //   return resArr;
    // },
  },
};
</script>

<style lang="scss" scoped>
body {
  width: 100%;
}
.titleBlock {
  width: 100%;
  height: 100%;
  input {
    width: 90%;
    height: 30px;
  }
}
</style>
