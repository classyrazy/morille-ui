<template>
    <div class="max-w90 bg-white pt-6 px-4">
        <div class="header grid grid-1x1x1 my-4">
            <div class="flex"></div>
            <div class="flex">
                <img src="/icons/home.svg" />
                <h1 class="txt-s-6 txt-f-sfpro txt-c-pry">Morile</h1>
            </div>
            <h1 class="txt-s-6 txt-f-sfpro flex">Other Agents</h1>
        </div>
        <comparison-grid
            property="Free Inspection"
            morile-perks="All home inspections are free"
            other-agent="N5,000 for every inspection"
        >
            <template #emoji>
                <img src="/loudly_crying_face.gif" class="w-10 h-10" draggable="false" />
            </template>
        </comparison-grid>
        <comparison-grid
            property="Installement Payments"
            morile-perks="Flexible payment method "
            other-agent="You have to pay at once"
        ></comparison-grid>
        <comparison-grid
            property="Insurance "
            morile-perks="Guaranteed insurance plan "
            other-agent="No insurance"
        ></comparison-grid>
        <comparison-grid
            property="Repairs"
            morile-perks="Homes are repaired before lease"
            other-agent="You bear the burden of repairs "
        ></comparison-grid>
        <comparison-grid
            property="Response time  "
            morile-perks="24/7 support from our team"
            other-agent="Hmm, takes ages"
        >
            <template #emoji>
                <img src="/crying_face.gif" class="w-10 h-10" draggable="false" />
            </template>
        </comparison-grid>
        <comparison-grid
            property="Search time"
            morile-perks="1 week till you see your perfect home"
            other-agent="You already know how it is"
        >
            <template #emoji>
                <img src="/rolling_on_the_floor_laughing.gif" class="w-10 h-10" draggable="false" />
            </template>
        </comparison-grid>
    </div>
</template>

<script setup lang="ts">
import ComparisonGrid from './comparison-grid.vue'

</script>

<style scoped>
.max-w90{
    width: 90%;
    
}
</style>