<template>
  <AppHeader />
  <router-view />
  <scrollToTop />
  <AppFooter />
</template>


<script>
import AppHeader from "@/components/global/AppHeader.vue"
import AppFooter from "@/components/global/AppFooter.vue"
import scrollToTop from "@/components/global/scrollToTop.vue"

export default {
  name: "AppVue",
  components: {
    AppHeader,
    AppFooter,
    scrollToTop
  },
  methods: {

  },
  mounted() {

  },
};

</script>

<style lang="scss">

</style>
