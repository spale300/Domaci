let dan = {
  kisa: true,
  oblacno: true,
  suncano: false,
  temperatura: [2, 24, 3, 7, 32],
  //01.
  tropska: function () {
    let temp = true;
    this.temperatura.forEach((el) => {
      if (el < 24) {
        temp = false;
      }
    });
    return temp;
  },
  //02.
  nepovoljan: function () {
    for (let i = 0; i < this.temperatura.length - 1; i++) {
      if (Math.abs(this.temperatura[i] - this.temperatura[i + 1] > 8)) {
        return true;
      }
    }
    return false;
  },

  //03.
  neuobicajen: function () {
    let dan = false;

    if (this.kisa == true && this.oblacno == true && this.suncano == false) {
      return true;
    }

    this.temperatura.forEach((el) => {
      if ((el < -5 && this.kisa == true) || (el > 25 && this.oblacno == true)) {
        dan = true;
      }
    });
    return dan;
  },
};

console.log(dan.tropska());
console.log(dan.nepovoljan());
console.log(dan.neuobicajen());
