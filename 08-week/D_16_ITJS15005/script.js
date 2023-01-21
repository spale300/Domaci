let ul = document.querySelector("ul");

let input = document.querySelector("input[type='text']");

let arrTasks = [];

let showElemets = (arr) => {
  arr.forEach((el) => {
    let li = document.createElement("li");
    li.textContent = el;
    ul.appendChild(li);
  });
};

window.addEventListener("load", (e) => {
  let tasks = localStorage.getItem("tasks");

  if (tasks != null) {
    arrTasks = JSON.parse(tasks);
    showElemets(arrTasks);
  } else {
    localStorage.setItem("tasks", []);
  }
});

input.addEventListener("keyup", (e) => {
  if (e.keyCode == 13) {
    if (input.value != "") {
      let item = document.createElement("li");

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
  }
});

ul.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    let index = Array.prototype.indexOf.call(
      e.target.parentNode.children,
      e.target
    );

    arrTasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(arrTasks));
    e.target.remove();
  }
});
