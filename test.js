// Testing sumToString
// import { sumToString } from "./src/mild/mild_1.js";
// onsole.log("Testing sumToString(3,4): ");
// console.log(sumToString(3,4));

// Testing identifyVariable
// import { identifyVariable } from "./src/mild/mild_2.js";
// console.log("Testing identifyVariable(4)");
// console.log(identifyVariable(4));

// Testing identifyArray
// import { identifyArray } from "./src/mild/mild_2.js";
// console.log("Testing identifyArray(['some', 3, [3, 4], false]);");
// console.log(identifyArray(['some', 3, [3, 4], false]));

// Testing removeKeyNonDestructive
import { removeKeyNonDestructive } from "./src/mild/mild_2.js";
console.log("Testing removeKeyNonDestructive");
console.log(removeKeyNonDestructive({name: 'Mr. Boss',title: 'boss',age: 33,password: 'pass123'}, "password"));

// Testing removeKeys
import { removeKeys } from "./src/mild/mild_2.js";
console.log("Testing removeKets");
console.log(removeKeys({name: 'Mr. Boss',title: 'boss',age: 33,password: 'pass123'},['password', 'age']));