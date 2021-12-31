<template>
    <div>
        <h2 class="txt-s-6 txt-f-sfpro txt-c-deep-black txt-bold">Why use Morile?</h2>
        <p
            class="txt-s-5"
        >These are a few reasons why you should use morile for your next home search {{ !isMobile }}</p>
        <div class="con w-full center">
            <h1 v-if="isMobile">gdjhklfdjkhf</h1>
            <comparison-desktop v-else></comparison-desktop>
            
        </div>
    </div>
</template>

<script setup lang="ts">
import ComparisonDesktop from './comparison-desktop.vue'
import { useWindowSize } from 'vue-window-size';
let isMobile = ref(false)
const { width, height } = useWindowSize();
onMounted(() => {
    window.addEventListener("resize", () => {
        if (width.value <= 800) {
            isMobile.value = true
        } else {
            isMobile.value = false
        }
    })
})

</script>

<style scoped>
</style>