<template>
  <div>
    <div id="nav">
      <router-link to="/home">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/translate">Translate</router-link> |
      <router-link to="/attractions">Attractions</router-link>
    </div>
    <router-view @select-city="propsFromCity" :city-props='cityProps' :props-test='this.propsTest'/>
    <!-- <Startup  /> -->
  </div>
</template>

<script>
// import Startup from "./components/Startup.vue";
export default {
  // components: [Startup],

  data() {
    return {
      cityProps: {},
      propsTest: 'test, test'
    };
  },
  methods: {
    propsFromCity(cityData) {
      console.log('this is cityData', cityData)
        const dataObj = cityData;
        let results = {};
        results = Object.assign(results, dataObj);
        console.log(results)
      this.cityProps = Object.assign(this.cityProps, results)
      console.log('this is city props', this.cityProps)
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
