<template>
  <div>
    <p>Translate your text here</p>
    <form @submit.prevent="translate">
      <input
        type="text"
        placeholder="what you wanna translate"
        v-model="input"
      />
      <button>Translate</button>
    </form>

    <div v-for="(item, ind) in history" :key="item.input">
      <p v-if="this.history.length > 0">
        {{ item.input }} <span><i class="fas fa-globe"></i></span>
        {{ item.output }}
      </p>
      <button @click="addTranslation(ind)">Save</button>
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
        console.log('the array history', this.history)
    },
    addTranslation(index) {
      fetch(url + '/flashcards', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          original: this.history[index].input,
          translated: this.history[index].output
        })
      })
      console.log('i click save',this.history[index].input,this.history[index].output)
    },
  },
};
</script>

<style scoped></style>
