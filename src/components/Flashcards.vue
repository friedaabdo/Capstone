<template>
  <div>
    <h1>Flashcards</h1>
    <button @click="study(flashcardsArr)" v-if="!studyMode">
      Study!
    </button>
    <section v-if="!studyMode">
      <div class="list" v-for="flashcard in flashcardsArr" :key="flashcard.id">
        <p>
          {{ flashcard.original }} <span><i class="fas fa-globe"></i></span>
          {{ flashcard.translated }}
        </p>
      </div>
    </section>
    <section v-else class="card">
      <div>
        <i @click="closeStudy" class="fas fa-times"></i>
        <div v-if='i<randomized.length'>
          <p @click="transCheck = false" v-if="transCheck">
            {{ randomized[i].original }}
          </p>
          <p @click="transCheck = true" v-else>
            {{ randomized[i].translated }}
          </p>
        <button @click="next">Next</button>
        </div>
        <button v-else @click='study(flashcardsArr)'>Study again?</button>
      </div>
    </section>
  </div>
</template>

<script>
const url = "http://localhost:3000";
export default {
  data() {
    return {
      flashcardsArr: [],
      randomized: [],
      studyMode: false,
      i: 0,
      transCheck: true,
    };
  },
  methods: {
    flashcardsCall() {
      fetch(url + "/flashcards", {
        method: "GET",
        //   mode: 'no-cors',
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("show me the data", data);
          this.flashcardsArr = data;
          console.log("array", this.flashcardsArr);
        });
    },
    study(arr) {
      this.studyMode = true;
      console.log("study mode", this.studyMode);

      const length = arr.length;
      const randNums = [];
      for (let i = 0; i < length; i++) {
        let num = Math.floor(Math.random() * length);
        while (randNums.includes(num)) {
          num = Math.floor(Math.random() * length);
        }
        randNums.push(num);
      }
      for (let i = 0; i < length; i++) {
        this.randomized.push(arr[randNums[i]]);
      }
      console.log("randomized", this.randomized[this.i].original);
    },
    closeStudy() {
      this.studyMode = !this.studyMode;
      this.i = 0;
      this.randomized = [];
      this.transCheck = true;
    },
    next() {
      this.i = this.i + 1;
      this.transCheck = true;
      console.log("this is i", this.i);
    },
  },
  mounted() {
    this.flashcardsCall();
  },
};
</script>
