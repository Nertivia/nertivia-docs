<template>
  <div class="nested-side-bar-item">
    <div class="name">{{ route.name }}</div>
    <div class="method">{{ route.method }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "@vue/runtime-core";
import { InnerRouter, Router } from "../interfaces/Router";
export default defineComponent({
  props: {
    route: {
      type: Object as PropType<InnerRouter>,
      required: true,
    },
  },
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
