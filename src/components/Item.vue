<template>
  <li class="container">
    <label v-if="!updateFlag"
      ><input type="checkbox" v-model="isChecked" />{{ todo.title }}</label
    >
    <input
      v-else
      class="input-text"
      type="text"
      ref="inputRef"
      v-model="updateValue"
      @keyup.enter="handleUpdate()"
      @:blur="inputBlur()"
    />
    <div>
      <button class="button-update" @click="updateFlag = !updateFlag">
        修改
      </button>
      <button class="button-delete" @click.once="deleteTodo(todo)">刪除</button>
    </div>
  </li>
</template>

<script>
import { ref, computed, onUpdated } from "vue";
import useInputFocus from "../hooks/useInputFocus";
export default {
  props: { todo: Object, updateTodo: Function, deleteTodo: Function },
  setup(props) {
    const updateFlag = ref(false);
    const inputRef = ref(null);
    const updateValue = ref("");
    const isChecked = computed({
      get() {
        return props.todo.isChecked;
      },
      set(value) {
        props.updateTodo({ ...props.todo, isChecked: value });
      },
    });
    function handleUpdate() {
      updateFlag.value = !updateFlag;
      props.updateTodo({ ...props.todo, title: updateValue.value });
      updateValue.value = "";
    }
    function inputBlur() {
      updateFlag.value = !updateFlag;
      updateValue.value = "";
    }
    useInputFocus(inputRef);
    return {
      isChecked,
      updateFlag,
      inputRef,
      handleUpdate,
      updateValue,
      inputBlur,
    };
  },
};
</script>

<style scoped>
.container {
  border: 1px solid green;
  margin: 2px;
  padding: 1px;
}
.input-text {
  width: 50%;
  max-height: fit-content;
}
.button-delete:hover {
  background-color: red;
}
.button-update:hover {
  background-color: greenyellow;
}
</style>
