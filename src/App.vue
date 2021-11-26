<template>
  <SideBar />
</template>

<script  lang="ts">
import { defineComponent } from '@vue/runtime-core'
import SideBar from './components/SideBar.vue'
export default defineComponent({
  components: {SideBar},
})
</script>



<style>
html, body, #app {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: hidden;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
