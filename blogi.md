# Web-ohjelmointi, syksy 2021

### Tekijä: Oona Härkönen

#

## Viikko 1 ja 2 (1.9.- 15.9.2021)

Kolmen luennon viikko. Käytiin läpi perusteet sekä asenneltiin lähinnä ohjelmistoja.
HTML - ja CSS -perusteet tehtävässä kopion annetun pohjakoodin, johon muokkasin omat tietoni opintojaksoista, harrastuksista, yhteystiedot ja tiedot yleisesti. Tehtävä ei ollu hirveän vaikea, muuntelin tarvittavat asiat vain pohjakoodiin. Muutin muutamia värejä. Opin perusteet html ajamisesta ja ikkunoiden välillä liikkumisesta.
Parantaisin käyttöliittymää vielä entisestään, jos rupeaisin tehtävää uudestaan tekemään.

Palindromi tehtävä herätteli mukavasti kurssiin! Tehtävänä oli tehdä sovellus, joka kysyy syötettävän sanan ja tarkistaa onko tämä palindromi. Kaikessa yksinkertaisuudessaan loin tehtävään for loopin, joka jakaa sanan kahteen osaan ja tarkistaa, onko molemmissa osissa samat kirjaimet. Mikäli on, boolean palauttaa arvon true.
Tehtävä oli suhteellisen tuttu muilta ohjelmoinnin kursseilta

Epähuomiossani en lukenut puhelinluettelon tehtävänannon viimeistä lausetta "Komentokehoitepohjainen". Käytin puoli päivää koodaten web-pohjaista sovellusta käyttöliittymine kaikkineen. Tämän tajuttuani poistin kaiken turhan, loin yhden js tiedoston johon koostin koodin.

Tehtävänä oli lisätä taulukkoon objekteja (eli henkilöitä joilla nimi ja puhelinnumero).
Käyttäjältä kysytään henkilön nimi ja puhelinnumero. Tehtävän oli myös tehdä haku nimen perusteella, joka palauttaa henkilön tiedot.

Tein siis simppelit console.logit joiden avulla pystytään tekemään hakuja.

Tehtävästä ei sen enempää sanottavaa.

Henkilö ja urheilija tehtävä oli tallessa viime vuodelta, jolloin yritin käydä tätä samaa kurssia, en kuitenkaan sitä silloin päätökseen saanut ajanpuutteen vuoksi.

Henkilö ja urheilija tehtävä oli tallessa viime vuodelta, jolloin yritin käydä tätä samaa kurssia, en kuitenkaan sitä silloin päätökseen saanut ajanpuutteen vuoksi.

Tehtävänä oli luoda luokka Henkilö, jolla on tiettyjä attribuutteja. Tämän jälkeen piti luoda Urheilija, joka perii luokan Henkilö attribuutit ja saa myös itselleen muutamia attribuutteja. Määritin Henkilölle ja urheilijalle attribuutit gettereillä ja settereillä. Loin esimerkit molemmista instansseista ja periytymisen super metodilla

Tehtävä muistutteli mieleen ohj3 olio-ohjelmoinnin kikkoja ja opin taas uusia asioista luokkien periytyvyydestä. Tehtävästä jäi puuttumaan toimivan kuvan linkkaaminen. Sen tekisin ensikerralla uudestaan

## Viikko 3, 4, 5, 6 (15-13.10.2021)

Yhdistin Gitin pitkän tuskastelun jälkeen Visual Studio Codeen. Tultiin tulokseen, että blogin voi toteuttaa tässä yhteydessä md tiedostolla. Tämä on näppärää, koska kirjoitukset tulee helposti committien mukana GitHubiin.

Tehtävä 4 an vuoro. Tehtävä osoittautu haasteelliseksi. Jouduin tukeutumaan kavereiden apuun ja neuvontaan.
4btä en tehnyt ajanpuutteen vuoksi. Tietorakenteet ja algotimit- kurssi vei tuhottomasti aikaa.

Toteutin tehtävään hakua varten GET metodin ja sanojen lisäystä varten POST metodin. Ohjelmaan oli linkitetty myös tekstitiedosto, johon sanat tallennettiin

Opin miten GET -ja POST metodeja käytetään ja miten niitä sovelletaan tällaisessa sovelluksessa päällisinpuolin. Pitää jatkossa tutustua asiaan vielä tarkemmin. Tehtävässä ilmeni paljon ongelmia matkan varrella.

Käytiin REST API asioita läpi. Moodlessa olevat Youtube videot osoittautuivat hyödyllisiksi. Varsinkin esnimmäisessä videossa esitelty Google maps -esimerkki oli näppärä koordinaattien hakemiseen.

## Viikko 7,8 (16-23.10.2021)

Postman ladattu. Sovellus minulle vielä uusi ja tuntematon. Pienen tutkiskelun jälkeen totesin, että ohjelma onkin näppärä API työkalu.

Tehtävä 5 palautti mielen SQL kurssille, josta aikanaan tykkäsin. Mielestäni HeidiSQl on simppeli ja näppärä ohjelma tietokantojen luomiseen. Yhdistäminen VS:een onnistui melkeinpä ongelmitta.

Joitakin ongelmia ilmeni käyttäjän oikeuksien antamisessa ja niiden käyttämisessä. Yrittäessäni rajata käyttäjän oikeuksia, ei ohjelma päästänyt eteenpäin ilman virheilmoituksia. Lopulta sallin kaikki oikeudet ja rupesin siitä karsimaan. Ei mitään tietoa, miksi tätä virheilmoitusta antoi.

Tehtävä oli luoda tietokantasovellus node.js. Lisäsin annetut pohjakoodit ja metodit. Loin tietokannan HeidiSQl ja annoin tarvittavat oikeudet käyttäjälle. Tehtävä oli suhteellisen helppo pl oikeuksien antaminen. Jonkin aikaa meni myös muistellessa sql toimintaa ja sen luonti koodeja.

## Viikko 9, 10 (24.10.2021 - 17.11.2021)

Aloittelin tehtävä 6:ta. En monen päivän yrittämisen jälkeen yksinkertaisesti saanut linkitettyä SQL tietokantaa koodiin. Päätin kuitenkin yrittää käyttöliittymän muodostamista. Käyttöliittymän parissa väänsin ja käänsin kaksi päivää. Yrittäessäni linkittää nappeja eri sivuille törmäsin useisiin compile erroreihin. Lopulta törmäsin erroriin, joka ei lopulta edes löytynyt mistään. Lopulta sain aikaan käyttöliittymän, jonka napit eivät johda mihinkään tai tee yhtikäs mitään. Mielestäni SQL+React+käyttöliittymä oli liian haastava tässä vaiheessa. Asiat kyllä käytiin, mutta kirjastojen asentaminen ja kaiken toimiminen hyvin olisi vaatinut miljoonan palikan osumisesta paikalleen. Koko tehtävässä tuli vain liikaa erroreita kirjastoihin liittyen, mikään ei toiminut mitenkään. Tehtävä vain vaati liikaa liikkuvia osia. Viikon lisäaikakaan ei auttanut asiaa.
