<script setup>
import Header from "../src/components/Header.vue";
import List from "../src/components/List.vue";
import Footer from "../src/components/Footer.vue";
import { reactive } from "vue";
import { nanoid } from "nanoid";

//for test speed:
// let arr = new Array(20000);
// let arr = new Array(200);
// (function () {
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = { id: nanoid(5), title: i, isChecked: true };
//   }
// })();
// let data = reactive(arr);

let data = reactive([
  { id: nanoid(5), title: "吃飯", isChecked: true },
  { id: nanoid(5), title: "睡覺", isChecked: false },
  { id: 1, title: 1, isChecked: true },
  { id: 2, title: 2, isChecked: true },
  { id: 3, title: 3, isChecked: true },
]);

function createTodo(todoTitle) {
  const verifyTodoTitle = todoTitle.trim("");
  if (verifyTodoTitle.length > 10 || !verifyTodoTitle) {
    return;
  } else {
    data.push({ id: nanoid(5), title: verifyTodoTitle, isChecked: false });
  }
}
function updateTodo(todo) {
  if (todo.title.length > 10 || !todo.title) {
    return;
  }
  data.forEach((d, index) => {
    if (d.id === todo.id) {
      data[index] = todo;
    } else return;
  });
}
function updateAllTodo(checkFlag) {
  data.forEach((d) => {
    d.isChecked = checkFlag;
  });
}
/* 這樣寫(forEach)有一個小毛病
當刪掉指定的todo後,後面遍歷時index會提前一位,所以被刪的下一個會讀不到值.
在這個case裡面沒差.
map也是一樣的情形
用forEach和map的效能都很差,都要等回圈跑完*/
/* function deleteTodo(todo) {
  console.time("deleteTodo");
  data.forEach((d, i) => {
    if (d.id === todo.id) {
      data.splice(i, 1);
      return;
    } else return;
  });
  console.timeEnd("deleteTodo");
  //deleteTodo: 34.959228515625 ms 刪除第0個
  //deleteTodo: 9.72216796875 ms 刪除第19999個
}*/
/* function deleteTodo(todo) {
  console.time("deleteTodo");
  let result = data.filter((el) => {
    return el.id !== todo.id;
  });

  data.splice(0, data.length);
  data.unshift(...result);
  console.timeEnd("deleteTodo");
  //deleteTodo: 57.227783203125 ms 刪除第0個
  //deleteTodo: 62.539794921875 ms 刪除第19999個
} */
function deleteTodo(todo) {
  console.time("deleteTodo");
  for (let i = 0; i < data.length; i++) {
    if (data[i].id === todo.id) {
      data.splice(i, 1);
      console.timeEnd("deleteTodo");
      return;
      //deleteTodo: 28.1640625 ms 刪除第0個
      //deleteTodo: 10.326171875 ms 刪除第19999個
    }
  }
}
function deleteAllCompleteTodo() {
  const result = data.filter((el) => {
    return el.isChecked === false;
  });
  if (result.length === data.length) {
    return;
  } else {
    data.splice(0, data.length);
    data.unshift(...result);
  }
}
function deleteAllTodo() {
  data.splice(0, data.length);
}
</script>

<template>
  <div class="container">
    <Header :createTodo="createTodo" />
    <List :data="data" :updateTodo="updateTodo" :deleteTodo="deleteTodo" />
    <Footer
      :data="data"
      :updateAllTodo="updateAllTodo"
      :deleteAllCompleteTodo="deleteAllCompleteTodo"
      :deleteAllTodo="deleteAllTodo"
    />
  </div>
</template>

<style scoped></style>
