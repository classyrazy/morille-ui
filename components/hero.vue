<template>
    <div class>
        <div class="bg-cyan pt-8 relative bd-round-3">
            <div class="absolute t-0 l-14 p-6 pl-none">
                <div class>
                    <h1 class="txt-s-10 txt-f-poppins txt-bold txt-c-pry max-w-half">
                        Find the
                        <span class="span-perfect">Perfect</span> home in Lagos with Morile
                    </h1>
                    <div class="max-w-80">
                        <p
                            class="txt-s-5_5 txt-h-6 pr-1 txt-f-sfpro txt-lighter txt-c-black-200 mt-2"
                        >Looking for a home in Lagos can be very stressful and time consuming, Morile makes it become a faster and better experience.</p>
                    </div>
                </div>
                <div class="input-con mt-4">
                    <div class="tabs bg-white flex max-w-70 py-4 bd-round-2 space-around">
                        <p class="mouse-pointer txt-bold">Buy</p>
                        <p class="mouse-pointer txt-c-black-50">Rent</p>
                        <p class="mouse-pointer txt-c-black-50">Co-living</p>
                    </div>
                    <div class="tab-con bg-white bd-round-2 p-2  w-full ">
                        <form class="flex space-around">
                            <div class="each">
                                <label for="location" class="pl-4 txt-s-4 txt-bold">Location</label>
                                <v-input
                                    placeholder="Where do you want to live?"
                                    size="small"
                                    class="mr-4 px-none"
                                    id="location"></v-input>
                            </div>
                            <div class="each">
                                <label for="property-type" class="pl-4 txt-s-4 txt-bold">Property type </label>
                                <v-input
                                    placeholder="What type of house is it?"
                                    size="small"
                                    class="mr-4 px-none"
                                    id="property-type"
                                ></v-input>
                            </div>
                            <div class="each">
                                <label for="price-range" class="pl-4 txt-s-4 txt-bold">Price range</label>
                                <v-input
                                    placeholder="And whats your budget?"
                                    size="small"
                                    class="mr-4 px-none"
                                    id="price-range"
                                ></v-input>
                            </div>
                            <div class="my-auto">
                                <v-button>Search</v-button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="flex">
                <img
                    src="/bg-hero-house.png"
                    draggable="false"
                    class="hero-img w-full pb-none ml-auto img-cover "
                />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import VButton from './forms/v-button.vue'
import VInput from './forms/v-input.vue'

</script>

<style scoped>
.hero-img {
    max-width: 700px;
}
.span-perfect {
    color: #05a861;
}
.max-w-80 {
    max-width: 460px;
}
.max-w-half {
    max-width: 500px;
}
.txt-s-5_5 {
    font-size: 1.2rem !important;
}
</style>