
"use strict"; 

class Henkilo {
    constructor(FirstName, LastName, NickName, YearOfBirth) {
        this.firstName = FirstName;
        this.lastName = LastName;
        this.nickName = NickName;
        this.yearOfBirth = YearOfBirth;
        console.log("Person created: ", "\n", this.firstName, "\n", this.lastName, "\n", this.nickName, "\n", this.yearOfBirth);
    }

    //_firstName;
    get FirstName() {
        return this.firstName;
    }
    set FirstName(value) {
        this.firstName = value;
    }

    //_lastName;
    get LastName() {
        return this.lastName;
    }
    set LastName(value) {
        this.lastName = value;
    }

    //_nickName;
    get NickName() {
        return this.nickName;
    }
    set NickName(value) {
        this.nickName = value;
    }

    //_yearOfBirth;
    get YearOfBirth() {
        return this.yearOfBirth;
    }
    set YearOfBirth(value) {
        this.yearOfBirth = value;
    }

}

var henkilo1 = new Henkilo("Kimi", "Räikkönen", "Iceman",  "1979");



class Urheilija extends Henkilo {

    constructor(Picture, Weight, Sport, Achievements) {

        super(henkilo1.FirstName, henkilo1.LastName, henkilo1.NickName, henkilo1.YearOfBirth);

        this.picture = Picture;
        this.weight = Weight;
        this.sport = Sport;
        this.achievements= Achievements;  
        console.log("Urheilija created ", "\n", this.picture, "\n" , this.weight, "\n", this.sport, "\n", this.achievements)
    }

    get Picture() {
        return this._picture;
    }
    set Picture(value) {
        this.picture = value;
    }


    get Weight() {
        return this.weight;
    }
    set Weight(value) {
        this.weight = value;
    }
    

    get Sport() {
        return this.sport;
    }
    set Sport(value) {
        this.sport = value;
    }

    get Achievements() {
        return this.achievements;
    }
    set Achievements(value) {
        this.achievements = value;
    }
}

var urheilija = new Urheilija("https://pbs.twimg.com/media/D0wN2XiXcAAfpBQ.jpg", "70kg", "Formula1", "Formula1 MM 2007");


