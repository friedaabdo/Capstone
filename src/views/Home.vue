<template>
  <div class="home">
    <h1>
      Make it <br />
      wonderful in <br /><span class="cityName">{{ cityProps.city }}</span> !
    </h1>
    <div class="weather">
      <p>
        It is now
        <span id="temp">{{ Math.round(main.temp) }}&deg;</span> in
        {{ cityProps.city }}
      </p>
      <img src="" ref="icon" alt="weather icon" />
      <p>{{ main.description }}</p>
      <p>
        H: {{ Math.round(main.temp_max) }}&deg; L:
        {{ Math.round(main.temp_min) }}&deg;
      </p>
      <p>Feels like {{ Math.round(main.feels_like) }}&deg;</p>
      <p>Humidity is {{ Math.round(main.humidity) }}%</p>
      <!-- <p>{{main}}</p> -->
    </div>
  </div>
</template>

<script>
export default {
  props: { cityProps: Object },
  refs: [],
  data() {
    return {
      main: {},
    };
  },
  methods: {
    async weatherApi() {
      const api = process.env.VUE_APP_WEATHER;
      await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${this.cityProps.lat}&lon=${this.cityProps.long}&units=imperial&appid=${api}`
      )
        .then((res) => res.json())
        .then((data) => {
          let mainData = data.main;
          let weather = data.weather[0];
          let results = {};
          results = Object.assign(results, mainData);
          results = Object.assign(results, weather);
          this.main = Object.assign(this.main, results);
        });
    },
    weatherIcon() {
      this.$refs.icon.src = `http://openweathermap.org/img/wn/${this.main.icon}@2x.png`;
    },
  },
  async created() {
    await this.weatherApi();
    this.weatherIcon();
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Homemade+Apple&display=swap");

.cityName {
  font-family: "Homemade Apple", cursive;
}
.weather {
 margin-bottom: 150px;
}
#temp {
  font-size: 30px;
}
.home {
  padding: 0 20%;
}
</style>
