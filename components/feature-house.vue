<template>
    <div class="">
        <div class="relative txt-left ">
            <img src="/feature-house-1.png" alt="" class="bd-tr-round-2 relative w-full h-70 img-cover">
            <p class="tag txt-center bg-grey-10 px-2 max-w-20 py-2 l-none absolute b-1 txt-c-pry txt-f-sfpro txt-bold">Apartment </p>
        </div>
        <div class="txt-left">
            <h3>Millemium Apartments and Suites</h3>
            <div class="location">
                <locator-icon></locator-icon>
                <p>Eti-Osa, Lagos </p>
            </div>
            <div class="">
                <h3>₦5,986,000</h3>
                <h3>₦4,386,000 <span>per annum</span></h3>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
import LocatorIcon from './icons/locator-icon.vue'

</script>

<style scoped>
.bd-tr-round-2{
    border-top-right-radius: 0.5rem;
    border-top-left-radius: 1rem;
}
.max-w-90{
    max-width: 300px;
}

</style>