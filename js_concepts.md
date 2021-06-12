
## FAQ of Javascript

####  1. Explain Hoisting in javascript.
Conceptually, definition of hoisting suggests that variable and function declarations are moved to the top of your code (making a variable accessible before its declaration), but this is not in fact what happens. Instead, the variable and function declarations are put into memory during the compile phase, but stay exactly where you typed them in your code.

#### Example
```javascript
print_name("Ashish");

function print_name(name) {
  console.log("My name is " + name); // prints "My name is Ashish"
}
```
JavaScript only hoists declarations, not initializations. If a variable is declared and initialized after using it, the value will be undefined.
#### Example
```javascript
console.log(num); // Returns undefined, as only declaration was hoisted
var num; // Declaration
num = 6; // Initialization
```

####  2. What is a Temporal Dead Zone?.
```javascript
console.log(x); // undefined
console.log(y); // ReferenceError: x is not defined
var x = 1;
let y = 2;
```
It appears from above example that let and const declarations may not be hoisted. But that's not the case, let and const are hoisted (like var, class and function), but there is a period between entering scope and being declared where they cannot be accessed. This period is the temporal dead zone (TDZ).
The TDZ ends when aLet is declared, rather than assigned
```javascript
let x;
console.log(x); // undefined
x = 10;
console.log(x); // 10
```

####  3. Difference between “ == “ and “ === “ operators. 
The difference between both the operators is that,“==” is used to compare values whereas, “ === “ is used to compare both value and types.
#### Example
```javascript
var x = 2;
var y = "2";
(x == y)  // Returns true since the value of both x and y is the same

(x === y) // Returns false since the typeof x is "number" and typeof y is "string"
```

####  4. Explain Implicit Type Coercion in javascript.
Implicit type coercion is automatic conversion of value from one type to another. It takes place when the operands of an expression are of different types.
#### Example 1
```javascript
let x = 3;
let y = "3";
console.log(x + y); // outputs "33" 
```
#### Example 2
```javascript
let firstName = "Ashish";
let lastName = " Kumar";
console.log(firstName + lastName);  //outputs "Ashish Kumar"
```

####  5. Explain passed by value and passed by reference.
In Js, primitive data types are passed by value and non-primitive data types are passed by reference.
#### Example: Pass by value
```javascript
let x = 10;
function add_ten(number){
  number += 10;
  console.log(number); //outputs 20
}
add_ten(x);
console.log(x); //outputs 10
```
#### Example: Pass by reference
```javascript
let obj1 = { name: "Ashish" };
let obj2 = obj1;
obj2.name = "Jaskaran";
console.log(obj1.name); //outputs "Jaskaran"
console.log(obj2.name);//outputs "Jaskaran"
```

####  6. What is an Immediately Invoked Function in javascript?
An Immediately Invoked Function is a JavaScript function that runs as soon as it is defined.
#### Example
```javascript
(function () {
  // statements
})();
```
####  7. Explain Higher Order Functions in javascript.
A function that accepts and/or returns another function is called a higher-order function.It’s called higher-order because instead of strings, numbers, or booleans, it goes higher to operate on functions.
#### Example 1
```javascript
const arr1 = [1, 2, 3];
const arr2 = arr1.map(function(item) {
  return item * 2;
});
console.log(arr2);
```
#### Example 2
```javascript
function higher_order(fn) {
  fn();
}
higher_order(function() { console.log("Hello") }); 
```
####  8. Explain “this” keyword.
“this” keyword refers to the object that the function is a property of.The value of “this” keyword will always depend on the object that is invoking the function.
#### Example
```javascript
let obj = { 
  name: "Ashish",
  get_name : function () { console.log(this.name); }
};
obj.get_name(); // ouputs "Ashish"
```

####  9. Explain call(), apply() and, bind() methods.
#### bind():
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind
#### apply():
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
#### call():
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call

####  10. What is Currying in javascript?
Currying is an advanced technique to transform a function of arguments n, to n functions of one or less arguments.
#### Example
```javascript
function add (a) {
  return function(b){
    return a + b;
  }
}
console.log(add(3)(4)); //outputs 7
```

####  11. Write code to implement generic multi parameter currying.
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

####  12. Explain Scope and Scope Chain in javascript.
Read the article:
https://medium.com/@aastha6348/understanding-scopes-and-scope-chain-in-javascript-4d87f7a4b144

