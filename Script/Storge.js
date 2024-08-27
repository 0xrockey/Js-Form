// this for categroies storge
// make a sstorge

const text = document.getElementById("text");
const addTaskButton = document.getElementById("add-task-btn");
const listBox = document.getElementById("listBox");
/*============ */
const item = document.getElementById("name");
const price = document.getElementById("price");
const discraption = document.getElementById("discraption");
const btn = document.getElementById("btn-save");
const add = document.getElementById("add-task");

let array = [];

addTaskButton.addEventListener("click", (e) => {
  e.preventDefault();
  let todo = localStorage.getItem("todo");
  if (todo === null) {
    array = [];
  } else {
    array = JSON.parse(todo);
  }
  array.push(text.value);
  text.value = "";
  localStorage.setItem("todo", JSON.stringify(array));
  displayItem();
});

// display item
function displayItem() {
  let todo = localStorage.getItem("todo");
  if (todo === null) {
    array = [];
  } else {
    array = JSON.parse(todo);
  }
  let htmlCode = "";
  array.forEach((list, ind) => {
    htmlCode += ` 
   <tr role="tablist"><td>${list}</td>
    <td>
    <button onclick='addItemTask()' class='btn btn-outline-primary '>Eidte</button>
    <button onclick='deleteItem(${ind})' class='btn btn-outline-danger'>Delete</button>
    </td>
    </tr> 
   `;
  });
  listBox.innerHTML = htmlCode;
}

function deleteItem(ind) {
  let todo = localStorage.getItem("todo");
  array = JSON.parse(todo);
  array.splice(ind, 1);
  localStorage.setItem("todo", JSON.stringify(array));
  displayItem();
}

add.hidden = true;

function addItemTask() {
  add.hidden = false;
}

function addItemSave() {
  add.hidden = true;
}

// this for store item
// make a new Storge

let stor = [];

let itemStorage = localStorage.getItem("stor")
  ? JSON.parse(localStorage.getItem("stor"))
  : stor;

btn.addEventListener("click", (e) => {
  e.preventDefault();
  itemStorage.push(item.value);
  itemStorage.push(price.value);
  itemStorage.push(discraption.value);
  localStorage.setItem("stor", JSON.stringify(itemStorage));
  item.value = "";
  price.value = "";
  discraption.value = "";
});

function showItem() {
  console.log(JSON.parse(localStorage.getItem("stor")));
}

function clearItem() {
  localStorage.clear();
}
