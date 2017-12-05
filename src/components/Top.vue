<template lang="pug">
  header
    navi
</template>

<script>
  import Navi from './Navi'
  
  export default {
    name: 'top',
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
    },
    components: { Navi }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
