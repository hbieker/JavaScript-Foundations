//Collection of elements
//Using var because let does not allow re-declaring variables

var grades = Array(6) //length
var grades = new Array(76, 73, 89, 98, 56, 78)
var grades = [76, 73, 89, 98, 56, 78]

console.log('retrieve 89')
console.log(grades[2]) //retrieve 89
grades[0] = 20 //assign index 0 to 20
console.log ('Added 20 to index 0')
console.log(grades) //20, 73, 89, 98, 56, 78

console.log('Get length of array')
console.log(grades.length) //length method (6)
grades.push(100) //20, 73, 89, 98, 56, 78, 100 (adds 100 to end)
console.log('Add 100 to end of array with push')
console.log(grades)
grades.pop() //20, 73, 89, 98, 56, 78 (removes from end)
console.log('Remove 100 from array with pop')
console.log(grades)
grades.unshift(0) //0, 20, 73, 89, 98, 56, 78 (adds to beginning)
console.log('Add 0 to beginning of array with unshift')
console.log(grades)
console.log('Return index for value 78')
console.log(grades.indexOf(78)) //Tell me index for value 78
console.log('Check if value 120 is present')
console.log(grades.includes(120)) //Tell me if 120 is present

subgrades = grades.slice(2,5) //Return a portion of the array
console.log('Return portion of array with slice')
console.log(subgrades)

console.log('Get sum and average of array')
var sum = 0
var avg = 0
for(let i=0; i<grades.length; i++)
{
    //console.log(grades[i])
    sum = sum + grades[i]
}
console.log(sum)
avg = sum / grades.length
console.log(avg)

//Using reduce. sum is the accumulator as it iterates through each element
//Performs the same as the for loop above
let total = grades.reduce((sum, grades)=>sum+grades, 0)
console.log('Using reduce to get total')
console.log(total)