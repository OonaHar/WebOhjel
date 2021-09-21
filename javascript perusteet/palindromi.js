function palindrome(sana) {
  var input = require("readline-sync");
  var sana = input.question("Anna sana");
  var len = sana.length;
  for (var i = 0; i < Math.floor(len / 2); i++) {
    if (sana[i] !== sana[len - 1 - i]) {
      console.log(sana, "ei oo palindromi");
      return false;
    }
  }
  return true;
}
