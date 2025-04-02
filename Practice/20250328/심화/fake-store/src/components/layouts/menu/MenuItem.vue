<template>
  <li class="nav-item">
    <router-link class="nav-link" :to="props.menu.url">{{
      props.menu.title
    }}</router-link>
  </li>
</template>

<script setup>
const props = defineProps({
  menu: Object,
  required: true,
});
</script>
