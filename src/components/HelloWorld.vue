<template>
  <div class="hello">{{msg}}-{{msg1}}-{{msg2}}</div>
</template>

<script>
import axios from "axios";
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      msg1: '',
      msg2: '',
    };
  },
  mounted() {
    this.getapi()
    this.getapi1()
    this.getapi2()
  },
  methods: {
    getapi() {
      axios
        .get("/api/test", {
          params: {}
        })
        .then(res => {
          this.msg = res.data
        });
    },
     getapi1() {
      axios
        .get("/api/age", {
          params: {}
        })
        .then(res => {
          this.msg1 = res.data
        });
    },
     getapi2() {
      axios
        .get("/api/hashmap", {
          params: {}
        })
        .then(res => {
          this.msg2 = res.data
          // this.msg1 = res.data
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
