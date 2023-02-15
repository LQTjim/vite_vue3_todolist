<template>
  <div
    class="d-flex justify-content-between form-control input-group"
    v-if="todoStore.todos.length !== 0"
  >
    <div class="form-check mx-1">
      <label class="form-check-label">全選</label
      ><input class="form-check-input" type="checkbox" v-model="isChecked" />
    </div>
    <div>
      <span class="mx-1"
        >已完成{{ completedTodos }}/{{ todoStore.todos.length }}</span
      >
      <button class="btn btn-danger" @click="todoStore.deleteAllCompleteTodo()">
        清除所有已完成事項
      </button>
      <button class="mx-1 btn btn-danger" @click="todoStore.deleteAllTodo()">
        清除所有事項
      </button>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import pinia from "./../stores/store";
import { useTodoStore } from "./../stores/todoStore";
export default {
  setup() {
    const todoStore = useTodoStore(pinia);
    const completedTodos = computed({
      get() {
        return todoStore.todos.reduce(
          (acc, todo) => acc + (todo.isChecked ? 1 : 0),
          0
        );
      },
    });
    const isChecked = computed({
      get() {
        return (
          completedTodos.value > 0 &&
          completedTodos.value === todoStore.todos.length
        );
      },
      set(checkFlag) {
        todoStore.updateAllTodo(checkFlag);
      },
    });
    return { completedTodos, isChecked, todoStore };
  },
};
</script>

<style scoped></style>
