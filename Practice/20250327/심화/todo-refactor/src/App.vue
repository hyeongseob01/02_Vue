<template>
  <div id="app" class="container">
    <div class="card card-body bg-light mb-3 mt-3">
      <h2 class="card-title">Todo</h2>
      <h6 class="card-subtitle">Refactored version</h6>
    </div>

    <div class="card card-default card-borderless">
      <div class="card-body">
        <InputTodo @add-todo="addTodo" />

        <TodoCount :todoList="state.todoList" />

        <TodoList
          :todolist="state.todoList"
          @toggle-completed="toggleCompleted"
          @delete-todo="deleteTodo"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive, watch } from 'vue';

import InputTodo from './components/InputTodo.vue';
import TodoCount from './components/TodoCount.vue';
import TodoList from './components/TodoList.vue';

const ts = new Date().getTime();

const state = reactive({
  todoList: [],
});

onMounted(() => {
  state.todoList.push({ id: ts, todo: '자전거 타기', completed: false });
  state.todoList.push({ id: ts + 1, todo: '딸과 공원 산책', completed: true });
  state.todoList.push({
    id: ts + 2,
    todo: '일요일 애견 카페',
    completed: false,
  });
  state.todoList.push({ id: ts + 3, todo: 'Vue 원고 집필', completed: false });
});

const addTodo = (newTodo) => {
  state.todoList.push({
    id: new Date().getTime(),
    todo: newTodo,
    completed: false,
  });
};

const deleteTodo = (id) => {
  let index = state.todoList.findIndex((element) => element.id === id);
  state.todoList.splice(index, 1);
};

const toggleCompleted = (id) => {
  let index = state.todoList.findIndex((element) => element.id === id);
  state.todoList[index].completed = !state.todoList[index].completed;
};

watch(state.todoList, () => {
  return state.todoList.sort((a, b) => {
    if (a.completed === b.completed) {
      return a.todo.localeCompare(b.todo);
    }
    return a.completed - b.completed;
  });
});
</script>
