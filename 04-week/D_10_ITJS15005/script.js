let polje = ``;
let red = 0;

for (i = 0; i < 64; i++) {
  if (i % 8 == 0) {
    polje += `<br>`;
    red++;
  }
  if ((red + i) % 2 == 0) {
    polje += `<span class="crno" style="border: 1px solid black;">${
      i + 1
    }</span>`;
  } else {
    polje += `<span  style="border: 1px solid black;">${i + 1}</span>`;
  }
}

document.write(polje);
