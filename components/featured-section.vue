<template>
    <div class="">
        <h2 class="txt-s-6 txt-f-sfpro txt-c-deep-black txt-bold">Featured Real Estate </h2>
        <div class="grid grid-auto max-w90 grid-gap-4 txt-center px-8 mx-auto mt-6">
            <feature-house></feature-house>
            <feature-house></feature-house>
            <feature-house></feature-house>
            <feature-house></feature-house>
            <feature-house></feature-house>
        </div>
    </div>
</template>

<script setup lang="ts">
import FeatureHouse from './feature-house.vue'

</script>

<style scoped>
.max-w90{
    width: 90%;
}
/* .grid-auto {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)) !important;
} */
</style>