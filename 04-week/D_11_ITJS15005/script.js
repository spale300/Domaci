//01. Napisati funkciju koja vraća aritmetičku sredinu brojeva koji nisu deljivi sa 3 u intervalu od n do m. Brojeve n i m proslediti kao parametre funkciji.

function aritmeticka1(n, m) {
  let suma = 0;
  let brojBroja = 0;
  for (i = n; i <= m; i++) {
    if (i % 3 != 0) {
      brojBroja++;
      suma += i;
    }
  }

  return suma / brojBroja;
}

console.log(aritmeticka1(9, 15));

// Arrow

let aritmeticka2 = (n, m) => {
  let suma = 0;
  let brojBroja = 0;
  for (i = n; i <= m; i++) {
    if (i % 3 != 0) {
      brojBroja++;
      suma += i;
    }
  }
  return suma / brojBroja;
};

console.log(aritmeticka2(9, 15));

//02. Napisati funkciju kojoj se prosleđuje ceo broj i string, a ona ispisuje taj string u paragrafu koji ima prosleđenu veličinu fonta.

function text(broj, str) {
  document.write(`<p style="font-size:${broj}px;">${str}</p>`);
}

text(33, "Neki tekst");

// Arrow

let text2 = (broj, str) => {
  document.write(`<p style="font-size:${broj}px;">${str}</p>`);
};

text(48, "Arrow text");
