let a = Number(prompt("Unesite prvi broj"));
let b = Number(prompt("Unesite drugi broj"));
let c = Number(prompt("Unesite treci broj"));
//h = Math.max(a,b,c);
//console.log("Najveci broj je " + h);
if (a > b && a > c) {
  console.log("Broj " + a + " je najveci");
}
else if (b > a && b > c) {
  console.log("Broj " + b + " je najveci");
}
else if (c > a && c > b) {
  console.log("Broj " + c + " je najveci");
}
else {
  console.log("Brojevi su jednaki.");
};
