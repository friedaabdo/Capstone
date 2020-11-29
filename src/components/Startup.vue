<template>
  <div class='startup'>
    <h1>What city will you be visiting?</h1>
    <br>
    <h3 @click="clickCity(0)">Barcelona</h3>
    <h3 @click="clickCity(1)">Paris</h3>
    <h3 @click="clickCity(2)">Berlin</h3>
    <h3 @click="clickCity(3)">London</h3>
    <h3 @click="clickCity(4)">New York</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      test2: "something",
      passable: [
        {
          source: "en",
          target: "es",
          city: "Barcelona",
          lat: 41.3851,
          long: 2.1734,
        },
        {
          source: "en",
          target: "fr",
          city: "Paris",
          lat: 48.8566,
          long: 2.3522,
        },
        {
          source: "en",
          target: "de",
          city: "Berlin",
          lat: 52.52,
          long: 13.405,
        },
        {
          source: "en",
          target: "en",
          city: "London",
          lat: 51.5074,
          long: -0.1278,
        },
        {
          source: "en",
          target: "en",
          city: "New York",
          lat: 40.7128,
          long: -74.006,
        },
      ],
    };
  },
  methods: {
    clickCity(idx) {
      
      this.$emit("select-city", this.passable[idx]);
      this.$router.push('/home')
    },
  },
};
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap');

.startup{
  padding: 0 10%;
  margin-bottom: 150px;
}

h3 {
  background: #ffe66d;
  border-radius: 50px;
  font-family: 'Playfair Display', serif;
  width: 250px;
  margin: 20px auto;
}
</style>
<style >
h1 {
  font-family: 'Playfair Display', serif;

}
</style>