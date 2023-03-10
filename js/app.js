const feedback = document.querySelector(".alert");
const btn = document.querySelector(".btn");
const input = document.querySelector(".form-control");
const list = document.querySelector(".item-list");
const btnErase = document.querySelector("#clear-list");

const addItem = (e) => {
  e.preventDefault();
  let value = input.value;

  if (value === "") {
    feedback.classList.add("showItem", "alert-danger");
    feedback.textContent = `Please Enter Valid Value`;

    setTimeout(() => {
      feedback.classList.remove("showItem", "alert-danger");
    }, 5000);
  } else if (value) {
    let item = document.createElement("div");
    let itemName = document.createElement("h5");
    let icons = document.createElement("div");
    let iconCorrect = document.createElement("a");
    let iconEdit = document.createElement("a");
    let iconDelete = document.createElement("a");
    let correct = document.createElement("i");
    let edit = document.createElement("i");
    let daniel = document.createElement("i");

    itemName.textContent = value;
    item.classList.add("item");
    itemName.classList.add("item-name");
    item.classList.add("item-list");
    icons.classList.add("item-icons");
    iconCorrect.classList.add("complete-item", "mx-2", "item-icon");
    iconEdit.classList.add("edit-item", "mx-2", "item-icon");
    iconDelete.classList.add("delete-item", "item-icon");
    iconCorrect.href = "#";
    iconEdit.href = "#";
    iconDelete.href = "#";

    correct.classList.add("far", "fa-check-circle");
    edit.classList.add("far", "fa-edit");
    daniel.classList.add("far", "fa-times-circle");
    iconCorrect.appendChild(correct);
    iconEdit.appendChild(edit);
    iconDelete.appendChild(daniel);
    icons.appendChild(iconCorrect);
    icons.appendChild(iconEdit);
    icons.appendChild(iconDelete);
    item.appendChild(itemName);
    item.appendChild(icons);
    list.appendChild(item);

    input.value = "";

    iconCorrect.addEventListener("click", () => {
      itemName.classList.add("completed");
      iconCorrect.classList.add("visibility");
    });
    iconEdit.addEventListener("click", () => {
      item.style.display = "none";
      input.value = itemName.textContent;
    });
    iconDelete.addEventListener("click", () => {
      item.style.display = "none";
      feedback.classList.add("showItem", "alert-success");
      feedback.textContent = `Item Deleted`;

      setTimeout(() => {
        feedback.classList.remove("showItem", "alert-success");
      }, 1000);
    });
  }
};

console.log(list);

const erase = () => {
  list.innerHTML = "";
  input.value = "";
};

btn.addEventListener("click", addItem);

btnErase.addEventListener("click", erase);
