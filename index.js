/**
 * Part 1: Creating Variables and Constants
 * In this file you should define the following variables with the exact names
 *
 * 1. fullName      -> assign it a value of your full name
 * 2. yearOfBirth   -> assign it a value of your year of birth
 * 3. hobby         -> assign it a value of your favorite hobby
 * 4. funFact       -> assign it a value of some fun fact about yourself
 * 5. image         -> assign it a value of a url of your image or ant image that represents you online
 */

// Part 1 answer 👇🏻 ...
let fullName= "Yousef alshawaf";
let yearOfBirth= 1995;
let hobby= "Kick boxing";
let funFact= "Coding can makes you an entrepreneur";
const image = "https://storage.googleapis.com/pod_public/750/192064.jpg";






/**
 * Part 2: String Interpolation
 * Create the following new variables that interpolate
 * the variables defined above into strings.
 *
 * 1. fullNameString      -> assign it to: My name is {Yousef alshawaf}
 * 2. yearOfBirthString   -> assign it to: I am {29}, and make sure you calculate your age from your year of birth
 * 3. hobbyString         -> assign it to: My hobby is {Kick boxing}
 * 
 * Uncomment the following lines and start interpolating.
 * You can uncomment a line by removing the // at the start
 */

const fullNameString = `My name is ${fullName}`;
const yearOfBirthString =`I am ${2024-1995}`;
const hobbyString = `My hobby is ${hobby}`;




/**
 * Part 3: Re-assignment
 * Increment your hacker score
 * */

let stars = 0;

function incrementBy1() {
  // Increment stars by 1 👇🏻
  stars=stars + 1
}
function decrementBy1() {
  // decrement stars by 1 👇🏻
  stars=stars - 1
}

function incrementBy2() {
  // Increment stars by 2 👇🏻
  stars=stars + 2
}
function decrementBy2() {
  // decrement stars by 2 👇🏻
  stars=stars - 2 
}