####  13. What are object prototypes?
Prototypes are the mechanism by which JavaScript objects inherit features from one another.JavaScript is often described as a prototype-based language — to provide inheritance, objects can have a prototype object, which acts as a template object that it inherits methods and properties from.
An object's prototype object may also have a prototype object, which it inherits methods and properties from, and so on. This is often referred to as a prototype chain, and explains why different objects have properties and methods defined on other objects available to them.
#### Example
```javascript
const arr = [];
arr.push(1);

console.log(arr); // outputs [2]
```
In the code above,we have not defined any property or method called "push" on the array “arr” but the javascript does not throw an error.
The reason is the use of prototypes. Array objects inherit properties from the Array prototype.

####  14. Explain inheritance in JavaScript.
Unlike conventional inheritance, JavaScript has Prototypal inheritance. As it has one construct: objects. Each object has a private property which holds a link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype. By definition, null has no prototype, and acts as the final link in this prototype chain.
Nearly all objects in JavaScript are instances of Object which sits on the top of a prototype chain.

####  15. What are callbacks?
A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
#### Example
```javascript
function print(name){
  console.log(name); //outputs "Ashish"
}
function name(cb){
  let person_name = "Ashish";
  cb(person_name);
}
name(print);
```

####  16. What is memoization?
Memoization is a form of caching where the return value of a function is cached based on its parameters. If the parameter of that function is not changed, the cached version of the function is returned.
#### Example
```javascript
function memoizedAddTo256(){
  var cache = {};

  return function(num){
    if(num in cache){
      console.log("cached value");
      return cache[num]

    }
    else{
      cache[num] = num + 256;
      return cache[num];
    }
  }
}

var memoizedFunc = memoizedAddTo256();

memoizedFunc(20); // Normal return
memoizedFunc(20); // Cached return
```

####  17. What is the use of a constructor function in javascript?
Constructor functions are used to create objects in javascript. f we want to create multiple objects having similar properties and methods, constructor functions are used.
#### Example
```javascript
function Person(name,age,gender){
  this.name = name;
  this.age = age;
  this.gender = gender;
}


var person1 = new Person("Ashish, 23, "male");
console.log(person1);

var person2 = new Person("Jaskaran, 25 , "male");
console.log(person2);
```
Constructor functions name always starts with capitals.

####  18. Difference between arrow and normal functions.
https://www.tutorialspoint.com/difference-between-regular-functions-and-arrow-functions-in-javascript

####  19. Promises in javascript.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

####  20. What is the rest parameter and spread operator?
https://javascript.info/rest-parameters-spread

####  21. What are classes in javascript?
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

####  22. What are generator functions?
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*

####  23. What is Object Destructuring?
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

####  24. What is weakmap and weakset in javascript?
Weakmap: htps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap
Weakset: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet

####  25. What is babel?
Babel is a free and open-source JavaScript transcompiler that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript that can be run by older JavaScript engines. Babel is a popular tool for using the newest features of the JavaScript programming language.

####  26. What is webPack?
Webpack is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser. When webpack processes your application, it internally builds a dependency graph which maps every module your project needs and generates one or more bundles.

####  27. Explain garbage collection in JavaScript.
JavaScript automatically allocates memory when objects are created and frees it when they are not used anymore (garbage collection). This automaticity is a potential source of confusion: it can give developers the false impression that they don't need to worry about memory management,as the general problem of automatically finding whether some memory "is not needed anymore" is undecidable.

####  28. Explain mark and sweep algorithm.
This algorithm reduces the definition of "an object is no longer needed" to "an object is unreachable".
This algorithm assumes the knowledge of a set of objects called roots. In JavaScript, the root is the global object. Periodically, the garbage collector will start from these roots, find all objects that are referenced from these roots, then all objects referenced from these, etc. Starting from the roots, the garbage collector will thus find all reachable objects and collect all non-reachable objects.

####  29. Explain Reference-counting garbage collection.
This is the simplest garbage collection algorithm.This algorithm looks out for those objects which have no references   left.An object becomes eligible for garbage collection if it has no references attached to it.
#### Example
```javascript
var obj = {
  x: {
    y: 2 
  }
};
// Two objects are created here. One is referenced by the other as one of its properties.
// So, none can be garbage collected.
obj = 1; // what was the 'x' property of the object originally in obj
         // has zero references to it. It can be garbage collected.
```
####  30. Explain Polyfill in Javscript.
A polyfill is a piece of code (usually JavaScript on the Web) used to provide modern functionality on older browsers that do not natively support it. The reason why polyfills are not used exclusively is for better functionality and better performance.

#### 31. Explain Throttling and Debouncing.
Throttling: It will delay executing a function. It will reduce the notifications of an event that fires multiple times.
Watch this video for more understanding : https://www.youtube.com/watch?v=81NGEXAaa3Y
Debouncing: It will bunch a series of sequential calls to a function into a single call to that function. It ensures that one notification is made for an event that fires multiple times
Watch this video for more understanding : https://www.youtube.com/watch?v=Zo-6_qx8uxg
