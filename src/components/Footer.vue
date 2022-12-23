<template>
  <div v-if="data.length !== 0" class="footer-container">
    <label><input type="checkbox" v-model="isChecked" />全選</label>
    <span>已完成{{ completedTodos }}/{{ data.length }}</span>
    <button @click="deleteAllCompleteTodo">清除所有已完成事項</button>
    <button @click="deleteAllTodo()">清除所有事項</button>
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

<style scoped>
.footer-container {
  width: 80%;
  margin-bottom: 5px;
  margin-right: 5px;
  display: flex;
  justify-content: space-between;
}
</style>
