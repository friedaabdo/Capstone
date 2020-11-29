<template>
  <div class='translate'>
    <h1>Translate your text here</h1>
    <form @submit.prevent="translate">
      <div class='transBar'>
      <input
        type="text"
        placeholder="what you wanna translate"
        v-model="input"
      />
      <button>Translate</button></div>
    </form>
    <div class="history">
      <div v-for="(item, ind) in history" :key="item.input" class="word">
        <p v-if="this.history.length > 0">
          {{ item.input }} <span><i class="fas fa-globe"></i></span>
          {{ item.output }}
        </p>
        <button @click="addTranslation(ind)">Save</button>
      </div>
    </div>
  </div>
</template>

<script>
const url = "http://localhost:3000";
export default {
  props: { cityProps: Object },
  data() {
    return {
      input: "",
      output: "",

      history: [],
    };
  },
  methods: {
    async translate() {
      const api = process.env.VUE_APP_API;
      let url = `https://translation.googleapis.com/language/translate/v2?key=${api}&q= ${this.input}&source=${this.cityProps.source}&target=${this.cityProps.target}`;

      fetch(url, {
        method: "GET",
        headers: {
          // 'Authorization': bearer gcloud auth application-default print-access-token,
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((response) => {
          // const that = this
          console.log("this is trans resp", response);
          this.output = response.data.translations[0].translatedText;
          this.history.unshift({
            input: this.input,
            output: this.output,
          });
          this.input = "";
        })
        .catch((error) => {
          console.log(
            "There was an error with the translation request: ",
            error
          );
        });
      console.log("the array history", this.history);
    },
    addTranslation(index) {
      fetch(url + "/flashcards", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          original: this.history[index].input,
          translated: this.history[index].output,
        }),
      });
      console.log(
        "i click save",
        this.history[index].input,
        this.history[index].output
      );
    },
  },
};
</script>

<style scoped>
.translate {
  margin-top: 75px
}
input {
  border-radius: 50px 0 0 50px;
  padding: 3px 10px; 
  font-size: 20px;
  border: none;
  background-color: #F7A1A1;
outline: none;
}
::placeholder {
  color: #f7fff7;
}
form {
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.transBar {

}
button {
  font-size: 20px;
  border-radius: 0 50px 50px 0;
    padding: 3px 10px; 
    background-color: #f05d5e;
    border: none;
      color: #f7fff7;
}

</style>
