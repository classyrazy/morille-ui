<template>
    <div class="grid grid-1x1x1 grid-gap-4 align-center">
        <div class="eaxch flex col txt-center">
            <counting-numbers :endAmount="350" showPlus></counting-numbers>
            <span class="txt-f-sfpro txt-s-5_5 my-2">Listed Properties</span>
        </div>
        <div class="eaxch flex col txt-center">
            <counting-numbers :endAmount="220"></counting-numbers>
            <span class="txt-f-sfpro txt-s-5_5 my-2">Satisified Customers</span>
        </div>
        <div class="eaxch flex col txt-center">
            <counting-numbers :endAmount="15"></counting-numbers>
            <span class="txt-f-sfpro txt-s-5_5 my-2">Years of Experience</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import CountingNumbers from './counting-numbers.vue'

</script>

<style scoped>
.txt-s-5_5 {
    font-size: 1.2rem !important;
}
</style>