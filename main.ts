// boolean
let isDone: boolean = false;
// console.log(isDone);


// number
// TS supports decimal, hexadecimal, binary, and octal literals. 
// TS uses the type "number" to represent all these values.
// All of these number types are represented as floating point values in JavaScript.
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
let float: number = 3.14;
// console.log(decimal, hex, binary, octal, float);


// string
let color: string = "blue";
color = 'red';
// console.log(color);
let nombre: string = `Bob`;
let age: number = 37;
let sentence: string = `Hello, my name is ${nombre}. I'll be ${age + 1} years old next month.`;
// console.log(sentence);


// BigInt
// BigInt is a built-in object that provides a way to represent whole numbers larger than 2^53 - 1, which is the largest number JavaScript can reliably represent with the Number primitive.
// BigInt can be used for arbitrarily large integers. 
// BigInt is created by appending n to the end of an integer literal or by calling the constructor BigInt().
const big: bigint = 100n;
// console.log(big);
const hugeNumber = BigInt(9007199254740991);
// console.log(hugeNumber);


// Symbol
// A Symbol is a unique and immutable primitive value and may be used as the key of an Object property.
// Symbols are often used to add unique property keys to an object that won't collide with keys any other code might add to the object, and which are hidden from any mechanisms other code will typically use to access the object.        
let sym1 = Symbol("key");
let sym2 = Symbol("key");
// console.log(sym1 === sym2);


// other types: null, undefined, void, never, any
let nullValue: null = null;
let undefinedValue: undefined = undefined;
let voidValue: void = undefined;
let neverValue: never;
let anyValue: any = "Hello, world!";


// Arrays
// There are two ways to define an array in TypeScript. 
// The first way is to use the type of the elements followed by square brackets []. 
let list: number[] = [1, 2, 3, 4, 5];
list.push(6);
// console.log(list, list[0]);
let list2: string[] = [];
list2.push("Hello, world!");
// console.log(list2);
// readonly array
// You can use the ReadonlyArray<T> type to make an array read-only. 
// This means that you cannot change the elements of the array, but you can still read them.
let list3: readonly number[] = [1, 2, 3, 4, 5];
// list3.push(6); // Error: Property 'push' does not exist on type 'readonly number[]'.
// console.log(list3, list3[0]);
// TS also infers the type of an array based on its elements.
let list4 = [1, 2, 3]; // inferred type is number[]
// console.log(list4);
list4.push(4); // OK
// list4.push("Hello"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
console.log(list4);


