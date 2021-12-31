<template>
  <div class="">
    <div class="p-6">
      <navbar></navbar>
      <hero class="my-4"></hero>
    </div>
    <div class="bg-white z-10 relative mt-18">
      <img
        src="/layer-bg-1.png"
        draggable="false"
        class="absolute l-none t-none h-90"
      />
      <img
        src="/layer-bg-2.png"
        draggable="false"
        class="absolute r-none t-20 z-back h-90"
      />
      <stats-section></stats-section>
      <why-use-morile class="mt-24 txt-center px-4 "></why-use-morile>
      <img
        src="/layer-bg-3.png"
        draggable="false"
        class="absolute l-far h-70 b-none"
      />
    </div>
    <featured-section class="mt-24 txt-center"></featured-section>
  </div>
</template>

<script setup lang="ts">
import FeaturedSection from '../components/featured-section.vue'
import WhyUseMorile from "../components/why-use-morile.vue";
import StatsSection from "../components/stats-section.vue";
import Hero from "../components/hero.vue";
import Navbar from "../components/navbar.vue";
</script>

<style scoped>
/* .t-0-0{
    top:400px;
} */
.h-90 {
  height: 350px;
}
.l-far {
  left: -100px;
  z-index: -1;
}
.z-back{
  z-index: -1;
}
</style>
