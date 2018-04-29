<template>
  <div id="app">
    <m-header></m-header>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">/* eslint-disable */
  import  MHeader from 'components/m-header/m-header'
  export default {
    components: {
      MHeader
    }
  }
</script>

<style>

</style>
