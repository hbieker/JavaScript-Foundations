//Run from terminal with "node filename.js"

console.log("Hello, World")

//Variables do not require a data type
//ES5 engine uses only "var"
//ES6 engine can use "let", "const". constant variables cannot be reassigned

let b=5 
let c="test"
let toggle=true

//number, string, boolean
//additional data types are null and undefined
//redeclaring variables is not possible with let, but possible with var
//reassigning variables is possible with let, but not const

console.log(b)
console.log(typeof(b))
console.log(c)
console.log(typeof(c))
console.log(toggle)
console.log(typeof(toggle))

//reverse boolean
console.log(!toggle)

