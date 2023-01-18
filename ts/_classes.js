"use strict";
// ************** Classes
class Typecript {
    constructor(version) {
        this.version = version;
    }
    info(name) {
        return `[${name}]: Typescript version is ${this.version}`;
    }
}
/**
 class Car {
     readonly model: string
     readonly numberOfWheels: number = 4
 
     constructor(theModel: string) {
         this.model = theModel
     }
 }
*/
class Car {
    constructor(model) {
        this.model = model;
        this.numberOfWheels = 4;
    }
}
// *************** Модификаторы protect, public, private
class Animal {
    constructor() {
        this.voice = '';
        this.color = 'black';
    }
    go() {
        console.log('go');
    }
}
class Cat extends Animal {
    setVoice(voice) {
        this.voice = voice;
    }
}
const cat = new Cat();
cat.setVoice('meow');
console.log((cat.color));
// ================
class Component {
}
// class AppComponent extends Component {
//     render(): void {
//         console.log('Component on render');
//     }
//     info(): string {
//         console.log('This is info!');
//     }
// }
