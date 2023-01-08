const ruzeCena = 150;
const ljiljanCena = 120;
const gerberCena = 70;
const bombonjeraCena = 500;
const cokoladaCena = 500;
const sampanjacCena = 500;

let form = document.getElementById("form");
let ruzeInput = document.getElementById("ruze");
let ljiljanInput = document.getElementById("ljiljani");
let gerberInput = document.getElementById("gerberi");
let bomCheckBox = document.getElementById("bom");
let cokCheckBox = document.getElementById("cok");
let samCheckBox = document.getElementById("samp");
let kesRadio = document.getElementById("kes");
let karticaRadio = document.getElementById("kartica");
let calBtn = document.getElementById("calBtn");
let resetBtn = document.getElementById("resetBtn");
let slike = document.getElementById("slike");
let cena = document.getElementById("cena");
let cenaPopust = document.getElementById("cenaPopust");

console.log(ruzeInput);
console.log(ljiljanInput);
console.log(gerberInput);

let calculatePrice = function () {
  let suma = 0;
  if (ruzeInput.value != "") {
    suma += ruzeInput.value * ruzeCena;
  }
  if (ljiljanInput.value != "") {
    suma += ljiljanInput.value * ljiljanCena;
  }
  if (gerberInput.value != "") {
    suma += gerberInput.value * gerberCena;
  }
  if (bomCheckBox.checked == true) {
    suma += bombonjeraCena;
  }
  if (cokCheckBox.checked == true) {
    suma += cokoladaCena;
  }
  if (samCheckBox.checked == true) {
    suma += sampanjacCena;
  }

  return suma;
};

let drawFlowers = function (name, count) {
  for (let i = 0; i < count; i++) {
    let src = `${name}.JPG`;
    let img = new Image();
    img.src = src;

    slike.append(img);
  }
};

calBtn.addEventListener("click", () => {
  let calSuma = calculatePrice();

  drawFlowers(ruzeInput.name, ruzeInput.value);
  drawFlowers(ljiljanInput.name, ljiljanInput.value);
  drawFlowers(gerberInput.name, gerberInput.value);

  if (bomCheckBox.checked == true) {
    let bomDodatak = document.getElementById("bombo");
    bomDodatak.innerText = `+ ${bomCheckBox.value}`;
  }
  if (cokCheckBox.checked == true) {
    let cokDodatak = document.getElementById("cokol");
    cokDodatak.innerText = `+ ${cokCheckBox.value} `;
  }
  if (samCheckBox.checked == true) {
    let samDodatak = document.getElementById("sampanj");
    samDodatak.innerText = `+ ${samCheckBox.value}`;
  }

  if (karticaRadio.checked == true) {
    cena.innerText = calSuma;
    cenaPopust.innerHTML = calSuma * 0.9;
  } else {
    cena.innerText = calSuma;
    cenaPopust.innerHTML = calSuma;
  }
  calBtn.disabled = true;
});

resetBtn.addEventListener("click", () => {
  window.location.reload();
});
