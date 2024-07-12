<template>
  <div class="home">
    <landingPage />
    <marquee />
    <topCategories/>
    <newArrivals />
    <!-- <topSeller/> -->
    <lookBook/>
    <customerReviews/>
    <whyUs/>
  </div>
</template>

<script>
// @ is an alias to /src
import landingPage from "@/components/home/landingPage.vue";
import marquee from "@/components/home/marquee.vue";
import topCategories from "@/components/home/topCategories/topCategories.vue";
import newArrivals from "@/components/home/newArrivals.vue";
// import topSeller from "@/components/home/topSeller.vue";
import customerReviews from "@/components/home/customerReviews.vue";
import whyUs from "@/components/home/whyUs.vue";
import lookBook from "@/components/home/lookBook.vue";

export default {
  name: "HomeView",
  components: {
    landingPage,
    marquee,
    newArrivals,
    topCategories,
    // topSeller,
    customerReviews,
    whyUs,
    lookBook,
  },
};
</script>

<style lang="scss">

.home{
  overflow: hidden;
}

@media (max-width: 490px) {
  .newArrivals{
    margin-bottom: 30px;
  }
}

</style>