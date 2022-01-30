<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator'
// import Login from '@/components/Login.vue'
// import Schemes from '@/components/Schemes.vue'

export default class App extends Vue {}
</script>

<style lang="sass">
#app
  font-family: 'Roboto', sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center

body
  margin: 0

html
  background-color: #FAFAFA
</style>
