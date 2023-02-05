const prompt = require("prompt-sync")({ sigint: true });

const value = prompt("Enter the number: ");

if (value < 0) {
  console.log("Tidak bisa input bilangan negatif");
} else if (value % 2 == 1) {
  console.log("Tidak bisa input bilangan ganjil");
} else {
  console.log("square of" + " " + value + "=" + Math.sqrt(value));
}
