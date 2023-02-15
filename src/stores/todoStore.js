import { defineStore } from "pinia";
import { nanoid } from "nanoid";

export const useTodoStore = defineStore("todos", {
  state: () => {
    return {
      todos: [
        { id: nanoid(5), title: "吃飯", isChecked: true },
        { id: nanoid(5), title: "睡覺", isChecked: false },
        { id: 1, title: 1, isChecked: true },
        { id: 2, title: 2, isChecked: true },
        { id: 3, title: 3, isChecked: true },
      ],
    };
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    createTodo(todoTitle) {
      const verifyTodoTitle = todoTitle.trim("");
      if (verifyTodoTitle.length > 10 || !verifyTodoTitle) {
        return;
      } else {
        this.todos.push({
          id: nanoid(5),
          title: verifyTodoTitle,
          isChecked: false,
        });
      }
    },

    updateTodo(todo) {
      if (todo.title.length > 10 || !todo.title) {
        return;
      }
      this.todos.forEach((d, index) => {
        if (d.id === todo.id) {
          this.todos[index] = todo;
        } else return;
      });
    },
    updateAllTodo(checkFlag) {
      this.todos.forEach((d) => {
        d.isChecked = checkFlag;
      });
    },
    deleteTodo(todo) {
      console.time("deleteTodo");
      for (let i = 0; i < this.todos.length; i++) {
        if (this.todos[i].id === todo.id) {
          this.todos.splice(i, 1);
          console.timeEnd("deleteTodo");
          return;
        }
      }
    },
    deleteAllCompleteTodo() {
      const result = this.todos.filter((el) => {
        return el.isChecked === false;
      });
      if (result.length === this.todos.length) {
        return;
      } else {
        this.todos.splice(0, this.todos.length);
        this.todos.unshift(...result);
      }
    },
    deleteAllTodo() {
      this.todos.splice(0, this.todos.length);
    },
  },
});
