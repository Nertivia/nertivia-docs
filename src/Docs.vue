<template>
  <SideBar />
  <MainContent/>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import SideBar from "./components/SideBar.vue";
import {latestVersion, versions} from "./docs/router";
import MainContent from "./components/MainContent.vue";
export default defineComponent({
  components: { SideBar, MainContent },
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
    }
  },
  mounted() {
    const { version } = this.params;
    const router = versions.find((_, index) => `v${index + 1}` === version);
    if (!router) {
      this.$router.push(`/v${latestVersion}`);
    }
  },
});
</script>
