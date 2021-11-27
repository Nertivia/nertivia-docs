<template>
  <div class="main-content" v-if="route">
    <div class="title">{{ route.route.name }}</div>
    <div class="description">{{ route.route.description }}</div>
    <div class="url-area">
      <div class="method">{{route.route.method}}</div>
      <div class="url">{{url}}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { getRoute } from "../docs/router";
import { InnerRouter, Router } from "../interfaces/Router";
export default defineComponent({
  data() {
    return {
      route: null as {
        parentRouter: Router;
        route: InnerRouter;
        version: number;
      } | null,
    };
  },
  async mounted() {
    this.updateRoute();
  },
  methods: {
    async updateRoute() {
      const { version, category, route } = this.params;
      this.route = await getRoute(version, category, route);
    },
  },
  computed: {
    url(): string {
      const version = this.params.version;
      const parentPath = this.route?.parentRouter.path;
      const path = this.route?.route.path;
      return `https://nertivia.net/api/v${version}${parentPath}${path}`;
    },
    params() {
      const version = parseInt(
        (this.$route.params.version as string)?.substring(1) || "1"
      );
      const category = "/" + this.$route.params.category;
      const route = "/" + this.$route.path.split("/").splice(3).join("/");
      return { version, category, route };
    },
  },
  watch: {
    params() {
      this.updateRoute();
    },
  },
});
</script>

<style scoped>
.main-content {
  margin-top: 10px;
  margin-left: 10px;
}

.url-area {
  display: flex;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  padding: 10px;
  border-radius:8px;
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
.title {
  font-size: 24px;
}
.description {
  color: rgba(255, 255, 255, 0.6);
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
