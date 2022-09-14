//56 ES6
// for (let i = 0; i < 5; i++) {
//    setTimeout(function() {
//     console.log(i);
//    }, 2000)
// }

// const HEX = '#FFAABB'

// const arr = [1, 2]
// const obj = {a: 1}

// arr.unshift(3)
// obj.b = 2
// console.log(arr);
// console.log(obj);

// document.querySelector('h1').style.color = HEX

// Стрелочные функции

// function getAge(year) {
//     const current = new Date().getFullYear()
//     return current - year
// }
// console.log(getAge(1990));

// const calculateAge = (year) => {
//     const current = new Date().getFullYear()
//     return current - year
// }

// console.log(calculateAge(1998));


// const getAge = year => {
//     const current = new Date().getFullYear()
//     return current - year
// }

// const getAge = year => new Date().getFullYear() - year
// const logAge = year => console.log(new Date().getFullYear() - year);
// logAge(1998)
// console.log(getAge(2000))

const person = {
    age: 26,
    firstName: "Nar",
    logNameWithTimeOut() {
        setTimeout(() => {
            console.log(this.firstName);
        }, 1000)
    }
} 
