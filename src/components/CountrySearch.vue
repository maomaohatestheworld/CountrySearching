<template>
  <div class="searching">
    <div class="block">
      <!-- <input
        class="form-control"
        v-model="son_message"
        placeholder="模糊搜尋國名"
      /> -->
      <div>
        <div class="table tbA">
          <table>
            <thead>
              <tr v-for="(item, index) in dataList" :key="index">
                <td @click="nameClick(dataAll[index].capital)">
                  {{ item.name }}
                </td>
                <td>{{ item.alpha2Code }}</td>
                <td>{{ item.alpha3Code }}</td>
                <td>{{ item.demonym }}</td>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const axios = require("axios");

export default {
  props: {
    son_message: {
      default: "",
      type: String,
    },
  },
  data() {
    return {
      dataAll: [],
    };
  },
  name: "searching",
  components: {
    // HelloWorld,
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
    nameClick(data) {
      console.log("nameClick:", data);
      this.$router.push("/detail/" + data);
    },
  },
  created() {
    this.getCountriesinfos();
  },
  computed: {
    dataList() {
      if (this.son_message != "") {
        return this.dataAll.filter((item, index, array) => {
          // item.name.indexOf('this.message')
          // console.log( item.name.indexOf('a'));
          if (
            item.name.toLowerCase().indexOf(this.son_message.toLowerCase()) !== -1 ||
            item.demonym.toLowerCase().indexOf(this.son_message.toLowerCase()) !== -1
          ) {
            return true;
          }
        });
      }
      else{
        return this.dataAll;
      }
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

.searching {
  width: 100%;
  color: wheat;
  .block {
    width: 100%;
    input {
      width: 90%;
      height: 30px;
    }
  }
  .table {
    margin: 0 auto;

    table {
      margin: 0 auto;
      width: 100%;
    }
    .header {
    }
    .tr {
    }
    .td {
    }
  }
}
</style>
