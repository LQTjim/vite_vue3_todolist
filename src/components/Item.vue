<template>
  <li class="list-group-item d-flex justify-content-between">
    <div class="form-check" v-if="!updateFlag">
      <label class="form-check-label">{{ todo.title }}</label
      ><input class="form-check-input" type="checkbox" v-model="isChecked" />
    </div>

    <input
      class="form-check"
      v-else
      type="text"
      ref="inputRef"
      v-model="updateValue"
      @keyup.enter="handleUpdate()"
      @:blur="inputBlur()"
    />
    <div>
      <button class="btn btn-info mx-1" @click="updateFlag = !updateFlag">
        修改
      </button>
      <button class="btn btn-danger" @click.once="deleteTodo(todo)">
        刪除
      </button>
    </div>
  </li>
</template>

<script>
import { ref, computed } from "vue";
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

<style scoped></style>
