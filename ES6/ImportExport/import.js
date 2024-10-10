import { a, string, obj, arr, hell , Man } from "./export.js";
import Text from './default-export.js';

console.log(string);

hell();

console.log(obj);


// class
let man = new Man()
console.log(man);


//default-export

let newText = new Text("Hi, I am Hulk");
console.log(newText);



// import * as all from './export.js';
// console.log(all);