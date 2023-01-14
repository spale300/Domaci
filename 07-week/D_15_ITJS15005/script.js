import { Knjiga } from "./knjiga.js";

let k1 = new Knjiga(
  "40 Algorithms Every Programmer Should Know",
  " Imran Ahmad",
  2020,
  382,
  1800
);

let k2 = new Knjiga(
  "Eloquent JavaScript, 3rd Edition: A Modern Introduction to Programming",
  "Marijn Haverbeke",
  2018,
  3333,
  40000
);

let k3 = new Knjiga(
  "Modern JavaScript for the Impatient ",
  "Cay Horstmann321312321312",
  2020,
  900,
  10000
);

let knjige = [k1, k2, k3];

knjige.forEach((el) => {
  if (el.dugackoIme()) {
    console.log(`Ime autora sa dugackim imenom: ${el.autor}`);
  }

  if (el.obimna() && el.skupa()) {
    el.stampaj();
  }
});

let ukupnaCena = (niz) => {
  let suma = 0;
  niz.forEach((el) => {
    suma += el.cena;
  });
  return suma;
};

console.log(`Ukupna cena: ${ukupnaCena(knjige)}`);

let prosecnaCena = (niz) => {
  return ukupnaCena(niz) / niz.length;
};

console.log(`Prosecna cena: ${prosecnaCena(knjige)}`);

let ukupnoStranica = (niz) => {
  let brojStranica = 0;
  niz.forEach((el) => {
    brojStranica += el.brojStrana;
  });
  return brojStranica;
};

let prosecnaStranica = (niz) => {
  return ukupnaCena(niz) / ukupnoStranica(niz);
};

console.log(`Prosecna cena jedne stranice knjige: ${prosecnaStranica(knjige)}`);
