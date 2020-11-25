<template>
  <div>
    <p>Translate your text here</p>
    <input type="text" placeholder="what you wanna translate" v-model="input" />
    <p>{{output}}</p>
    <button @click="translate">Translate</button>
  </div>
</template>

<script>
export default {
    data() {
        return {
            input: '',
            output: 'Your output here'
        }
    },
    methods: {
        async translate() {
            const api = process.env.VUE_APP_API
            let url = 'https://translation.googleapis.com/language/translate/v2?key=' + api
            url += '&q=' + this.input
            url += '&source=en'
            url += '&target=fr'
           
            fetch(url, {
                method: 'GET',
                headers: {
                    // 'Authorization': bearer gcloud auth application-default print-access-token,
                    'Content-Type': 'application/json'
                }

            })
            .then(res =>  res.json())
            .then(response => {
                this.output = response.data.translations[0].translatedText
                console.log('translation: ' , this.output)})
            .catch(error => {console.log('There was an error with the translation request: ', error)})
            
            this.input = ''
    }
}
}
</script>
