/**************************************************************************
 * Destructuring Exercise
 * 
 * What does the following code return/print?
 * ***********************************************************************/

/************** Object Destructuring 1 **************/
let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
let {numPlanets, yearNeptuneDiscovered} = facts;

console.log(numPlanets); // answer: 8
console.log(yearNeptuneDiscovered); // answer: 1846


/************** Object Destructuring 2 **************/
let planetFacts = {
  numberPlanets: 8,
  yearNeptuneDiscovered: 1846,
  yearMarsDiscovered: 1659
};

let {numberPlanets, ...discoveryYears} = planetFacts;

console.log(discoveryYears);
  // answer: { yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659 }


/************** Object Destructuring 3 **************/
function getUserData({firstName, favoriteColor="green"}){
  return `Your name is ${firstName} and you like ${favoriteColor}`;
}

getUserData({firstName: "Alejandro", favoriteColor: "purple"})
  // answer: 'Your name is Alejandro and you like purple'
getUserData({firstName: "Melissa"})
  // answer: 'Your name is Melissa and you like green'
getUserData({}) 
  // answer: 'Your name is undefined and you like green'


/************** Array Destructuring 1 **************/
let [first, second, third] = ["Maya", "Marisa", "Chi"];

console.log(first); // answer: 'Maya'
console.log(second); // answer: 'Marisa'
console.log(third); // answer: 'Chi'


/************** Array Destructuring 2 **************/
let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
  "Raindrops on roses",
  "whiskers on kittens",
  "Bright copper kettles",
  "warm woolen mittens",
  "Brown paper packages tied up with strings"
]

console.log(raindrops); // answer: 'Raindrops on roses'
console.log(whiskers); // answer: 'whiskers on kittens'
console.log(aFewOfMyFavoriteThings);
  // answer: [
  //           'Bright copper kettles', 
  //           'warm wollen mittens',
  //           'Brown paper packages tied up with strings'
  //         ]


/************** Array Destructuring 3 **************/
let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]]

console.log(numbers) // answer: [10, 30, 20]


/**************************************************************************
 * ES2015 Refactoring
 * 
 * In this exercise, you’ll refactor some ES5 code into ES2015.
 * ***********************************************************************/

/************** ES5 Assigning Variables to Object Properties **************/
// var obj = {
//   numbers: {
//     a: 1,
//     b: 2
//   }
// };

// var a = obj.numbers.a;
// var b = obj.numbers.b;

// ES2015 Object Destructuring
const obj = {
  numbers: { a: 1, b: 2 }
}

const { a, b } = obj.numbers;


/************** ES5 Array Swap **************/
// var arr = [1, 2];
// var temp = arr[0];
// arr[0] = arr[1];
// arr[1] = temp;

// ES2015 One-Line Array Swap with Destructuring
const arr = [1, 2];
[arr[1], arr[0]] = [arr[0], arr[1]];


/************** raceResults()  **************/
// Write a function called raceResults which accepts a single array argument. 
// It should return an object with the keys first, second, third, and rest.

// first: the first element in the array
// second: the second element in the array
// third: the third element in the array
// rest: all other elements in the array
// Write a one line function to make this work using
// An arrow function
// Destructuring
// ‘Enhanced’ object assignment (same key/value shortcut)

// raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre'])
/*
  {
    first: "Tom",
    second: "Margaret",
    third: "Allison",
    rest: ["David", "Pierre"]
  }
*/

const raceResults = ([first, second, third ...rest]) => ({ first, second, third, rest });