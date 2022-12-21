//Ovo je moj pokusaj cb funkcije.

let ispis = (p) => {
  document.write(p);
};

//01. Dat je niz stavki za kupovinu (članovi niza su stringovi). Prolaskom kroz niz napraviti neuređenu listu i ispisati je u html dokument.

let spisak = ["Kafa", "Mleko", "Hleb", "Limun"];

let str = `<ul>`;

for (i = 0; i < spisak.length; i++) {
  str += `<li>${spisak[i]}</li>`;
}

str += `</ul>`;

document.write(str);

//02. Dat je niz imena košarkaškog tima. Prolaskom kroz niz formirati tabelu gde svaki od redova ima ćeliju u kojoj se nalazo naziv tima. Tabelu ispisati u html dokument.

let imeTima = ["Partizan", "Crvena zvezda", "Mladost"];

let tabela = (niz, cb) => {
  let str = `<table >`;
  for (i = 0; i < niz.length; i++) {
    str += `<tr><td>${niz[i]}</td></tr>`;
  }
  str += `</table>`;
  cb(str);
};

tabela(imeTima, ispis);

//03. Dat je niz stringova čiji su članovi putanje do slika. Prikazati sve slike u html dokumentu, pri čemu su putanje da slika one putanje koje su navedene u nizu.

let slike = ["slika1.jpg", "slika2.jpg", "slika3.jpg", "slika4.png"];

let img = (niz, cb) => {
  let str = ``;
  for (i = 0; i < niz.length; i++) {
    str += `<img src="${niz[i]}">`;
  }
  cb(str);
};

img(slike, ispis);
