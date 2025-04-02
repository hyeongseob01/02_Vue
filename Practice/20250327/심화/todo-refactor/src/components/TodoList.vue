<template>
  <div class="col">
    <ul class="list-group">
      <TodoItem
        v-for="todo in todolist"
        :key="todo.id"
        :todo="todo"
        @toggle-completed="emits('toggle-completed', todo.id)"
        @delete-todo="emits('delete-todo', todo.id)"
      />
    </ul>
  </div>
</template>

<script setup>
import TodoItem from './TodoItem.vue';

const emits = defineEmits(['toggle-completed', 'delete-todo']);
const props = defineProps({
  todolist: {
    type: Array,
    required: true,
  },
});
</script>
