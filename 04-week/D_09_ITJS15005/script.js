//01. Dodati na stranicu n puta jednu siku. Slikama koje su na parnim pozicijama postavljati crveni okvir, slikama koje su na neparnim pozicijama postavljati plavi okvir.

let n = 11;

for (i = 1; i <= n; i++) {
  if (i % 2 == 0) {
    document.write(
      `<img src='slika.png' style="border:5px solid red; margin: 20px">`
    );
  } else {
    document.write(
      `<img src='slika.png' style="border:5px solid blue;margin: 20px">`
    );
  }
}

//02.For petljom odrediti da li je dati prirodan broj n prost.

n = 4;
let brojDelioca = 0;

for (i = 1; i <= n; i++) {
  if (n % i == 0) {
    brojDelioca++;
  }
}

if (brojDelioca > 2) {
  console.log(`Broj ${n} je slozen broj.`);
} else {
  console.log(`Broj ${n} je prost broj.`);
}
