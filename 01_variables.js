//Run from terminal with "node filename.js"

console.log("Hello, World")

//Variables do not require a data type
//ES5 engine uses only "var"
//ES6 engine can use "let", "const". constant variables cannot be reassigned

//SCOPE LEVEL DIFFERENCES
//var declared at the top are global and can be used anywhere
//var in if statement are global
//var in a function are only available in the function itself

//let declared at the top are global and can be used anywhere
//let declared in if block are not visible outside
//let in a function is only available in the function itself

//both var and let can be reinitialized (a new value assigned)
//const is similar to let, but cannot be reinitialized (it's a constant)


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

