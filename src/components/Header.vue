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
export default {
  props: { createTodo: Function },
  setup(props) {
    const value = ref("");
    function createTodoHadler() {
      props.createTodo(value.value);
      value.value = "";
    }
    return { value, createTodoHadler };
  },
};
</script>

<style scoped></style>
