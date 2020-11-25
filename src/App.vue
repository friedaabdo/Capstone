<template>
  <div>
    <h1>Welcome to Panion</h1>
    <h3>The only companion app you'll need while travelling</h3>
    <router-view></router-view>
    <!-- <translate-section />
    <Attractions /> -->
  </div>
</template>

<script>
// import Attractions from './components/Attractions.vue';

export default {
  // components: { Attractions },
  name: "App",
  
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
