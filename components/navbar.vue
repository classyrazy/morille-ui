<template>
    <nav class>
        <div class="flex w-full">
            <router-link to="/" class="pointer my-auto">
                <img src="/morile-logo.png" alt="morile logo" />
            </router-link>
            <div class="nav-links flex w-full center align-center">
                <a href="#">
                    <p class="nav-link underline-left txt-s-5 txt-c-black txt-f-sfpro hover:txt-c-pry-300">Home</p>
                </a>
                <a href="#">
                    <p class="nav-link mx-6 txt-s-5 txt-f-sfpro hover:txt-c-pry-300">Our Services</p>
                </a>
                <a href="#">
                    <p class="nav-link mx-6 txt-f-sfpro hover:txt-c-pry-300">About Us</p>
                </a>
                <a href="#">
                    <p class="nav-link mx-6 txt-f-sfpro hover:txt-c-pry-300">Properties</p>
                </a>
            </div>
            <router-link to="/">
                <v-button>Contact Us</v-button>
            </router-link>
        </div>
    </nav>
</template>

<script setup lang="ts">
import VButton from './forms/v-button.vue'

</script>

<style scoped>
/* div{
    border: red solid 2px;
} */
.nav-links a p.nav-link {
    font-size: 1.06rem !important;
}
/* .nav-links a p.nav-link:hover {
    border-bottom: solid 3px #064328;
} */
.nav-links a p.nav-link {
  display: inline-block;
  position: relative;
  margin: auto;
}
.nav-links a p.nav-link::after {
  content: '';
  position: absolute;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  transform: scaleX(0);
  height: 2px;
  bottom: -5px;
  left: 0;
  background: #064328;
  /* transform-origin: bottom center; */
  transition: transform 0.4s ease-out;
}
.nav-links a p.nav-link:hover::after {
  transform: scaleX(0.5);
  transform-origin: bottom center;
}


</style>