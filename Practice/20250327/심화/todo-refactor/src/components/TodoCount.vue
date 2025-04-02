<template>
  <ul class="list-group list-group-horizontal mb-3">
    <li class="list-group-item">
      전체
      <span class="badge bg-primary rounded-pill">{{ todoLength }}</span>
    </li>
    <li class="list-group-item">
      진행중
      <span class="badge bg-secondary rounded-pill">{{
        notCompletedLength
      }}</span>
    </li>
    <li class="list-group-item">
      완료
      <span class="badge bg-success rounded-pill">{{ completedLength }}</span>
    </li>
  </ul>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  todoList: Array,
  required: true,
});

const todoLength = computed(() => {
  return props.todoList.length;
});

const notCompletedLength = computed(() => {
  return props.todoList.length - completedLength.value;
});

const completedLength = computed(() => {
  return props.todoList.filter((todo) => todo.completed).length;
});
</script>
