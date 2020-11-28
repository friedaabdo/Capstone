<template>
  <div class="home">
    <h1>Welcome to Panion</h1>
    <h3>The only companion app you'll need while travelling</h3>
    <h3>It's going to be a wonderful day in {{cityProps.city}}!</h3>
  </div>

</template>

<script>


export default {
  props:{cityProps:Object},
  data() {
    return {
    }
  },
  methods: {
    async weather() {
      const api = process.env.VUE_APP_WEATHER
      await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${this.cityProps.lat}&lon=${this.cityProps.long}&exclude=minutely,hourly,alerts&units=imperial&appid=${api}`)
      .then(res => res.json())
      .then(data => console.log(data))
    }
  },
  mounted() {
    this.weather()
  }
}
</script>
