<template>
  <div>
    <p>attractions</p>
    <button @click="test">test</button>

    <p v-for="attraction in attractionsArray" :key="attraction.id">
      {{ attraction.name }}
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      access_token: "",
      attractionsArray: null,
    };
  },
  methods: {
    beforeCreate() {
      console.log;
    },
    async test() {
        const clientId = process.env.VUE_APP_CLIENT_ID
        const clientSecret = process.env.VUE_APP_CLIENT_SECRET
        console.log('client id', clientId, 'client secret', clientSecret)
      await fetch("https://test.api.amadeus.com/v1/security/oauth2/token", {
        body:
          `grant_type=client_credentials&client_id=${clientId}client_secret=${clientSecret}`,
 
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        method: "POST",
      })
        .then((response) => response.json())
        .then((data) => {
          this.access_token = data.access_token;
          console.log("this is the token info", data);
        });

        let url = "https://test.api.amadeus.com/v1/reference-data/locations/pois"
        url += '?latitude=41.397158'
        url += '&longitude=2.160873'
        url += '&radius=2'
        url += '&page%5Blimit%5D=20'
        url += '&page%5Boffset%5D=0'
        url += '&categories=SIGHTS,NIGHTLIFE,RESTAURANT',
        await fetch(url,
        {
          headers: {
            Authorization: "Bearer " + this.access_token,
          },
        }
      )
        .then((response) => response.json())
        .then((info) => {
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
    },
  },
};
</script>
