// destructuring
const spaceship = {
    pilot: 'elon musk',
    guidance: 'marc zucc'
}
/* from the object spaceship, please pull out the VALUES stored at pilot and guidance */
const { pilot, guidance } = spaceship

console.log(pilot) // 'elon musk'
console.log(guidance) // 'marc zucc'

let nums = [10,20,30,40]
let [num1, num2, num3, num4] = nums

// key value assignment shortcut

const student = "Steven"
const teacher = "Vidhi"

const school = {
    teacher,
    student
}

// ES6 Spread Operator
// Array
let a = [1,2,3]
let b = [4,5,6]

let numbers = [...a, ...b] //[1,2,3,4,5,6]

// Objects

let obj1 = {name: "student", location:"NYC"}
let obj2 = {school: "flatironschool"}

let student = {...obj1, ...obj2} //{name: "student", location: "NYC", school: "flatironschool"}

// How to change single key inside an object?
student.location = "Houston"

// OR
student = {...student, location: "Houston"} // {name: "student", location: "Houston", school: "flatironschool"}


// Iterators
let array = [1,3,5,7,10,25,78]

//forEach
array.forEach(num => console.log(num))

//map
array.map(num => num*2)

//find
array.find(num => num%2 === 0) 

//filter
array.filter(num => num%2 === 0)

//reduce
array.reduce((acc,num) => num+acc, 5) //5 is initial acc

let char = ["a","b","c","d"]
char.reduce((acc, c) => acc + c.toUpperCase(), "String: ")

//for...of => used for array or string
let animals = ["dogs", "pigs", "cats"]

for(let animal of animals){
    console.log("Animal is:", animal)
}

let s = "abcde"

for(let char of s){
    console.log(char)
}

//for...in => used for object and can be applied to array depends on browser
let car = {
    make: 'Toyota',
    model: 'Tercel',
    year: '1996'
  }

for(let key in car){
    console.log(`${key} of this car is ${car[key]}`)
}

// Tasks

let array = [1, 5, 10, 26, 89, 90]

// 1. For each number in the array console log "Number is:" followed by the number
array.forEach(num => console.log("Number is:", num))

// 2. Return a new array with cube of numbers from current array
array.map(num => num*num*num)
array.map(num => Math.pow(num,3))

// 3. Return all the even numbers from the array
array.filter(num => num % 2 === 0)

// 4. Return only first odd number from the array
array.find(num =>  num % 2 !== 0)

// 5. Multiply first two numbers from the array and then multiply the result with next number
array.reduce((acc,num) =>  num * acc) 


// Higher Order Function
function highOrder(){
    return function(){
        console.log("I am a highorder function")
    }
}

// Declarative versus imperative

// Imperative
function sum(a){
    return function(b){
        return a+b
    }
}

sum(5)(10) //returns 15

// Declarative
let add = (a) => (b) =>  a + b

add(5)(10) //returns 15

// Pure function
function pure(num){
    return num * 10
}

// Impure function
let multiplier = 10
function impure(num){
    return num * multiplier
} 
