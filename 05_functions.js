//Block of Code
//Keyword function, name, parameters

function add(a,b)
{
    return a+b
}

let sum = add(2,3)
console.log(sum)

//Anonymous functions - do not have a name
//Can be assigned to a variable
let sumOfIntegers = function(c,d)
{
    return c+d
}

//Simple format of the above function
let sumOfNumbers = (c,d)=> c+d
console.log(sumOfNumbers(5,5))