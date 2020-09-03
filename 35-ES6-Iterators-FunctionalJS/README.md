# ES6 syntax, Iterators, & Functional JS

![](https://www.jstips.co/assets/images/jstips-animation.gif)

---

#### ES6:
* ES6 is basically EcmaScript 6 / EcmaScript 2015.
* EcmaScript is not any scripting language instead a standard that Javascript is based upon. So, ES6 is a new version or new standard of Javascript.

---

#### destructuring

```js
const spaceship = {
    pilot: 'elon musk',
    guidance: 'marc zucc'
}
/* from the object spaceship, please pull out the VALUES stored at pilot and guidance */
const { pilot, guidance } = spaceship

console.log(pilot) // 'elon musk'
console.log(guidance) // 'marc zucc'

```

---

#### key value assignment shortcut

```javascript
const pizza = 'meat-lover'
const restaurant = 'New York Pizza™️'

const pizzaObj = {
  pizza: pizza,
  restaurant: restaurant
}
```

---

#### ES6 Spread Operator

```js
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

```
---

#### ES6 Iterators
* .forEach
* .map
* .find
* .filter
* .reduce
* for...in
* for...of

---

### Tasks:
1. For each number in the array console log "Number is:" followed by the number
2. Return a new array with cube of numbers from current array
3. Return all the even numbers from the array
4. Return only first odd number from the array
5. Multiply first two numbers from the array and then multiply the result with next number

---

### Highorder functions:
* Function that accept other functions as arguments and/or return a function

### Callback functions:
* Functions passed as an argument to another function or A callback is a function that is to be executed after another function has finished executing

### Declarative versus imperative
* The way we write code! 

### Pure functions
* The function always returns the same result if the same arguments are passed in. It does not depend on any state, or data, change during a program’s execution. It must only depend on its input arguments
* Has no side-effects, meaning it doesn't change anything in the program

### composition
* Combine two or more functions to perform some computation

### Recursion
* Function calling itself 
```javascript=
function abc(num){
    if(num<2){
        console.log(num)
        return num
    }
    else{
            console.log("from else:",num)
          num--
        return abc(num)
      
    }
  
}
```

