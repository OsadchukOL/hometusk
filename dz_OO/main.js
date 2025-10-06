const viktorina = [
  { vopros: "Zhelezo tyazhelee alyuminiya?", pravilno: true, ochki: 25 },
  { vopros: "V sutkah 25 chasov?", pravilno: false, ochki: 25 },
  { vopros: "Pluton yavlyaetsya karlikovoy planetoy?", pravilno: true, ochki: 25 },
  { vopros: "Fotosintez proishodit v mitohondriyah?", pravilno: false, ochki: 25 }
];

let tekushiy = 0;
let summa = 0;

const voprosElement = document.getElementById("voprosText");
const rezultatBox = document.getElementById("rezultatBox");
const ochkiElement = document.getElementById("ochkiText");

function pokazatVopros() {
  if (tekushiy < viktorina.length) {
    voprosElement.textContent = viktorina[tekushiy].vopros;
  } else {
    pokazatRezulTat();
  }
}

function proveritOtvet(vybor) {
  const item = viktorina[tekushiy];
  if (vybor === item.pravilno) {
    summa += item.ochki;
  }
  tekushiy++;
  pokazatVopros();
}

function pokazatRezulTat() {
  rezultatBox.style.display = "block";
  ochkiElement.textContent = `Tvoy rezultat: ${summa} iz 100`;
}

pokazatVopros();
