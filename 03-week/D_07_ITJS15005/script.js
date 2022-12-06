// 01. Pera i Mika su kupili dva ista džempera. Pera je dao p dinara, Mika je dao m dinara i dobili su kusur od k dinara. Brojeve p, m i k odredite proizvoljno. Na osnosvu unetih vrednosti, u konzoli ispisati koliki kusur treba da dobije Pera, a koliki kusur treba da dobije Mika, da bi jednako platili svako svoj džemper.
console.log("------Zadatak 01------");

let p = 1653;
let m = 1844;
let k = 480;

// Cena Dzempera
let dz = (p + m - k) / 2;
console.log(`Cena Dzempera je ${dz} dinara.`);

//
let kp = p - dz;
console.log(`Pera ima kusur od ${kp} dinara.`);
let km = m - dz;
console.log(`Mika ima kusur od ${km} dinara.`);

// 02. Knjiga ima n poglavlja (broj n unosite sami).
// Čitalac je prvog dana pročitao a poglavlja, a drugog dana dva poglavlja više nego prvog dana.
// Na osnovu dodeljenih vrednosti, u konzoli ispisati koliko poglavlja je preostalo čitaocu da pročita do kraja knjige. Pretpostaviti da su vrednosti promenljivih n i a ispravno unete.
// Ako je čitaocu ostalo da pročita manje od polovine ukupnog broja poglavlja, u konzoli ispisati poruku “Ostalo je da se procita još manje od polovine knjige”.
console.log("------Zadatak 02------");

let poglavlje = 32;
let predjeno = 9;
let drugiDan = predjeno * 2 + 2;
let preostalo = poglavlje - drugiDan;

if (poglavlje / 2 > preostalo) {
  console.log(`Ostalo je da se procita jos manje od polovine knjige.`);
} else {
  console.log(`Ostalo je jos ${preostalo} poglavlja do kraja knjige.`);
}

// 03. Neka je u dnevni kalorijski unos neke osobe zadat u kilo džulima (kJ). Izvršiti konverziju te vrednosti u kalorije (kcal), ako se konverzija vrši po formuli: 1 kcal = 4.1868 kJ. Ukoliko je dobijena vrednost manja od 2000 kcal, ispisati u konzoli poruku “​potrebno je povećati dnevni unos”. U suprotnom, ispisati u konzoli poruku  “​nije potrebno povećati dnevni unos”.

console.log("------Zadatak 03------");

let kj = 600;
let kjToCal = kj / 4.1868;

if (kjToCal < 200) {
  console.log(`​Potrebno je povećati dnevni unos.`);
} else {
  console.log(`​Nije potrebno povećati dnevni unos.`);
}
