const add = function(a,b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(myArray) {
	let sum = 0;
  for (let i = 0; i< myArray.length; i++){
    sum += myArray[i];
  }
  return sum;
};

const multiply = function(array) {
  var sum=1;
  for (var i=0; i<array.length; i++) {
    sum *= array[i];
  } 
  return sum;
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(a) {
	if(a === 0) return 1;
  let fact = 1;
  for(let i = a; i>0; i--){
    fact *= i;
  }
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
