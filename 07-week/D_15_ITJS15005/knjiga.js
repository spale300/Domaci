class Knjiga {
  #naslov;
  #autor;
  #godinaIzdanja;
  #brojStrana;
  #cena;

  constructor(naslov, autor, godinaIzdanja, brojStrana, cena) {
    this.naslov = naslov;
    this.autor = autor;
    this.godinaIzdanja = godinaIzdanja;
    this.brojStrana = brojStrana;
    this.cena = cena;
  }

  get naslov() {
    return this.#naslov;
  }

  set naslov(n) {
    if (n.length > 0) {
      this.#naslov = n;
    } else {
      this.#naslov = "Greska! Dodaj naslov filma!";
    }
  }

  get autor() {
    return this.#autor;
  }

  set autor(a) {
    if (a.length > 0) {
      this.#autor = a;
    } else {
      this.#autor = "Greska! Dodaj autora!";
    }
  }

  get godinaIzdanja() {
    return this.#godinaIzdanja;
  }

  set godinaIzdanja(g) {
    if (g > 1700) {
      this.#godinaIzdanja = g;
    } else {
      this.#godinaIzdanja = 1700;
    }
  }

  get brojStrana() {
    return this.#brojStrana;
  }

  set brojStrana(b) {
    if (b > 0) {
      this.#brojStrana = b;
    } else {
      this.#brojStrana = "Greska! Knjiga ne moze da nema strana!";
    }
  }

  get cena() {
    return this.#cena;
  }

  set cena(c) {
    if (c > 0 || c != "") {
      this.#cena = c;
    } else {
      this.#cena = "Ova knjiga je besplatna!";
    }
  }

  stampaj() {
    console.log(this);
  }

  obimna() {
    if (this.brojStrana > 600) {
      return true;
    } else {
      return false;
    }
  }

  skupa() {
    if (this.cena > 8000) {
      return true;
    } else {
      return false;
    }
  }

  dugackoIme() {
    if (this.autor.length > 18) {
      return true;
    } else {
      return false;
    }
  }
}

export { Knjiga };
