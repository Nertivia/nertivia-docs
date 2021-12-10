<template>
  <div class="main-content" v-if="route?.route">
    <div class="title">{{ route.route.name }}</div>
    <div class="description">{{ route.route.description }}</div>
    <MainContentUrlArea :route="route" />
    <MainContentBodyTable
      v-if="route.route.requestBody"
      title="Request Body"
      :body="route.route.requestBody"
    />
    <MainContentBodyTable
      v-if="route.route.responseBody"
      title="Response Body"
      :body="route.route.responseBody"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { getRoute, Route } from "../docs/router";
import { InnerRouter, Router } from "../interfaces/Router";
import MainContentUrlArea from "./MainContentUrlArea.vue";
import MainContentBodyTable from "./MainContentBodyTable.vue";
export default defineComponent({
  components: { MainContentUrlArea, MainContentBodyTable },
  data() {
    return {
      route: null as Route | null,
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
    params(): any {
      const pathMatch = this.$route.params.pathMatch;
      if (!pathMatch)  {
        const version = this.$route.params.version;
        const category = this.$route.params.category;
        const route = this.$route.params.route;
        const versionInt = parseInt( (version  as string).substring(1) || "1" );

        return {version: versionInt, category, route};
      }
      const [version, category, ...routes] = pathMatch
      const versionInt = parseInt( version.substring(1) || "1" );
      return {version: versionInt, category, route: routes.join("/")}
    }
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

.title {
  font-size: 24px;
}
.description {
  color: rgba(255, 255, 255, 0.6);
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
