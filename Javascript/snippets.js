/*

(() => {
    setTimeout(() => {
        console.log("A");
    }, 1000)
    setTimeout(() => {
        console.log("B");
    }, 0)
    console.log("C");
    console.log("D");
    setImmediate(() => {
        console.log("Set immediate");
    });
    process.nextTick(() => {
        console.log("next tick");
    })
})();



//*******************************************************************************************



var y = 1;
if (function F(){}){
    y += typeof F;
}

console.log(y)



//*******************************************************************************************



function sum(a){
    return function (b) {
        return a+b;
    }
}

console.log(sum(2)(2));

//*******************************************************************************************



function sum(a){
    return function (b) {
        if(b){
            return sum(a+b);
        }else{
            return a;
        }
    }
}

console.log(sum(2)(2)(5)());

//*******************************************************************************************



let racer1 = function() {
    setTimeout(() => console.log("timeout"), 0);
    setImmediate(() => console.log("immediate"));
    process.nextTick(() => console.log("nextTick"));
}
let racer2 = function() {
    process.nextTick(() => console.log("nextTick"));
    setTimeout(() => console.log("timeout"), 100);
    setImmediate(() => console.log("immediate"));
}
let racer3 = function() {
    setImmediate(() => console.log("immediate"));
    process.nextTick(() => console.log("nextTick"));
    setTimeout(() => console.log("timeout"), 0);
}

racer1()
racer2()
racer3()

//*******************************************************************************************

(() => {
    setImmediate(() => console.log("immediate"));
    setTimeout(() => console.log("timeout"), 0);
    process.nextTick(() => console.log("nextTick"));
    console.log("current event loop");
})();

//*******************************************************************************************

function foo() {
    let x = y = 0;
    x++;
    y++;
    return x;
}

console.log(foo(), typeof x, typeof y);

//*******************************************************************************************

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    constructor(width) {
        this.width = width;
    }
    get area() {
        return this.calcArea();
    }
    calcArea() {
        return this.height * this.width;
    }
}

const square = new Rectangle(20, 30);

console.log(square.area);

//*******************************************************************************************

function main(){
    console.log('A');
    setTimeout(
        function print(){ console.log('B'); }
        ,0);
    console.log('C');
}

main(); 

//*******************************************************************************************

function User(name, age) {
    this.name = name;
    this.age = age;
    this.getProfile = function() {
        console.log(this.constructor.name);
        return () => {
            console.log(this.constructor.name);
            console.log("I'm " + this.name + ", " + this.age + " yrs old");
        };
    }
}
let user = new User('John', 25);
let profile = user.getProfile();
profile();

//*******************************************************************************************

function User(name, age) {
    this.name = name;
    this.age = age;
    this.getProfile = function() {
        console.log(this.constructor.name); 
        return function() {
            console.log(this.constructor);
            console.log("I'm " + this.name + ", " + this.age + " yrs old");
        };
    }
}
var user = new User('John', 25);
var profile = user.getProfile();
profile();

//*******************************************************************************************

var y = 1;
if (function f(){}) {
    y += typeof f;
}
console.log(y);

//*******************************************************************************************

var car = new Vehicle("Honda", "white", "2010", "UK");
console.log(car);
function Vehicle(model, color, year, country) {
    this.model = model;
    this.color = color;
    this.year = year;
    this.country = country;
}

//*******************************************************************************************

function Vehicle(model, color, year, country) {
    this.model = model;
    this.color = color;
    this.year = year;
    this.country = country;
}
var car = Vehicle("Honda", "white", "2010", "UK");

console.log(car);

//*******************************************************************************************

function foo() {
    return
    {
        message: "Hello World"
    };
}

console.log(foo());

//*******************************************************************************************

while (len > 0) {  
    index = Math.floor(Math.random() * len);  
    len--;  
    t = a[len];          
    a[len] = a[index];          
    a[index] = t;      
}    

//*******************************************************************************************

function abc() {
    console.log(this.constructor());
}

abc();

//*******************************************************************************************

const obj = {
    val: 1,
    getValue: function () {
        console.log('val is : ', this.val);
    }
};
let call = obj.getValue;
call();
call = obj.getValue.bind(obj);
call();

//*******************************************************************************************


function displayName(city) {
    console.log('name is : ', this.name , ' and he lives in: ',city);
}
const obj = {
    name: 'Test'
};

displayName.apply(obj,["City"]);

//*******************************************************************************************

let user = {
    name: 'sample name',
    address: {
        personal: {
            area: 'Presonal',
            city: 'Personal'
        },
        official: {
            area: 'official',
            city: 'Official'
        }
    }
};

let final = {};

function convert(obj,parent) {
    for (let key in obj) {
        if (typeof obj[key] === 'object') {
            convert(obj[key], parent + "_" + key);
        } else {
            final[parent + '_' + key] = obj[key];
        } 
    }
}
convert(user,"user");
console.log(final);

//*******************************************************************************************

function reverseInPlace(str){
    return str.split(' ').reverse().join(' ').split('').reverse().join('');
}
console.log(reverseInPlace('I am the good boy'));

//*******************************************************************************************

*/
