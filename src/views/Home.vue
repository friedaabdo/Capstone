<template>
  <div class="home">
    <h1>Welcome to Panion</h1>
    <h3>The only companion app you'll need while travelling</h3>
    <h3>It's going to be a wonderful day in {{cityProps.city}}!</h3>
  </div>

</template>

<script>


export default {
  props:{cityProps:Object}
}
</script>
