<template lang="pug">
  div
    h1
    div.container
      router-view(:table="table")
</template>

<script>
  
  export default {
    name: 'sec',
    props: ['table'],
    data () {
      return {
        route: this.$router
      }
    },
    methods: {
    },
    mounted: function () {
      this.$nextTick(function () {
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

  .container {
    margin: 0 auto;
    padding: 0 20px;
    max-width: 1200px;
  }
</style>
