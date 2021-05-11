// @Milad: Hi :-) I did not really see the need to implement a separate function that applies the square function
// to all the elements of the originalNumbers because this is done more convenient simply by map I think (solution 1).
// But for educational purposes I implemented a map function (expression) that does exactly the same thing as map
// just to practice passing a function to a function (solution 2)

const originalNumbers = [1, 2, 3, 4, 5, 6];

// solution 1
const squareNumber = number => number**2;
const resultingNumbers = originalNumbers.map(squareNumber);
console.log (resultingNumbers);

// solution 2
const map = (array, fun) => array.map(fun);
const resultingNumbers2 = map(originalNumbers, squareNumber);
console.log(resultingNumbers2);
