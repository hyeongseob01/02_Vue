<template>
  <div>
    <h2>404 Not Found</h2>
    <div>존재하지 않는 요청 경로: {{ $route.fullPath }}</div>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
};
</script>
