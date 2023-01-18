"use strict";
const isFetching = true;
const isLoading = false;
const int = 42;
const flat = 4.2;
const message = 'hello TS';
const numberArray = [1, 1, 2, 3, 5, 8, 13];
const numberArray2 = [1, 1, 2, 3, 5, 8, 13];
const words = ['Hello', 'world'];
// *********** Tuple
const constact = ['nar', 123];
// *********** Any
let variable = 42;
variable = '42';
//  *********** Function
function sayMyName(name) {
    console.log(name);
}
sayMyName('Narrrs');
//  *********** Never
function throwERR(message) {
    throw new Error(message);
}
const login = 'admin';
const id1 = 1234;
const id2 = '1234';
