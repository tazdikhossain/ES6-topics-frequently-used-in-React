// let and constant
// Arrow function
// Classes
// Spread operator
// Rest operator
// Destructing
// Import and export

//var
var a = 45;
console.log(a);

var a = "Tazdik Hossain";
console.log(a);

// let
let b = 35;
console.log(b);

b = "hulk"
console.log(b);

// const
const c = 25;
console.log(c);


/// ARROW Function ///

// normal declaration
function sayhello()
{
    console.log("tazdik is hulk");
}
sayhello();

// Arrow function
let saySomething = () =>{console.log("i am tazdik the hulk");}
saySomething();

// Arrow function with parameter
let say = (name, age) =>{console.log(name, age);}
say("Tazdik", 30);

let post = name => console.log(name);
post("Tazdik");

let call = name => {return name;}
console.log(call("hulk"));

let num = num => num * num;
console.log(num("5"));



// classes
class Vehicle{
    constructor(){
        this.color="red";
    }
}

let obj1 = new Vehicle();
let obj2 = new Vehicle();

console.log(obj1);
console.log(obj2);


// Dynamic

class Vehi{
    constructor(param){
        this.color=param;
    }
}

let obj3 = new Vehi("Black");
let obj4 = new Vehi("Green");

console.log(obj3);
console.log(obj4);


// Double parameter

class Vehic{
    constructor(param1, param2){
        this.color=param1;
        this.passanger=param2;
    }
}

let obj5 = new Vehic("Black", 3);
let obj6 = new Vehic("Green", 5);

console.log(obj5);
console.log(obj6);


// Method

class Vehicl{
    constructor(param1, param2){
        this.color=param1;
        this.passanger=param2;
    }

    sayy()
    {
        console.log("Taxdik");
    }
}

let obj7 = new Vehicl("Black", 3);
let obj8 = new Vehicl("Green", 5);

console.log(obj7);
console.log(obj8);

obj7.sayy();


// Dynamic Method

// class Vehiclee{
//     myvar = "Yes";
//     constructor(param1, param2){
//         this.color=param1;
//         this.passanger=param2;
//     }

//     sayyy()
//     {
//         console.log(this.color);
//     }
// }

// let obj9 = new Vehiclee("Black", 3);
// let obj10 = new Vehiclee("Green", 5);

// console.log(obj9);
// console.log(obj10);

// obj9.sayyy();


// Inheritance

// class Vehiclee{

//     constructor(param1, param2){
//         this.color=param1;
//         this.passanger=param2;
//     }

//     sayyy()
//     {
//         console.log(this.color);
//     }
// }

// class Car extends Vehiclee{
   
//     constructor(numWheel) 
//     {
//         super();
//         this.Wheel = numWheel;    
//     }
// }

// let obj9 = new Car();
// console.log(obj9);


class Vehiclee{

    constructor(param1, param2){
        this.color=param1;
        this.passanger=param2;
    }

    sayyy()
    {
        console.log(this.color);
    }
}

class Car extends Vehiclee{
   
    constructor(numWheel, pass, color) 
    {
        super(color, pass);
        this.Wheel = numWheel;    
    }
}

let obj9 = new Car(2,3,"yellow");
console.log(obj9);



// Spread and Rest Operator
// Spread operator = array alada alada kore print hobe. = split
let numbers = [1, 2, 3, 4, 5]
console.log(...numbers);

// Array concatinate
let number1 = [1,2,3,4,5]
let number2 = [2,3,4,5,6]
let arr = [number1, number2];
// let arr = [number1, number2, 7,8,9];
console.log(arr);
let arr1 = [...number1, ...number2];
console.log(arr1);


// Object Concatenate
let person = {
    name:"x",
    age: 45
}

let another = {...person, nationality:"Bangladeshi"}
console.log(another);

// Rest = marge
let number3 = [1,2,3,4,5]
let something = numArr => console.log(numArr);
something(number3);

let something2 = numArr => console.log(numArr);
something2(1,2,3,4,5);

let something1 = (...numArr) => console.log(numArr);
something1(1,2,3,4,5);

// Destructing =  variable declare korar short technique
let arr2 = [1,2,3]
let [f, d, e] = arr2
console.log(f,d,e)



// Array mapping using arrow function
let num1 = [12,3,4,5]
let square = num1.map(function(item){return item*item;});
console.log(square);

let cubes = num1.map((item)=>{return item**3;});
console.log(cubes);