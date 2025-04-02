<template>
  <div class="input-group mb-3">
    <input
      type="text"
      class="form-control"
      v-model="state.todo"
      @keyup.enter="addTodoHandler"
    />
    <button @click="addTodoHandler" class="btn btn-outline-primary">
      추가
    </button>
  </div>
</template>

<script setup>
import { reactive } from 'vue';

const state = reactive({ todo: '' });
const emit = defineEmits(['add-todo']);

const addTodoHandler = () => {
  if (state.todo.length <= 0) {
    alert('내용을 입력해주세요');
    return;
  } // 길이가 0이면 추가하지 않음

  emit('add-todo', state.todo);
  state.todo = ''; // Todo 초기화
};
</script>
