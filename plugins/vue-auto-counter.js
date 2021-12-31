import { defineNuxtPlugin } from "#app";
import Vue3autocounter from "vue3-autocounter";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Vue3autocounter, {});
});
