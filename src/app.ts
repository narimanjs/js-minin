// class Person1 {
//     constructor(private name: string) { }
// }
// const alex = new Person1(name: 'Alex');

const btn: Element = document.querySelector('#btn')!;

if (btn) {
    btn.addEventListener('click', () => {
        console.log('click btn');
    })
}
