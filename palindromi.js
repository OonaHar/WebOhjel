function onkoPalindromi(string) {
  const pituus = string.length;

  for (let i = 0; i < pituus / 2; i++) {
    if (string[i] !== string[pituus - 1 - i]) {
      console.log("on palindromi");
      return true;
    } else {
      console.log("ei oo palindromi");
      return false;
    }
  }
}

var input = require("readline-sync");
var sana = input.question("Anna sana:");
const value = onkoPalindromi(sana);
