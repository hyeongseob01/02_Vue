<template>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <MenuItem
        v-for="(menu, index) in config.menus"
        :key="index"
        :menu="menu"
      />
    </ul>
  </div>
</template>

<script setup>
import config from '@/config';
import MenuItem from './MenuItem.vue';
</script>

<style></style>
