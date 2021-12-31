<template>
  <button :class="__class" class="flex center" style="white-space: nowrap" :disabled="disabled">
    <component
        v-if="icon || loading"
        :class="`${!iconOnly ? 'mr-2':''} my-auto`"
        size="17"
        :color="types[type] && types[type].text"
               :is="loading ? Spinner : icon"></component>
    <span class="my-auto" :class="!icon && !loading ? (round ? ' mt-1 ml-1':'m-auto'):''">
      <slot></slot>
    </span>
  </button>
</template>

<script lang="ts" setup>
// import Spinner from '../icons/loader-icon.vue';

let props = defineProps({
  size: {
    type: String,
    default: 'medium'
  },
  type: {
    type: String,
    default: 'pry'
  },
  round: {
    type: Boolean,
    default: false
  },
  icon: {
    type: Object
  },
  iconOnly: {
    type: Boolean,
    defult: false
  },
  full: {
    type: Boolean,
    default: true
  },
  disabled: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  }
})

let base = 'bd-round-1'
let sizes = {
  small: 'py-2 px-4',
  medium: 'py-font px-6',
  big: 'py-4 px-8 txt-s-4'
}
let types = {
  white: {
    __class: 'bd-px bd-c-white bg-white txt-c-pry-400',
    text: '#ffffff'
  },
  'b-white': {
    __class: 'bd-px bd-c-light-grey bg-white txt-c-black',
    text: '#03053D'
  },
  black: {
    __class: 'bd-px bd-c-black bg-black txt-c-white',
    text: ''
  },
  bordered: {
    __class: 'bd-px bd-c-white bg-transparent txt-c-white',
    text: ''
  },
  bordered_black: {
    __class: 'bd-px bd-c-black-10 bg-white txt-c-black',
    text: ''
  },
  pry: {
    __class: 'bd-px bd-c-pry bg-pry txt-c-white',
    text: '#fff'
  },
}

let __class = computed(() => {
  let __base = ((types[props.type] && types[props.type].__class) || types['pry'].__class) + ' ' + (sizes[props.size] || sizes['medium']);
  if (props.round)
    __base += ' bd-round-full h-12 w-12 max-w-12 center'
  else
    __base += ' ' + base;

  if (props.full)
    __base += ' w-full'
  if (props.disabled)
    __base += ' fade-40'

  return __base
})

</script>

<style scoped>
button{
  cursor: pointer;
}

</style>