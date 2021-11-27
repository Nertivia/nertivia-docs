<template>
  <div class="nested-side-bar-item" :class="{selected}" @click="onClick">
    <div class="name">{{ route.name }}</div>
    <div class="method">{{ route.method }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "@vue/runtime-core";
import { InnerRouter, Router } from "../interfaces/Router";
export default defineComponent({
  props: {
    parentRoute: {
      type: Object as PropType<Router>,
      required: true,
    },
    route: {
      type: Object as PropType<InnerRouter>,
      required: true,
    },
  },
  computed: {
    selected() {
      const category = "/" + this.$route.params.category;
      if (category !== this.parentRoute.path) return false;
      const route = "/" + this.$route.path.split("/").splice(3).join("/");
      return route === this.route.path;
    }
  },
  methods: {
    onClick() {
      const version = this.$route.params.version;
      const category = this.parentRoute.path;
      const route = this.route.path;
      this.$router.push(`/${version}${category}${route}`)
    }
  }
});
</script>

<style scoped>
.nested-side-bar-item {
  display: flex;
  align-items: center;
  padding-left: 5px;
  border-radius: 4px;
  height: 25px;
  margin-left: 15px;
  margin-right: 5px;
  margin-top: 3px; 
  cursor: pointer;
  user-select: none;
}
.nested-side-bar-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.nested-side-bar-item.selected {
  background-color: rgba(255, 255, 255, 0.1);
}
.method {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgb(255, 71, 71);
  border-radius: 4px;
  padding:3px;
  font-size: 8px;
  margin-left: auto;
  margin-right: 5px;
  flex-shrink: 0;
}

</style>
