<template>
  <ul>
    <Item
      v-for="d in data"
      :key="d.id"
      :todo="d"
      :updateTodo="updateTodo"
      :deleteTodo="deleteTodo"
    />
  </ul>
</template>

<script>
import Item from "./Item.vue";
export default {
  props: ["data", "updateTodo", "deleteTodo"],
  components: { Item },
};
</script>

<style scoped>
ul {
  padding: 5px;
  width: 80%;
}
li {
  display: flex;
  justify-content: space-between;
}
</style>
