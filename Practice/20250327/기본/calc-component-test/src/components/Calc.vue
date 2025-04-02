<template>
  <div>
    <h1>Calc1</h1>

    X :
    <input type="text" v-model.number="x" />
    <br />
    Y :
    <input type="text" v-model.number="y" />
    <br />
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'Calc',
  data() {
    const x = ref(10);
    const y = ref(20);
    return { x, y };
  },
};
</script>
