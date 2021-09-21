function onkopalindromi(str) {
  var len = str.length;
  var mid = Math.floor(len / 2);

  var input = require("readline-sync");

  for (var i = 0; i < mid; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }

  return true;
}

function josPalindromi(str) {
  var vast = onkopalindromi(String);
  if ((vast = true)) console.log(input, "On se palindromi");
}
if ((vast = false)) {
  console.log(input, "Ei oo palindromi");
}
