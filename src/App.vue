<template>
  <div>
    <div id="nav">
      <p id="panion">Panion</p>
      <router-link to="/home">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/translate">Translate</router-link> |
      <router-link to="/attractions">Attractions</router-link> |
      <router-link to="/flashcards">Flashcards</router-link>
    </div>
    <div class="router-view">
      <router-view
        @select-city="propsFromCity"
        :city-props="cityProps"
        :flashcardsCall="flashcardsCall"
        :url="url"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cityProps: {},
      url: "https://panion2020.herokuapp.com",
    };
  },
  methods: {
    propsFromCity(cityData) {
      const dataObj = cityData;
      let results = {};
      results = Object.assign(results, dataObj);
      this.cityProps = Object.assign(this.cityProps, results);
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Homemade+Apple&display=swap");
body {
  background: #f7fff7;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #12263a;
}

#nav {
  padding: 30px 10px;
  background: #7e78d2;
  max-width: 100vw;
}

#panion {
  color: #ffe66d;
  font-size: 50px;
  font-family: "Homemade Apple", cursive;
  margin: 0;
  /* line-height: 50px; */
}

#nav a {
  font-family: "Raleway", sans-serif;
  font-weight: bold;
  color: #12263a;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #d0e0f1;
}
p,
button,
input {
  font-family: "Raleway", sans-serif;
}
.router-view {
  max-width: 800px;
  margin: 0 auto;
}
</style>
