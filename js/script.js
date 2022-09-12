//number, string, boolean, null, undefined, BigInt
//object
//48
// let car = {
//     name: 'Ford',
//     year: 2015,
//     person: {

//     }
// }
//car.__proto__ => Object.prototype
//[] => Array => Object

//49
function Car(name, year) {
    this.name = name
    this.year = year
}

Car.prototype.getAge = function() {
    return new Date().getFullYear() - this.year
}
Car.prototype.color = 'black'

let ford = new Car('ford', 2015)
ford.color = 'red'
let BMW = new Car('BMW', 2018)
console.log(ford);
console.log(BMW);