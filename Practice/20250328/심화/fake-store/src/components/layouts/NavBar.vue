<template>
  <nav class="navbar navbar-expand-sm navbar-light bg-light">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/"> {{ config.title }}</router-link>
      <button class="navbar-toggler" type="button" @click="changeIsNavShow">
        <span class="navbar-toggler-icon"></span>
      </button>
      <MenuGroup :class="navClass" />
    </div>
  </nav>
</template>

<script setup>
import config from '@/config';
import { computed, ref } from 'vue';
import MenuGroup from './menu/MenuGroup.vue';

const isNavShow = ref(false);
const navClass = computed(() => {
  return isNavShow.value
    ? 'collapse navbar-collapse show'
    : 'collapse navbar-collapse ';
});
const changeIsNavShow = () => {
  isNavShow.value = !isNavShow.value;
};
</script>

<style></style>
