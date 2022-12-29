let knjiga1 = {
  naziv: "Knjiga1",
  autor: "Autora 1",
  slika: "slika1.JPG",
  procitana: true,
};
let knjiga2 = {
  naziv: "Knjiga2",
  autor: "Autora 2",
  slika: "slika2.JPG",
  procitana: false,
};

let knjiga3 = {
  naziv: "Knjiga3",
  autor: "Autora 3",
  slika: "slika3.JPG",
  procitana: false,
};
let knjiga4 = {
  naziv: "Knjiga3",
  autor: "Autora 3",
  slika: "slika3.JPG",
  procitana: true,
};
let knjige = [knjiga1, knjiga2, knjiga3, knjiga4];

let tabela = (niz) => {
  // tabela
  let t = document.createElement("table");
  // t.style.border = " 2px solid black";

  niz.forEach((el, i) => {
    // red
    let tred = document.createElement("tr");

    if (i % 2 == 0) {
      tred.style.backgroundColor = "yellow";
    } else {
      tred.style.backgroundColor = "orange";
    }

    //celija za sliku
    let scelija = document.createElement("td");
    let slika = document.createElement("img");
    tred.appendChild(scelija);
    scelija.appendChild(slika);
    slika.setAttribute("src", el.slika);
    scelija.style.border = "1px solid black";

    //celija za tekst
    let pcelija = document.createElement("td");
    tred.appendChild(pcelija);
    pcelija.innerHTML = `${el.naziv} od ${el.autor}`;
    pcelija.style.border = "1px solid black";

    if (el.procitana) {
      pcelija.style.color = "blue";
    } else {
      pcelija.style.color = "grey";
    }

    t.appendChild(tred);
  });
  return t;
};

document.body.appendChild(tabela(knjige));
