<template>
  <div
    class="bg-image p-5 text-left shadow-1-strong rounded text-white"
    style="
      background-image: url('https://mdbcdn.b-cdn.net/img/new/slides/003.webp');
    "
  >
    <h1>{{ config.title }}</h1>
    <p>{{ config.subtitle }}</p>
  </div>
</template>

<script setup>
import config from '@/config';
</script>
