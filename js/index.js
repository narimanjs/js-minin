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

// 57 Стрелочные функции

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

// const person = {
//     age: 26,
//     firstName: "Nar",
//     logNameWithTimeOut() {
//         setTimeout(() => {
//             console.log(this.firstName);
//         }, 1000)
//     }
// } 

// 58 
// const createPost = (title, text = 'Default Txt', date = new Date().toLocaleDateString()) => {
//     return {
//         title,
//         text, 
//         date
//     }
// }

// const post = createPost('New Year');
// console.log(post);

// 59 OBJ

// const createCar = (name, model) => ({name, model})

// const ford = createCar('Ford', 'Focus')
// console.log(ford);

// const yearField = 'year'

// const BMW = {
//     name: "BMW",
//     ['model']: "X6",
//     [yearField]: 2020,

//     logFields() {
//         const {name, model, year} = this
//         console.log(name, model, year);
//     }
// }
// console.log(BMW);
// BMW.logFields()
// const year = BMW.year

// // const {year} = BMW
// console.log(year);

// 60 rest spread

const form = document.querySelector('form')

form.addEventListener('submit', event => {
    event.preventDefault()

    const title = form.title.value
    const text = form.text.value
    const desc = form.desc.value

    saveForm({title, text, desc})
})

// Spread
// function saveForm(data) {
//     const formData = {
//         date: new Date().toLocaleString(),
//         ...data
//     }

//     console.log('Form data: ', formData);
// }

// rest
function saveForm(...args) {
    
    const [title, text, desc] = args

    const formData = {
        date: new Date().toLocaleString(),
        title, text, desc
    }

    console.log('Form data: ', formData);
}