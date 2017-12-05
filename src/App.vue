<template lang="pug">
  div#app
    top
    sec(:table="appTable")
</template>

<script>
  import Top from './components/Top'
  import Sec from './components/Sec'
  import bus from './bus'

  export default {
    name: 'app',
    data () {
      return {
        name: 'Hello',
        appTable: [
          // {
          //   name: 'name1',
          //   date: 'winter',
          //   description: 'descr1'
          // }
        ]
      }
    },
    mounted () {
      this.setTitle()

      bus.$on('removerow', index => {
        this.appTable.splice(index, 1)
      })

      bus.$on('addrow', row => {
        this.appTable.push(row)
      })

      bus.$on('changerow', obj => {
        this.appTable[obj.index] = obj.changedRow
      })
    },
    methods: {
      setTitle () {
        const title = this.$route.name
        const titleEl = document.querySelector('title')

        titleEl.textContent = title
      }
    },
    watch: {
      '$route' (to, from) {
        this.setTitle()
      }
    },
    components: { Top, Sec }
  }
</script>


<style lang="scss">

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
  }
  ul {
    padding-left: 0;
  }
</style>
