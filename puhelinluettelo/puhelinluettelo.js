const prompt = require("prompt");

let henkilot = [
  { nimi: "Aku Ankka", puh: 131231231 },
  { nimi: "Hessu Hopo", puh: 1231231231231 },
];

let uusihenkilo = { nimi: "Iines Ankka", puh: 55 };
henkilot.push(uusihenkilo);

prompt.start();
prompt.get(["nimi", "puhelinnumero"], function (err, result) {
  console.log("nimi: " + result.nimi);
  console.log("Puh: " + result.puhelinnumero);

  let henkilo = { nimi: result.nimi, puh: result.puhelinnumero };
  henkilot.push(henkilo);

  console.log("Henkilöt");
  console.log(henkilot);

  console.log("hae nimellä");
  prompt.get(["nimi"], function (err, result) {
    console.log("nimi: " + result.nimi);

    let haettava = henkilot.find((henkilo, index) => {
      if (henkilo.nimi == result.nimi) {
        return henkilo;
      }
    });

    console.log("Haettu henkilö");
    console.log(haettava);
  });
});
