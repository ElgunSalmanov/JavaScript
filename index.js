// Task 1
const list = document.getElementById("list");

let arr = ["Apple", "Banana", "Melon", "Cherry"];

arr.forEach((element) => {
  let li = document.createElement("li");
  li.innerHTML = element;
  list.appendChild(li);
});

// Task 2
const logo = document.getElementById("logo");

let img = document.createElement("img");
img.src = "./Assets/Icon/crocoder.png";
logo.appendChild(img);

// Task 3
const changedList = document.getElementById("changedList");

arr.forEach((element, index) => {
  let first = arr[0];
  let last = arr[arr.length - 1];
  let li = document.createElement("li");
  li.innerHTML = index === 0 ? last : index == arr.length - 1 ? first : element;
  changedList.appendChild(li);
});

// Task 4
const addedList = document.querySelector("#added");
const inputField = document.querySelector("#text");
const addButton = document.querySelector("#add_btn");

function createListItem(text) {
  const listItem = document.createElement("li");
  listItem.classList.add("lis");

  const listBlock = document.createElement("div");
  listBlock.classList.add("lis_blocks");

  const span = document.createElement("span");
  span.classList.add("text");
  span.textContent = text;

  const editButton = document.createElement("button");
  editButton.id = "btn_edit";
  editButton.classList.add("btn");
  editButton.textContent = "Edit";

  editButton.addEventListener("click", () => {
    const newText = prompt("Change:", text);
    if (newText) {
      span.textContent = newText;
    } else {
      alert("Input cannot be empty!");
    }
  });

  listBlock.appendChild(span);
  listBlock.appendChild(editButton);
  listItem.appendChild(listBlock);

  return listItem;
}

function addListItem() {
  const inputValue = inputField.value.trim();

  if (inputValue) {
    const listItem = createListItem(inputValue);
    addedList.appendChild(listItem);
    inputField.value = "";
  } else {
    alert("Input cannot be empty!");
  }
}

inputField.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addListItem();
  }
});

addButton.addEventListener("click", addListItem);
