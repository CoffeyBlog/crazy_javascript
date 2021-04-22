// var vs let in JavaScript - understanding lexical scope


// Of course you won't get a return because programs operate from the top down
console.log(carId);
let carId = 42;

// ReferenceError: Cannot access 'carId' before initialization



// but sometimes JavaScript is weird:
console.log(carId);
var carId = 42;

// because when you use var your get an "undefined"



// let has block scoping ... var doesn't
if (true){
  let foo = 9;
}
console.log(foo);

// you will receive an error


// var doesn't have block scoping, so you will return #9
if (true){
  var foo = 9;
}
console.log(foo);

// ^ returns 9





