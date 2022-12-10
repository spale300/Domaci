// 01.Da bi gosti kafića mogli na distanci da sede tokom pandemije, ministarstvo je uvelo meru da za svakog čoveka mora biti obezbeđeno 3m2  površine lokala. Za posmatrani kafić su dati podaci da ima v m2 i da je u njemu trenutno n gostiju. Brojeve v i n određujete sami. Vaš zadatak je da na ekranu ispišete DA zelenom bojom ukoliko se kafić prema unetim podacima pridržava propisane mere ili NE crvenom bojom ukoliko se kafić ne pridržava propisane mere. Ukoliko je ispis NE, crvenom bojom ispisati i koliko ljudi je potrebno da napusti lokal da bi mera bila zadovoljena.

console.log(`-----Zadatak 01-----`);

let c = 3;
let v = 33;
let n = 15;
let dozvoljenBroj = Math.floor(v / c);

console.log(dozvoljenBroj);

if (dozvoljenBroj >= n) {
  document.write("<p style='color:green;'>DA</p>");
} else {
  document.write(
    `<p style='color:red;'>NE<br>Nas lokal je pun, molimo ${
      n - dozvoljenBroj
    } gosta koja nemaju sto da napuste lokal.</p>`
  );
}

// 02. Odredi zbir brojeva od n do m koji su deljivi sa 3 a nisu sa 7.Rezultat ispisati u konzoli.

console.log(`-----Zadatak 02-----`);

n = 12;
let i = n;
let m = 50;
let suma = 0;

while (i <= m) {
  if (i % 3 == 0 && i % 7 != 0) {
    suma += i;
  }

  i++;
}

console.log(suma);

// 03. Za uneti ceo broj odrediti koliko ima delioca koji su deljivi brojem 3 i neparni su.

console.log(`-----Zadatak 03-----`);

i = 1;
let broj = 33;
let brojDelioca = 0;

while (i <= broj) {
  if (broj % i == 0 && i % 3 == 0 && i % 2 != 0) {
    brojDelioca++;
  }
  i++;
}

console.log(
  `Broj ${broj} ima ${brojDelioca} delioca koji su devljiv brojem 3 i neparani.`
);
