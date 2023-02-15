<template>
  <ul class="list-group">
    <Item v-for="d in todoStore.todos" :key="d.id" :todo="d" />
  </ul>
</template>

<script>
import Item from "./Item.vue";
import pinia from "./../stores/store";
import { useTodoStore } from "./../stores/todoStore";
export default {
  setup() {
    const todoStore = useTodoStore(pinia);
    return { todoStore };
  },

  components: { Item },
};
</script>

<style scoped></style>
