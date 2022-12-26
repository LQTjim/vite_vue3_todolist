<template>
  <div
    class="d-flex justify-content-between form-control input-group"
    v-if="data.length !== 0"
  >
    <div class="form-check mx-1">
      <label class="form-check-label">全選</label
      ><input class="form-check-input" type="checkbox" v-model="isChecked" />
    </div>
    <div>
      <span class="mx-1">已完成{{ completedTodos }}/{{ data.length }}</span>
      <button class="btn btn-danger" @click="deleteAllCompleteTodo">
        清除所有已完成事項
      </button>
      <button class="mx-1 btn btn-danger" @click="deleteAllTodo()">
        清除所有事項
      </button>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
export default {
  props: ["data", "updateAllTodo", "deleteAllTodo", "deleteAllCompleteTodo"],
  setup(props) {
    const completedTodos = computed({
      get() {
        return props.data.reduce(
          (acc, todo) => acc + (todo.isChecked ? 1 : 0),
          0
        );
      },
    });
    const isChecked = computed({
      get() {
        return (
          completedTodos.value > 0 && completedTodos.value === props.data.length
        );
      },
      set(checkFlag) {
        props.updateAllTodo(checkFlag);
      },
    });
    return { completedTodos, isChecked };
  },
};
</script>

<style scoped></style>
