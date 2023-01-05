let pitanje1 = {
  tekst: "Koliko je 2+2",
  odgovori: [4, 3, 5, 8],
  indexKorektrongOdgovora: 0,
};

let pitanje2 = {
  tekst: "Koliko je 1+2",
  odgovori: [4, 3, 5, 8],
  indexKorektrongOdgovora: 1,
};

let pitanje3 = {
  tekst: "Koliko je 2+3",
  odgovori: [4, 3, 5, 8],
  indexKorektrongOdgovora: 2,
};

let pitanje4 = {
  tekst: "Koliko je 6+2",
  odgovori: [4, 3, 5, 8],
  indexKorektrongOdgovora: 3,
};

let pitanje5 = {
  tekst: "Koliko je 8-5",
  odgovori: [4, 3, 5, 8],
  indexKorektrongOdgovora: 1,
};

let pitanje6 = {
  tekst: "Koliko je 2+2",
  odgovori: [4, 3, 5, 8],
  indexKorektrongOdgovora: 1,
};

let pitanje7 = {
  tekst: "Koliko je 2+2",
  odgovori: [4, 3, 5, 8],
  indexKorektrongOdgovora: 1,
};

let pitanje8 = {
  tekst: "Koliko je 2+2",
  odgovori: [4, 3, 5, 8],
  indexKorektrongOdgovora: 1,
};
let pitanje9 = {
  tekst: "Koliko je 2+2",
  odgovori: [4, 3, 5, 8],
  indexKorektrongOdgovora: 1,
};
let pitanje10 = {
  tekst: "Koliko je 2+2",
  odgovori: [4, 3, 5, 8],
  indexKorektrongOdgovora: 1,
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

console.log(pitanja);

function shuffle(niz) {
  for (let i = niz.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [niz[i], niz[j]] = [niz[j], niz[i]];
  }
  return niz;
}

let shufflePitanja = shuffle(pitanja);
let izabranaPitanja = shufflePitanja.slice(0, 5);

console.log(izabranaPitanja);

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

let check1 = document.querySelector("input[name='p1']:checked");
console.log(check1);

let btn = document.querySelectorAll("button");
console.log(btn);

btn.forEach((el, i) => {
  el.addEventListener("click", () => {
    if (i == 0) {
      console.log("1");
    }
    if (i == 1) {
      shuffle(pitanja).slice(0, 5);
      p1.innerText = izabranaPitanja[0].tekst;
      p2.innerText = izabranaPitanja[1].tekst;
      p3.innerText = izabranaPitanja[2].tekst;
      p4.innerText = izabranaPitanja[3].tekst;
      p5.innerText = izabranaPitanja[4].tekst;
    }
  });
});
