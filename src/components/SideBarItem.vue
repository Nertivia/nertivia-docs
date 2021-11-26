<template>
  <div class="side-bar-item" :class="{collapsed}">
    <div class="title" @click="toggleCollapse">
      <span class="name">{{ route.name }}</span> 
      <span class="path">{{ route.path }}</span> 
    </div>
    <div class="list" v-if="collapsed">
      <SideBarNestedItem v-for="route in routes" :route="route" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "@vue/runtime-core";
import { InnerRouter, Router } from "../interfaces/Router";
import SideBarNestedItem from "./SideBarNestedItem.vue";
export default defineComponent({
  components: { SideBarNestedItem },
  props: {
    route: {
      type: Object as PropType<Router>,
      required: true,
    },
  },
  data() {
    return {
      collapsed: false,
      routes: [] as InnerRouter[],
    };
  },
  methods: {
    async toggleCollapse() {
      this.collapsed = !this.collapsed;
      if (this.routes.length) return;
      this.routes = await this.route.routes();
    },
  },
});
</script>


<style scoped>
.side-bar-item {
  display: flex;
  flex-direction: column;
}
.title {
  display: flex;
  align-items: center;
  padding-left: 5px;
  border-radius: 4px;
  height: 25px;
  margin-left: 5px;
  margin-right: 5px;
  cursor: pointer;
  position: relative;
  padding-left: 10px;
  user-select: none;
}
.path {
  font-size: 12px;
  opacity: 0.6;
  margin-left: 5px;
}
.side-bar-item.collapsed > .title {
  background-color: rgba(255, 255, 255, 0.1);
}
.side-bar-item:hover .title {
  background-color: rgba(255, 255, 255, 0.1);
}
.side-bar-item.collapsed  .title:before,
.side-bar-item .title:hover:before {
  position: absolute;
  content: "";
  height:15px;
  width: 3px;
  background-color: var(--primary-color);
  border-radius: 8px;
  left: 0;
}
</style>