//var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
/*
function double(item) {
  return item * 2;
}
const newNumbers = numbers.map(double);
*/

/*var newNumbers = [];
//removing the name of the function makes it an anynomous functi
numbers.forEach(function (x) {
  newNumbers.push(x * 2);
});*/

//const newNumbers = numbers.map(function (x) {
//return x * 2;
//});
//console.log(newNumbers);

//Filter - Create a new array by keeping the items that return true.
//const newNumbers = numbers.filter(function (num) {
//return num < 49; //output:[3,2,48,5]
//});

/*var newNumbers = []
numbers.forEach(function(num){
  if(num>40){
    return num
  }
});*/

//Reduce - Accumulate a value by doing something to each item in an array.
//var newNumber = numbers.reduce(function (accumulator, currentNumber) {
//console.log("accumulator=", accumulator);
//console.log("currentNumber=", currentNumber);
//return accumulator + currentNumber;
//});

/*var newNumber = 0;
numbers.forEach(function (num) {
  newNumber += num;
});
*/

//var numbers = [3, 10, 25, 48, 5];
//Find - find the first item that matches from an array.
//it finds the first item in the array >10
//const newNumbers = numbers.find(function (num) {
//return num > 10;
//});
//             0   1   2  3  4
var numbers = [3, 10, 56, 2, 48, 5];
//FindIndex - find the index of the first item that matches.
//it finds the index
var newNumbers = numbers.findIndex(function (num) {
  return num > 10;
});
console.log(newNumbers);
