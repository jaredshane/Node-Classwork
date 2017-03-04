function func1() {
  if (true) {
    let tmp = 123
  }
  // console.log("func1 tmp", tmp); //tmp is not defined, tmp is scoped to if block
}

// func1()



(function func2() {
  let foo = 5;
  if (true) {
    let foo = 10;
    // console.log("foo inside if", foo);
  }
  // console.log("foo outside if", foo);
}())

const MAX_CAT_SIZE = { weight: 3000}; //always an object but can change the properties of it
MAX_CAT_SIZE.weight = 9001;
MAX_CAT_SIZE.height = 100;
// console.log("MAX_CAT_SIZE", MAX_CAT_SIZE);



var reflect = function (val) {
  return val;
}
//same as above
// const reflect = value => value; //second value is what it is returning

//if two arguments
// const reflect = (value, num) => value;

//if doesnt take an argument, () needed
// const reflect = () => 1+2;



var numbers = [1,2,3,4,5,6];
var timesTwo = numbers.map(function (number) {
  return number * 2;
});
// console.log("timesTwo", timesTwo);

// let timesTwo = numbers.map((number) => number * 2)

// console.log("timesTwo", timesTwo);



const wow = "Hi there",
      es6 = "ES6",
      myNum = () => console.log("howdy");

let myOldObj = {
  wow: wow,
  es6: es6,
  myNum: myNum
};
let myNewObj = {wow, es6, myNum}

// console.log("myNewObj", myNewObj);




const dog = {
  name: "Snoopy",
  breed: "Beagle",
  speak: () => "woof"
}

// const myDog = dog.name;

const { name: myName, speak} = dog

// console.log("my dog's name", myName, "my dog speaks", speak());



const [a,b] = [5,10];

// console.log("a, b", a, b);

let x = [1,2,3,4,5]
// let [y,z, ...theOthers] = x
// console.log("theOthers", theOthers);

let [,, ...theOthers2] = x
// console.log("theOthers2", theOthers2);



let countries = ['Moldova', 'Ukraine']

let otherCountries = ['USA', 'Japan']

let meldedCountries = [...countries, ...otherCountries]
// console.log("meldedCountries", meldedCountries);


var arr = ['1', '2', '3'];
// for (var i = 0; i < arr.length; i++) {
//   var elem = arr[i]
// }
//
// arr.forEach(function (elem) {
//   console.log("elem", elem);
// })

for (let [index, elem] of arr) {
  console.log("elem", index, elem);
}
