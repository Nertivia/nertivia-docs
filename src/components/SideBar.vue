<template>
  <div class="side-bar">
    <div class="header">Nertivia Docs</div>
    <div class="selectors">
      <div class="selector" :class="{selected: selectedVersion === `v${i + 1}`}" v-for="(version, i) in versions">v{{i + 1}}</div>
    </div>
    <SideBarItem v-for="route in routes" :key="route.path" :route="route" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import routes from "../docs/v1/router";
import { Router } from "../interfaces/Router";
import SideBarItem from "./SideBarItem.vue";
import {versions} from '../docs/router';
export default defineComponent({
  components: { SideBarItem },
  data() {
    return {
      routes: routes as {[key: string]: Router},
      versions: versions
    };
  },
  computed: {
    selectedVersion() {
      return this.$route.params.version
    }
  }
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
.selectors {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 5px;
}
.selector {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding-bottom: 3px;
  cursor: pointer;
}
.selector:before {
  content: '';
  position: absolute;
  bottom: 0;
  height: 3px;
  border-radius: 8px;
  width: 15px;
}
.selector.selected:before {
  background: var(--primary-color);
}
.selector:hover:before {
  background: var(--primary-color);
}
.header {
  text-align: center;
  font-size: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
