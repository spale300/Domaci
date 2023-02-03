import { Chatroom } from "./chat.js";
import { ChatUI } from "./ui.js";

// DOM
let ul = document.querySelector("ul");
let btnSend = document.getElementById("btnSend");
let inputSend = document.getElementById("inputMessage");
let btnUpdate = document.getElementById("btnUpdate");
let inputUpdate = document.getElementById("inputUsername");
let btns = document.querySelector("nav");

let localUsername = localStorage.getItem("username");
let localRoom = localStorage.getItem("room");
let chatroom = new Chatroom(localRoom, localUsername);

if (localRoom != null) {
  chatroom.room = localRoom;
} else {
  chatroom.room = "#general";
}

if (localUsername != null) {
  chatroom.username = localUsername;
} else {
  chatroom.username = "Anonymus";
}

btns.addEventListener("click", (e) => {
  e.preventDefault();

  if (e.target.tagName === "BUTTON") {
    let actBtn = document.querySelector(".active");
    if (actBtn) {
      actBtn.classList.remove("active");
    }
    e.target.classList.add("active");

    let room = e.target.textContent;
    chatroom.updateRoom(room);

    localStorage.setItem("room", room);
    chatUI.clear();

    chatroom.getChats((data) => {
      chatUI.templateLI(data, chatroom.username);
    });
  }
});

let chatUI = new ChatUI(ul);

chatroom.getChats((data) => {
  chatUI.templateLI(data, chatroom.username);
});

btnSend.addEventListener("click", (e) => {
  e.preventDefault();

  if (inputSend.value != "") {
    chatroom
      .addChat(inputSend.value)
      .then(() => {
        inputSend.value = "";
      })
      .catch((err) => {
        console.log(err);
      });
  }
});

let notification = (msg) => {
  let spanUser = document.getElementById("update");
  spanUser.textContent = msg;
  setTimeout(() => {
    spanUser.textContent = "";
  }, 3000);
};
notification(chatroom.username);

btnUpdate.addEventListener("click", (e) => {
  e.preventDefault();

  if (inputUpdate.value != "") {
    chatroom.username = inputUpdate.value;
  }

  localStorage.setItem("username", chatroom.username);
  inputUpdate.value = "";

  notification(chatroom.username);
  window.location.reload();
});
