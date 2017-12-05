<template lang="pug">
  div.hello
    h1.
      {{ title }}
</template>

<script>
export default {
  name: 'main',
  data () {
    return {
      title: this.$route.name
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
