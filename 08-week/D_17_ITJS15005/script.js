let getSport = (resolve, reject) => {
  let request = new XMLHttpRequest();

  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      let data = JSON.parse(request.responseText);

      resolve(data);
    } else if (request.readyState === 4) {
      reject("GRESKA!");
    }
  });

  request.open("GET", "sportisti.json");
  request.send();
};

let najmanjeTransfera = (niz) => {
  let najTransferi = niz[0];

  niz.forEach((el) => {
    if (el.timovi.length < najTransferi.timovi.length) {
      najTransferi = el;
    }
  });
  console.log(najTransferi.imePrezime);
};

let ispis = (p) => {
  console.log(p);
};

getSport(najmanjeTransfera, ispis);

let lakers = (niz) => {
  let arr = [];
  niz.forEach((el) => {
    if (el.timovi.includes("Lakers")) {
      arr.push(el.imePrezime);
    }
  });
  console.log(arr);
};

getSport(lakers, ispis);
