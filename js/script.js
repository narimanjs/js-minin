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
// function Car(name, year) {
//     this.name = name
//     this.year = year
// }

// Car.prototype.getAge = function() {
//     return new Date().getFullYear() - this.year
// }
// Car.prototype.color = 'black'

// let ford = new Car('ford', 2015)
// ford.color = 'red'
// let BMW = new Car('BMW', 2018)
// console.log(ford);
// console.log(BMW);

//50 создание и настройка объектов
// let ford = Object.create({
//     calculateDistancePerYear: function() {
//        Object.defineProperty(this, 'distansePerYear', {
//         value: Math.ceil(this.distance / this.age),
//         enumerable: false,
//         writable: false,
//         configurable: false
//        })
//     }
// }, {
//     name: {
//         value: 'Ford',
//         enumerable: true,
//         writable: false,
//         configurable: false
//     },
//     model: {
//         value: 'Focus',
//         enumerable: true,
//         writable: false,
//         configurable: false
//     },
//     year: {
//         value: 2015,
//         enumerable: true,
//         writable: false,
//         configurable: false
//     },
//     distance: {
//         value: 120500,
//         enumerable: true,
//         writable: true,
//         configurable: false
//     }, 
//     age: {
//         enumerable: true,
//         get: function() {
//             console.log('get age')
//             return new Date().getFullYear() - this.year
//         },
//         set: function() {
//             console.log('support set');
//         }
//     }
// })
// ford.calculateDistancePerYear()

// for(let key in ford) {
//     if(ford.hasOwnProperty(key)) {
//         console.log(key, ford[key]);
//     }
    
// }
// 51 итерация
// let person = {
//     name: 'Max',
//     age: 28,
//     job: 'Frontend'
// }
// Первый способ итерации ключей
// for(let key in person) {
//     if(person.hasOwnProperty(key))
//         console.log(key, person[key]);
// }

// Второй способ итерации ключей

// Object.keys(person).forEach(function(key) {
//     console.log(person[key]);
// });

// 52 Замыкание

// let createCounter = function(counterName) {
//     let counter = 0
//     return {
//         increment: function() {
//             counter++
//         },
//         decrement: function() {
//             counter--
//         },
//         getCounter: function() {
//             return counter
//         }
//     }
// }
// let counterA = createCounter('counter A')
// let counterB = createCounter('counter B')

// counterA.increment()
// counterA.increment()
// counterA.increment()

// counterB.decrement()
// counterB.decrement()

// 53 Что такое контект?

let person = {
    name: 'Nar',
    age: 19,
    job: 'Frontend',
    displayInfo: function(ms) {
        setTimeout(function() {
            console.log('Name: ', this.name);
            console.log('Job: ', this.job);
            console.log('Age: ', this.age);
        }.bind(this), ms)        
    }
}
person.displayInfo(5000)