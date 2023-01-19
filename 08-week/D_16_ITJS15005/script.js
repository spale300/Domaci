let li = document.querySelectorAll("li");
let ul = document.querySelector("ul");

let input = document.querySelector("input[type='text']");

let arrTasks = [];

addEventListener("load", () => {
  let tasks = localStorage.getItem("tasks");
  arrTasks = JSON.parse(tasks);

  showElemets(arrTasks);
});

let showElemets = (arr) => {
  arr.forEach((el) => {
    let li = document.createElement("li");
    li.textContent = el;
    ul.appendChild(li);
  });
};

input.addEventListener("keyup", (e) => {
  if (e.keyCode == 13) {
    if (input.value != "") {
      item = document.createElement("li");

      let radioAdd = document.querySelector("input[name='tdl']:checked");

      if (radioAdd.value == "b") {
        ul.append(item);
        arrTasks.push((item.textContent = input.value));
      } else {
        ul.prepend(item);
        arrTasks.splice(0, 0, (item.textContent = input.value));
      }

      localStorage.setItem("tasks", JSON.stringify(arrTasks));

      input.value = "";
    }
    console.log(arrTasks);
  }
});

ul.addEventListener("click", (e) => {
  console.log(e);

  if (e.target.tagName == "LI") {
    arrTasks.pop(e.target.remove());
    localStorage.setItem("tasks", JSON.stringify(arrTasks));
  }
});
