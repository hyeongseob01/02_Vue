<template>
  <div>
    <h1>Calc4</h1>
    X :
    <input type="text" v-model.number="state.x" />
    <br />
    Y :
    <input type="text" v-model.number="state.y" />
    <br />
    <div>결과: {{ result }}</div>
  </div>
</template>

<script>
import { computed, reactive } from 'vue';

export default {
  name: 'Calc4',
  data() {
    const state = reactive({
      x: 10,
      y: 20,
    });
    const result = computed(() => {
      return state.x + state.y;
    });

    return { state, result };
  },
};
</script>
