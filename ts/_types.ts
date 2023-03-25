const isFetching: boolean = true;
const isLoading: boolean = false;

const int: number = 42;
const flat: number = 4.2;
const mmessage: string = 'hello TS';

const numberArray: number[] = [1, 1, 2, 3, 5, 8, 13];
const numberArray2: Array<number> = [1, 1, 2, 3, 5, 8, 13];


const words: string[] = ['Hello', 'world'];

// *********** Tuple
const constact: [string, number] = ['nar', 123];

// *********** Any

let variable: any = 42;
variable = '42'

//  *********** Function
function sayMyName(name: string): void {
    console.log(name);
}
sayMyName('Narrrs')

//  *********** Never
function throwERR(message: string): never {
    throw new Error(message)
}

// function infinite(): never {
//     while (true) {

//     }
// }


// ************ Type Allias

type Login = string;

const login: Login = 'admin';

type ID = string | number
const id1: ID = 1234;
const id2: ID = '1234';

// ************ Null 

type SomeType = string | null | undefined;

