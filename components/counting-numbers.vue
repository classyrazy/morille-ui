<template>
    <div class="">
        <p ref="numbersDiv" class="txt-s-6 txt-f-poppins txt-c-dark-black">
            <vue3-autocounter
                ref="counter"
                :startAmount="startAmount"
                :endAmount="endAmount"
                :duration="4"
                :autoinit="true"
            ></vue3-autocounter>
            <span v-if="showPlus">+</span>
            <div class="">
            <!-- <img src="/loudly_crying_face.gif" class="max-h-10"> -->
            </div>
        </p>
    </div>
</template>

<script setup lang="ts">
import Vue3autocounter from 'vue3-autocounter';

let props = defineProps({
    endAmount: {
        type: Number,
    },
    startAmount: {
        type: Number,
        default: 10
    },
    showPlus: {
        type: Boolean,
        default: false
    },
    duration:{
        type: Number,
        default: 4
    }
})


let numbersDiv = ref(null)
let counter = ref(null)
let observeCounter = ref(null)
onMounted(() => {
    function enters() {
        function func(entries) {
            if (entries[0].isIntersecting && observeCounter.value != 2 ) {
                observeCounter.value++
                counter.value.start()
            }
        }
        const observer = new IntersectionObserver(func, {
            threshold: 0.8,
        })
        observer.observe(numbersDiv.value)
    }
    enters()
})

</script>

<style scoped>
</style>