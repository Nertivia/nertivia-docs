<template>
<div class="main-title">{{title}}</div>
  <div class="body-table">
    <div class="titles">
      <div class="title">Key</div>
      <div class="title">Type</div>
      <div class="title">Optional</div>
    </div>
    <div class="rows" v-for="(item, name) in body">
      <div class="column">{{name}}</div>
      <div class="column">{{item.type}}</div>
      <div class="column">{{item.optional || false}}</div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from "@vue/runtime-core";
import { Body } from "../interfaces/Router";
export default defineComponent({
  props: {
    body: {
      type: Object as PropType<Body>,
      required: true,
    },
    title: String
  }
});
</script>

<style scoped>
.body-table {
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.4);
  padding: 10px;
  align-self: start;
  border-radius: 8px;
}
.main-title {
  font-size: 18px;
  margin-top: 10px;
  margin-bottom: 5px;
  margin-left: 5px;
}
.titles {
  display: flex;
  gap: 10px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  padding: 10px;
  margin-bottom: 5px;
}
.title {
  width: 100px;
  border-right: solid 1px rgba(255, 255, 255, 0.3);
}
.rows {
  display: flex;
  align-items: center;
  align-content: center;
  flex-direction: rows;
}
.rows:hover {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
}
.title:last-child,
.column:last-child {
  border-right: none;
}
.column {
  margin-top: 5px;
  margin-bottom: 5px;
  width: 100px;
  margin-left: 10px;
  border-right: solid 1px rgba(255, 255, 255, 0.3);
  word-break: break-all;
}
</style>
