<template>
    <div class="grid grid-1x1x1 grid-gap-4 txt-f-sfpro align-center  bd-t-px bd-t-c-li-grey bd-b-px bd-b-c-li-grey py-6 overflow-x">
        <div class="w-full">
            <h3 class="txt-f-sf-pro txt-left txt-s-5_5">{{ property }}</h3>
        </div>
        <div class="morile flex align-center break-none">
            <div class="mark w-8 h-8 bd-round-full bg-cyan center align-center flex ">
                <mark-icon size="20" class="center"></mark-icon>
            </div>
            <p class="txt-f-sf-pro txt-s-5_5 pr-4 ml-2">{{ morilePerks }}</p>
        </div>
        <div class="other flex align-center break-none">
            <div class="mark w-8 h-8 bd-round-full bg-cyan">
                <nahh-icon :size="20"></nahh-icon>
            </div>
            <div class="flex">
                <p class="my-auto txt-f-sf-pro txt-s-5_5 ml-2">{{ otherAgent }}</p>
                <slot name="emoji"></slot>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import NahhIcon from './icons/nahh-icon.vue'
import MarkIcon from './icons/mark-icon.vue'
let props = defineProps({
    property: {
        type: String
    },
    morilePerks: {
        type: String
    },
    otherAgent: {
        type: String
    },
})

</script>

<style scoped>
.txt-s-5_5 {
    font-size: 1.2rem !important;
}
.overflow-x{
    overflow-x: auto;
}
.break-none{
    white-space: nowrap;
}
</style>