const title = document.getElementById("title");
const description = document.getElementById("description");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");
const themeBtn = document.getElementById("themeBtn");
const modal = document.getElementById("modal");
const editTitle = document.getElementById("editTitle");
const editDescription = document.getElementById("editDescription");
const saveBtn = document.getElementById("saveBtn");
const cancelBtn = document.getElementById("cancelBtn");
const clearBtn = document.getElementById("clearBtn");

let todos = JSON.parse(localStorage.getItem("todos")) || [];
let editIndex;

function render() {
  todoList.innerHTML = "";

  todos.forEach((todo, index) => {
    todoList.innerHTML += `
        <div class="todo ${todo.completed ? "completed" : ""} " data-id="${index}">
            <div class="left">
                <h2>${todo.title}</h2>
                <p>${todo.description}</p>
            </div>

            <div class="right">
                <button class="edit">Edit</button>
                <button class="delete">Delete</button>
            </div>
        </div>
        `;
  });

  localStorage.setItem("todos", JSON.stringify(todos));
}

render();

// Add Todo
addBtn.addEventListener("click", () => {
  if (!title.value.trim() || !description.value.trim()) {
    alert("Bütün xanalari doldurun");
    return;
  }

  todos.push({
    title: title.value,
    description: description.value,
    completed: false,
  });

  title.value = "";
  description.value = "";

  render();
});

// Event Delegation
todoList.addEventListener("click", function (e) {
  const todo = e.target.closest(".todo");

  if (!todo) return;

  const index = todo.dataset.id;

  // Delete
  if (e.target.classList.contains("delete")) {
    todos.splice(index, 1);
    render();
  }

  // Edit
  else if (e.target.classList.contains("edit")) {
    editIndex = index;

    editTitle.value = todos[index].title;
    editDescription.value = todos[index].description;

    modal.style.display = "flex";
  }

  // Complete
  else if (e.target.closest(".left")) {
    todos[index].completed = !todos[index].completed;

    render();
  }
});

// Save Edit
saveBtn.addEventListener("click", () => {
  if (!editTitle.value.trim() || !editDescription.value.trim()) {
    alert("Boş buraxmaq olmaz");
    return;
  }

  todos[editIndex].title = editTitle.value;
  todos[editIndex].description = editDescription.value;

  modal.style.display = "none";

  render();
});

// Cancel
cancelBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Modal baglama
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

clearBtn.addEventListener("click", function () {
  if (todos.length == 0) {
    alert("Todo yoxdur.");
    return;
  }

  if (confirm("Bütün tasklar silinsin?")) {
    todos = [];

    render();
  }
});

//Dark Light mode

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){
        themeBtn.innerHTML = "🌞";
    }else{
        themeBtn.innerHTML = "🌛";
    }

});
