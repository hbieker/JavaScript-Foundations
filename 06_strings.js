//Working with strings is similar to arrays

let day = 'tuesday '
console.log(day.length)

//substring with slice
console.log(day.slice(0,4))

//choose a specific index
console.log(day[1]) //u

//split the string
splitDay = day.split('s')
console.log(splitDay) //creates an array - [ 'tue', 'day' ] 
console.log(splitDay[0]) // tue

//trim example
console.log(splitDay[1].length) //4
console.log(splitDay[1].trim().length) //3

//convert strings to numbers
let string1 = '25'
let string2 = '30'
let diff = parseInt(string2) - parseInt(string1)
console.log(diff)
//diff.toString() convert to string

//concatenate strings
let newDay = day + "is a fun day"
console.log(newDay)
let val = newDay.indexOf("day")
console.log('index of day is', val)
