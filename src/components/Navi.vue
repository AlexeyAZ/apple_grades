<template lang="pug">
  nav
    ul
      li(v-for="route in this.$router.options.routes")
        router-link(:to="route.path").
          {{ route.name }}
</template>

<script>
  export default {
    name: 'navi'
  }
</script>

<style lang="scss" scoped>

</style>