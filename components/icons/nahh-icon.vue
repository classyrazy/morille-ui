<template>
  <svg :width="size" height="auto" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 1L1 1" stroke="#064328" stroke-width="2" stroke-linecap="round"/>
</svg>



</template>

<script setup>
let props = defineProps({
  size: {
    type: Number,
    default: 25,
  },
});
</script>

<style lang="scss" scoped>
.line {
    stroke-dasharray: 1;
    animation-name: fill-line;
    animation-duration: 5s;
}

@keyframes fill-line {
    from {
        stroke-dashoffset: 1;
    }
    to {
        stroke-dashoffset: 0;
    }
}
</style>
