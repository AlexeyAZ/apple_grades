<template lang="pug">
  div
    h1.
      {{ title }}
    div
      grades-table(:apple-table="table" @addrow="")
</template>

<script>
  import GradesTable from './GradesTable'

  export default {
    name: 'grades',
    props: ['table'],
    data () {
      return {
        title: this.$route.name
      }
    },
    components: { GradesTable }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  table {
    margin-bottom: 20px;
  }
  label {
    display: block;
  }
  img {
    height: auto;
    width: 50%;

    @include media(w768) {
      width: auto;
      max-height: 200px;
      max-width: 100%;
    }
  }
  
  ul {
    display: flex;
    list-style-type: none;
    flex-flow: wrap;
    width: 100%;

    li {
      border: 1px solid black;
      display: block;
      text-align: center;
      padding: 20px;
      flex-shrink: 1;
      width: calc(100% / 3);

      @include media(w1366) {
        width: 50%;
      }

      @include media(w768) {
        width: 100%;
      }
    }
  }
</style>
