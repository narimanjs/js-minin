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

// let person = {
//     name: 'Nar',
//     age: 19,
//     job: 'Frontend',
//     displayInfo: function(ms) {
//         setTimeout(function() {
//             console.log('Name: ', this.name);
//             console.log('Job: ', this.job);
//             console.log('Age: ', this.age);
//         }.bind(this), ms)        
//     }
// }
// person.displayInfo(5000)

//54 Привязка контекста

// function printObject(objName) {
//     console.log('Printing Object: ', objName);
//     for (let key in this) {
//         if(this.hasOwnProperty(key)) {
//             console.log('[' + key + ']', this[key]);
//         }
//     }
// }


// let person = {
//     firstName: 'Nar',
//     job: 'Frontend',
//     age: 19,
//     friends: ['Lisa', 'Maria']
// }

// let car = {
//     name: 'BMW',
//     model: 'X3',
//     year: 2020
// }

// let printPerson = printObject.bind(person)
// printPerson('Person')

// printObject.call(car, 'Car')

// printObject.apply(person, ['Person'])

//55 
/*
Реализуйте возможность используя прототип, чтобы у каждого массива был новый метод, позволяющий удваивать значение каждого элемента с учетом типа данных таким образом, чтобы:
1. Для чисел это возведение в квадрат
2. Для строк это удваивание строки
3. Метод не изменил существующий массив и возвращал

Пример:
[1, 2, 3] => [1, 4, 9]
[5, 'Hello', 6] => [25, 'HelloHello', 36]

*/
// let a = [1, 2, 3]
// let b = [5, 'Hello', 6]

// Array.prototype.double = function() {
//     let newArray = this.map(function(i) {
//         if(typeof i === 'number') {
//             return Math.pow(i, 2)
//         }
//         if(typeof i === 'string') {
//             return i += i
//         }
//     })

//     return newArray
// }
// let newA = a.double()
// let newB = b.double()

// console.log('Aa: ', newA.double());
// console.log('Bb: ', newB);
const myNumber = 42;
// localStorage.removeItem('number');
// console.log(localStorage.getItem('number'));
// localStorage.setItem('number', myNumber.toString());
// console.log(localStorage.getItem('number'));
// localStorage.clear();

const object = {
    name: 'Max',
    age: 20
}
localStorage.setItem('person', JSON.stringify(object));
const raw = localStorage.getItem('person');
const person = JSON.parse(raw)
person.name = 'nar';
console.log( person);

// =============
window.addEventListener('storage', event => {
    console.log(event);
})