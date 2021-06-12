```javascript
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
```
```javascript
var y = 1;
if (function F(){}){
    y += typeof F;
}

console.log(y)
```
```javascript
function sum(a){
    return function (b) {
        return a+b;
    }
}

console.log(sum(2)(2));
```
```javascript
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
```
```javascript
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
```
```javascript
(() => {
    setImmediate(() => console.log("immediate"));
    setTimeout(() => console.log("timeout"), 0);
    process.nextTick(() => console.log("nextTick"));
    console.log("current event loop");
})();
```
```javascript
function foo() {
    let x = y = 0;
    x++;
    y++;
    return x;
}

console.log(foo(), typeof x, typeof y);
```
```javascript
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
```
```javascript
function main(){
    console.log('A');
    setTimeout(
        function print(){ console.log('B'); }
        ,0);
    console.log('C');
}

main(); 
```
```javascript
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
```
```javascript
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
```
```javascript
var y = 1;
if (function f(){}) {
    y += typeof f;
}
console.log(y);
```
```javascript
var car = new Vehicle("Honda", "white", "2010", "UK");
console.log(car);
function Vehicle(model, color, year, country) {
    this.model = model;
    this.color = color;
    this.year = year;
    this.country = country;
}
```
```javascript
function Vehicle(model, color, year, country) {
    this.model = model;
    this.color = color;
    this.year = year;
    this.country = country;
}
var car = Vehicle("Honda", "white", "2010", "UK");

console.log(car);
```
```javascript
function foo() {
    return
    {
        message: "Hello World"
    };
}

console.log(foo());
```
