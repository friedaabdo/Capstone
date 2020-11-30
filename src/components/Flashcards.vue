<template>
  <div>
    <h1>Flashcards</h1>
    <button id="study-button" @click="study(flashcardsArr)" v-if="!studyMode">
      Study!
    </button>
    <section v-if="!studyMode">
      <div class="list">
        <div
          class="card"
          v-for="flashcard in flashcardsArr"
          :key="flashcard.id"
        >
          <p>
            {{ flashcard.original }} <br />
            <span><i class="fas fa-globe"></i></span> <br />
            {{ flashcard.translated }}
          </p>
          <i @click="deleteTranslation(flashcard)" class="far fa-trash-alt"></i>
        </div>
      </div>
    </section>
    <section v-else class="flashcard">
                 
        <i @click="closeStudy" class="fas fa-times"></i>
        <div v-if="i < randomized.length">
          <p @click="transCheck = false" v-if="transCheck">
            {{ randomized[i].original }}
          </p>
          <p @click="transCheck = true" v-else>
            {{ randomized[i].translated }}
          </p>

          <button class='next-button' @click="next">Next</button>
        </div>
        <button v-else @click="study(flashcardsArr)" class='again-button'>Study again?</button>
    
    </section>
  </div>
</template>

<script>
export default {
  props: { url: String },
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
      fetch(this.url + "/flashcards", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          this.flashcardsArr = data;
        });
    },
    deleteTranslation(card) {
      fetch(this.url + "/flashcards/" + card.id, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then(() => this.flashcardsCall())
        .then((card) => console.log(card));
    },
    study(arr) {
      this.studyMode = true;
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
    },
  },
  mounted() {
    this.flashcardsCall();
  },
};
</script>

<style scoped>
.list {
  margin-bottom: 150px;
}
.card {
  display: flex;
  border: 1px solid #12263a;
  margin: 10px;
  border-radius: 10px;
  align-items: baseline;
  align-content: center;
}
.fa-trash-alt {
  margin: auto 10px;
  align-self: end;
  
}
.fa-times {
    position: absolute;
    margin-top: 10px;
    margin-right: 10px;
    right: 10px;
}
p {
  font-size: 20px;
  padding-left: 10px;
  flex-grow: 8;
}
#study-button {
  border: none;
  border-radius: 50px;
  font-size: 23px;
  padding: 5px 15px;
  background-color: #4ecdc4;
  margin-bottom: 20px;
  outline: none;
}
.flashcard{
border: 1px solid #12263a;
  margin: 10px;
  border-radius: 10px;
  min-width: 300px;
  min-height: 100px;
  display:flex;
  flex-direction: column;
}
.next-button {
  border: none;
  border-radius: 50px;
  font-size: 17px;
  padding: 3px 10px;
  background-color: #F05D5E;
  margin-bottom: 10px;
   outline: none;
   color: #F7FFF7
}
.again-button {
      border: none;
  border-radius: 50px;
  font-size: 17px;
  padding: 3px 10px;
  background-color: #F05D5E;
  margin:auto;
   outline: none;
   color: #F7FFF7
}
</style>
