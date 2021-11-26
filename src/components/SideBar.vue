<template>
  <div class="side-bar">
    <SideBarItem v-for="route in routes" :key="route.path" :route="route" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import routes from "../docs/v1/router";
import { Router } from "../interfaces/Router";
import SideBarItem from "./SideBarItem.vue";
export default defineComponent({
  components: { SideBarItem },
  data() {
    return {
      routes: routes as Router[],
    };
  },
});
</script>

<style scoped>
.side-bar {
  width: 250px;
  flex-shrink: 0;
  background-color: rgba(0, 0, 0, 0.2);
  height: 100%;
  padding-top: 5px;
}
</style>