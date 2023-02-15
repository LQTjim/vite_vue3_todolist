<template>
  <div class="input-group">
    <input
      type="text"
      class="form-control"
      v-model="value"
      @keyup.enter="createTodoHadler(value)"
      placeholder="範例:打電腦"
    />
  </div>
</template>

<script>
import { ref } from "vue";
import pinia from "./../stores/store";
import { useTodoStore } from "./../stores/todoStore";
export default {
  setup() {
    const todoStore = useTodoStore(pinia);
    const value = ref("");
    function createTodoHadler() {
      todoStore.createTodo(value.value);
      value.value = "";
    }
    return { value, createTodoHadler, todoStore };
  },
};
</script>

<style scoped></style>
