"use strict";

class Henkilo {
  constructor(Etunimi, Sukunimi, Knimi, Svuosi) {
    this.etuNimi = Etunimi;
    this.sukuNimi = Sukunimi;
    this.kNimi = Knimi;
    this.sVuosi = Svuosi;
    console.log("Henkilo luotu: ", this);
  }

  //etuNimi
  get Etunimi() {
    return this.etuNimi;
  }
  set Etunimi(value) {
    this.etuNimi = value;
  }

  //sukuNimi
  get Sukunimi() {
    return this.sukuNimi;
  }
  set Sukunimi(value) {
    this.sukuNimi = value;
  }

  //kNimi
  get Knimi() {
    return this.kNimi;
  }
  set Knimi(value) {
    this.kNimi = value;
  }

  //sVuosi
  get Svuosi() {
    return this.sVuosi;
  }
  set Svuosi(value) {
    this.sVuosi = value;
  }
}

var henkilo1 = new Henkilo("Seppo", "Tepponen", "Sebbo", "2009");

class Urheilija extends Henkilo {
  constructor(ukuva, upaino, ulaji, usaavutukset) {
    super(henkilo1.Etunimi, henkilo1.Sukunimi, henkilo1.Knimi, henkilo1.Svuosi);

    this.uKuva = ukuva;
    this.uPaino = upaino;
    this.uLaji = ulaji;
    this.uSaavutukset = usaavutukset;
    console.log(
      "Urheilijan infot ",
      this.uKuva,
      " ",
      this.uPaino,
      " ",
      this.uLaji,
      " ",
      this.uSaavutukset
    );
  }

  // uKuva
  get ukuva() {
    return this.uKuva;
  }
  set ukuva(value) {
    this.uKuva = value;
  }

  // uPaino
  get upaino() {
    return this.uPaino;
  }
  set upaino(value) {
    this.uPaino = value;
  }

  // uLaji
  get ulaji() {
    return this.uLaji;
  }
  set ulaji(value) {
    this.uLaji = value;
  }

  // uSaavutukset
  get usaavutukset() {
    return this.uSaavutukset;
  }
  set usaavutukset(value) {
    this.uSaavutukset = value;
  }
}

var urheilija = new Urheilija(
  "https://c.files.bbci.co.uk/16620/production/_91408619_55df76d5-2245-41c1-8031-07a4da3f313f.jpg",
  "72",
  "Jaakiekko",
  "Ei mitaan"
);
