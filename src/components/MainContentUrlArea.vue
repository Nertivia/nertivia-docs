<template>
  <div class="url-area">
    <div class="method">{{ route.route.method }}</div>
    <div class="url">{{ url }}</div>
  </div>
</template>


<script lang="ts">
import { defineComponent, PropType } from "@vue/runtime-core";
import { Route } from "../docs/router";
export default defineComponent({
  props: {
    route: {
      type: Object as PropType<Route>,
      required: true,
    }
  },
  computed: {
    params() {
      const pathMatch = this.$route.params.pathMatch;
      if (!pathMatch)  {
        const version = this.$route.params.version;
        const category = this.$route.params.category;
        const route = this.$route.params.route;
        return {version, category, route};
      }
      const [version, category, ...routes] = pathMatch
      return {version, category, route: routes.join("/")}
    },
    url(): string {
      return `https://nertivia.net/api/${this.params.version}/${this.params.category}/${this.params.route}`;
    },
  }
})
</script>

<style>
.url-area {
  display: flex;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  padding: 10px;
  border-radius: 8px;
}
.url-area .url {
  color: rgba(255, 255, 255, 0.8);
}
.url-area .method {
  padding: 3px;
  margin-right: 10px;
  font-size: 14px;
  background-color: rgb(255, 73, 73);
  border-radius: 4px;
}
</style>
