const body = document.querySelector("body");
const formInput = document.querySelector(".formInput");
const formBtn = document.querySelector(".formBtn");
const todosContainer = document.querySelector(".todosContainer");
const toggleColor = document.querySelector(".toggleColor");

const todos = [];
let isDarkMode = false;

formBtn.addEventListener("click", function () {
  if (!formInput.value) {
    return;
  }

  const todoObject = {
    title: formInput.value,
    id: Date.now(),
    isCompleted: false,
  };
  todos.push(todoObject);

  formInput.value = "";
  formInput.focus();
  showTodos();
});

function showTodos() {
  todosContainer.innerHTML = "";

  todos.forEach(function (todo) {
    const todosForShow = document.createElement("div");
    const span = document.createElement("span");
    const removeBtn = document.createElement("button");
    const doneBtn = document.createElement("button");

    todosForShow.classList.add("todosForShow");
    span.innerText = todo.title;

    if (todo.isCompleted) {
      span.style.textDecoration = "line-through";
    }

    removeBtn.innerText = "REMOVE";
    doneBtn.innerText = todo.isCompleted ? "UNDONE" : "DONE";

    const id = todo.id;
    const ind = todos.findIndex(function (todo) {
      return todo.id === id;
    });

    removeBtn.addEventListener("click", function () {
      todos.splice(ind, 1);
      showTodos();
    });

    doneBtn.addEventListener("click", function () {
      if (!todo.isCompleted) {
        todos[ind].isCompleted = true;
        showTodos();
      } else {
        todos[ind].isCompleted = false;
        showTodos();
      }
    });

    todosForShow.append(span, removeBtn, doneBtn);
    todosContainer.append(todosForShow);
  });
}

toggleColor.addEventListener("click", function () {
  isDarkMode
    ? (body.style.backgroundColor = "white")
    : (body.style.backgroundColor = "gray");
  isDarkMode = !isDarkMode;
});
