let pitanje1 = {
  tekst: "U Matrixu, koje je boje pilula koju Neo uzima?",
  odgovori: ["Crvene", "Plave", "Zelene", "Zute"],
  indexKorektrongOdgovora: 0,
};

let pitanje2 = {
  tekst: "U kojoj zemlji je smestena radnja serije Dark'?",
  odgovori: ["Francuske", "Nemacke", "Srbije", "Amerike"],
  indexKorektrongOdgovora: 1,
};

let pitanje3 = {
  tekst: "Koja reka tece kroz Pariz?",
  odgovori: ["Hudson", "Rajna", "Seine", "Mississippi"],
  indexKorektrongOdgovora: 2,
};

let pitanje4 = {
  tekst: "Koji je autor napisao knjige o igri prijestolja?",
  odgovori: ["JRR Tolkien", "JK Rowling", "CS Lewis", "George RR Martin"],
  indexKorektrongOdgovora: 3,
};

let pitanje5 = {
  tekst: "Koje je najskuplje meso na svetu?",
  odgovori: ["Piletina", "Wagyu", "Sushi", "Svinjetina"],
  indexKorektrongOdgovora: 1,
};

let pitanje6 = {
  tekst: "Olimpijske igre odrzavaju se svakih nekoliko godina?",
  odgovori: [
    "Svake 3 godine",
    "Svake 4 godine",
    "Svake godine",
    "Svake 2 godine",
  ],
  indexKorektrongOdgovora: 1,
};

// ovo je moza glupo pitanje :D ali u procesu izradi ovog projekta mi dosla ova fora i zato sam je ostavio :D

let pitanje7 = {
  tekst: "Kako se zove zauzeta Ana?",
  odgovori: ["Odana", "Ana", "Unavailable", "Busy"],
  indexKorektrongOdgovora: 2,
};

let pitanje8 = {
  tekst: "Koji fudbalski klub ima nadimak „zuta podmornica”?",
  odgovori: ["Real Madrid", "Barcelona", "Villarreal", "Milan"],
  indexKorektrongOdgovora: 2,
};
let pitanje9 = {
  tekst: "Koliko je do sada napravljeno filmova Sam u kuci (Home Alone)?",
  odgovori: [6, 3, 5, 4],
  indexKorektrongOdgovora: 2,
};
let pitanje10 = {
  tekst: "Najbolji programski jezik je? :)",
  odgovori: ["C++", "Java", "JavaScript", "C#"],
  indexKorektrongOdgovora: 2,
};

let pitanja = [
  pitanje1,
  pitanje2,
  pitanje3,
  pitanje4,
  pitanje5,
  pitanje6,
  pitanje7,
  pitanje8,
  pitanje9,
  pitanje10,
];

function shuffle(niz) {
  for (let i = niz.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [niz[i], niz[j]] = [niz[j], niz[i]];
  }
  return niz;
}

let shufflePitanja = shuffle(pitanja);
let izabranaPitanja = shufflePitanja.slice(0, 5);

let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");
let p3 = document.getElementById("p3");
let p4 = document.getElementById("p4");
let p5 = document.getElementById("p5");

p1.innerText = izabranaPitanja[0].tekst;
p2.innerText = izabranaPitanja[1].tekst;
p3.innerText = izabranaPitanja[2].tekst;
p4.innerText = izabranaPitanja[3].tekst;
p5.innerText = izabranaPitanja[4].tekst;

let subBtn = document.getElementById("subBtn");
let resetBtn = document.getElementById("resetBtn");

let odgovor1 = document.querySelectorAll(".pitanje1");
let odgovor2 = document.querySelectorAll(".pitanje2");
let odgovor3 = document.querySelectorAll(".pitanje3");
let odgovor4 = document.querySelectorAll(".pitanje4");
let odgovor5 = document.querySelectorAll(".pitanje5");

odgovor1.forEach((el, i) => {
  el.innerText = izabranaPitanja[0].odgovori[i];
});
odgovor2.forEach((el, i) => {
  el.innerText = izabranaPitanja[1].odgovori[i];
});
odgovor3.forEach((el, i) => {
  el.innerText = izabranaPitanja[2].odgovori[i];
});
odgovor4.forEach((el, i) => {
  el.innerText = izabranaPitanja[3].odgovori[i];
});
odgovor5.forEach((el, i) => {
  el.innerText = izabranaPitanja[4].odgovori[i];
});

let rezultat1 = document.getElementById("rezultat1");
let rezultat2 = document.getElementById("rezultat2");
let rezultat3 = document.getElementById("rezultat3");
let rezultat4 = document.getElementById("rezultat4");
let rezultat5 = document.getElementById("rezultat5");

let tacno1 = function () {
  let odabranOdgovor1 = document.querySelector(`input[name='p1']:checked`);

  let valueCheck = odabranOdgovor1.value;

  if (izabranaPitanja[0].indexKorektrongOdgovora == valueCheck) {
    rezultat1.innerText = "Odgovor je tacan!";
    rezultat1.style.color = "Green";
  } else {
    rezultat1.innerText = "Odgovor je netacan!";
    rezultat1.style.color = "Red";
  }
};
let tacno2 = function () {
  let odabranOdgovor1 = document.querySelector(`input[name='p2']:checked`);

  let valueCheck = odabranOdgovor1.value;

  if (izabranaPitanja[1].indexKorektrongOdgovora == valueCheck) {
    rezultat2.innerText = "Odgovor je tacan!";
    rezultat2.style.color = "Green";
  } else {
    rezultat2.innerText = "Odgovor je netacan!";
    rezultat2.style.color = "Red";
  }
};
let tacno3 = function () {
  let odabranOdgovor1 = document.querySelector(`input[name='p3']:checked`);

  let valueCheck = odabranOdgovor1.value;

  if (izabranaPitanja[2].indexKorektrongOdgovora == valueCheck) {
    rezultat3.innerText = "Odgovor je tacan!";
    rezultat3.style.color = "Green";
  } else {
    rezultat3.innerText = "Odgovor je netacan!";
    rezultat3.style.color = "Red";
  }
};
let tacno4 = function () {
  let odabranOdgovor1 = document.querySelector(`input[name='p4']:checked`);

  let valueCheck = odabranOdgovor1.value;

  if (izabranaPitanja[3].indexKorektrongOdgovora == valueCheck) {
    rezultat4.innerText = "Odgovor je tacan!";
    rezultat4.style.color = "Green";
  } else {
    rezultat4.innerText = "Odgovor je netacan!";
    rezultat4.style.color = "Red";
  }
};
let tacno5 = function () {
  let odabranOdgovor1 = document.querySelector(`input[name='p5']:checked`);

  let valueCheck = odabranOdgovor1.value;

  if (izabranaPitanja[4].indexKorektrongOdgovora == valueCheck) {
    rezultat5.innerText = "Odgovor je tacan!";
    rezultat5.style.color = "Green";
  } else {
    rezultat5.innerText = "Odgovor je netacan!";
    rezultat5.style.color = "Red";
  }
};

subBtn.addEventListener("click", () => {
  tacno1();
  tacno2();
  tacno3();
  tacno4();
  tacno5();
  subBtn.disabled = true;
});

resetBtn.addEventListener("click", () => {
  window.location.reload();
});
