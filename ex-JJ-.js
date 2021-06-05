//https://youtu.be/v2tJ3nzXh8I
class Person {
    constructor(name, address, hobbies) {
        this.name = name
        this.address = address
        this.hobbies = hobbies
    };
    print() {
        console.log(this);
    };
};

function printPersonStreet(person) {
    if (person && person.address) { console.log(person.address.street) };
    //console.log(person&&person.address&&person.address.street);
    console.log(person?.address?.street);
    //first? if person exist and not null or undefined then continue & 
    //second? if address exist and not null or undefined & 
    //console.log(person.address.street);
};

const kyle = new Person(
    "Kyle",
    { street: "12345 main st", city: "Somewhere" },
    ["Bowling", "Weigth Lifting"]
);
kyle.print();
kyle.printName?.();//if printName exsist call it
printPersonStreet(kyle);
console.log(kyle.hobbies?.[0].toLowerCase());
//12:45​ - Object Shorthand
const vards = 'Bobis';
const favoritFood = "Rise";

const bobis = {
    vards,      // vards:vards,
    favoritFood // favoritFood:favoritFood
};
console.log(bobis);
// 14:55​ - Defer/Async Loading
/* for brouser
const button=document.querySelector("button");
button.style.backgroundColor="green";
*/