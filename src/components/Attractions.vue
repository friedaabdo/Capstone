<template>
  <div class='attractions'>
    <h1>Attractions</h1>
    <i @click='filter=true' v-if='!filter' class="fas fa-filter"></i>
    <div v-else class="filter">
      <i class="fas fa-times" @click='filter=false'></i>
      <form @submit.prevent="loadAttr">
       
        <input class="rad-search" placeholder="Radius in km" type="number" v-model="radius" /><br />
        <div class="checkboxes">
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
          value="RESTAURANT"
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
        </div>
        <button>Filter Results</button>
      </form>
    </div>
    <section v-for="attraction in attractionsArray" :key="attraction.id" class="attr-row">
      <p class="category">{{ attraction.category }}</p>
      <h3>
        {{ attraction.name }}
      </h3>
      <div class="tag-section">
      <p v-for="tag in attraction.tags" :key="tag" class="tags">{{ tag }}</p>
    </div></section>
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
    // filter: true,
     filter: false,
    };
  },
  methods: {
    async loadAttr() {
      this.filter = false
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

      // let url = `https://test.api.amadeus.com/v1/reference-data/locations/pois?latitude=${this.cityProps.lat}&longitude=${this.cityProps.long}&radius=${!this.radius ? 1 : this.radius}&page%5Blimit%5D=10&page%5Boffset%5D=0&categories=${this.categories.join()}`;

      let url = `https://test.api.amadeus.com/v1/reference-data/locations/pois?latitude=48.8566&longitude=2.3522&radius=${!this.radius ? 1 : this.radius}&page%5Blimit%5D=10&page%5Boffset%5D=0&categories=${this.categories.join()}`;
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
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500&display=swap');
.tags {
  display: inline;
  background-color: #d0e0f1;
  border-radius: 50px;
  padding: 0 5px;
  margin: 2px;
  font-size: 12px;
  
}
.tag-section {
  display: flex;
  flex-wrap: wrap;
  border-top: 1px solid #12263A;
}
.attractions {
  margin-bottom: 150px;
  position: relative;
}
.fa-filter {
  background-color: #4ECDC4;
  padding: 10px;
  border-radius: 50px;
  position: absolute;
  right: 20px;
  top: 0px;
}
.filter {
border: 1px solid #12263A;
border-radius: 10px;
margin: 10px;
padding: 20px;
font-family: 'Raleway';
}
.fa-times {
    position: absolute;
    margin-top: -15px;
    /* margin-right: 10px; */
    right: 20px;
}
.rad-search {
  /* border-radius: 50px 0 0 50px; */
    border: none;
    outline: none;
    background-color: #d0e0f1;
border-radius: 50px;
padding: 0 10px;
width: 100px;
margin-bottom: 10px;
}
h3 {
font-family: 'Playfair Display', serif;
font-weight: 500;
padding: 20px;
}
form button {
    border: none;
  border-radius: 50px;
  font-size: 15px;
  padding: 3px 10px;
  background-color: #FFE66D;
  margin-top: 10px;
   outline: none;
   color: #12263A
}
.attr-row {
 border: 1px solid #12263A;
border-radius: 10px;
margin: 10px;
}
.attr-row .category {
  display: block;
  background-color: #FFF1AD;
  margin-top: 0;
  border-radius: 10px 10px 0 0;
  height: 30px;
  padding-top: 10px
}

</style>
