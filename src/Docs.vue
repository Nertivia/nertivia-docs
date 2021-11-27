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
  mounted() {
    const { version } = this.$route.params;
    const router = versions.find((_, index) => `v${index + 1}` === version);
    if (!router) {
      this.$router.push(`/v${latestVersion}`);
    }
  },
});
</script>
