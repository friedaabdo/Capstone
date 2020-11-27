<template>
  <div>
    <h1>Attractions</h1>
    <!-- <button @click="test">test</button> -->
    <div class="filter">
      <form @submit.prevent="loadAttr">
        <p>Radius:</p>
        <input placeholder="km" type="number" v-model="radius" /><br />
        <input
          type="checkbox"
          name="sights"
          value="SIGHTS"
          v-model="categories"
        />
        <label for="sights">Sights</label>
        <input
          type="checkbox"
          name="nightlife"
          value="NIGHTLIFE"
          v-model="categories"
        />
        <label for="nightlife">Nightlife</label>
        <input
          type="checkbox"
          name="restaurants"
          value="RESTAURANTS"
          v-model="categories"
        />
        <label for="restaurants">Restaurants</label>
        <input
          type="checkbox"
          name="shopping"
          value="SHOPPING"
          v-model="categories"
        />
        <label for="shopping">Shopping</label>
        <button>Filter Results</button>
      </form>
    </div>
    <section v-for="attraction in attractionsArray" :key="attraction.id">
      <h3>
        {{ attraction.name }}
      </h3>
      <p>{{ attraction.category }}</p>
      <p v-for="tag in attraction.tags" :key="tag" class="tags">{{ tag }}</p>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    propsTest: String,
    cityProps: Object,
  },
  data() {
    return {
      access_token: "",
      attractionsArray: null,
      radius: null,
      categories: [],
    };
  },
  methods: {
    async loadAttr() {
      const clientId = process.env.VUE_APP_CLIENT_ID;
      const clientSecret = process.env.VUE_APP_CLIENT_SECRET;
      await fetch("https://test.api.amadeus.com/v1/security/oauth2/token", {
        body: `grant_type=client_credentials&client_id=${clientId}client_secret=${clientSecret}`,

        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        method: "POST",
      })
        .then((response) => response.json())
        .then((data) => {
          this.access_token = data.access_token;
        });

      let url = `https://test.api.amadeus.com/v1/reference-data/locations/pois?latitude=${this.cityProps.lat}&longitude=${this.cityProps.long}&radius=${!this.radius ? 1 : this.radius}&page%5Blimit%5D=10&page%5Boffset%5D=0&categories=${this.categories.join()}`;
      //   url += "?latitude=48.8566;
      //   url += "&longitude=2.3522";
      await fetch(url, {
        headers: {
          Authorization: "Bearer " + this.access_token,
        },
      })
        .then((response) => response.json())
        .then((info) => {
          console.log("this is info", info);
          const array = info.data;
          const results = [];
          for (const item in array) {
            results.push({
              id: array[item].id,
              name: array[item].name,
              category: array[item].category,
              self: array[item].self,
              tags: array[item].tags,
              geoCode: array[item].geoCode,
            });
          }
          this.attractionsArray = results;
        });
      console.log("this is attractionArray", this.attractionsArray);
      console.log("this is categories array", this.categories);
      this.categories = [];
    },
    test2() {
      console.log("this is city props test", this.cityProps.lat);
    },
  },
  mounted() {
    this.loadAttr();
  },
};
</script>

<style scoped>
.tags {
  display: inline;
  background-color: lightgrey;
  border-radius: 50px;
  padding: 0 5px;
  margin: 2px;
  font-size: 12px;
}
section {
}
</style>
