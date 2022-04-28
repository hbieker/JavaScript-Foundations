//Collection of elements
//Using var because let does not allow re-declaring variables

var grades = Array(6) //length
var grades = new Array(76, 73, 89, 98, 56, 78)
var grades = [76, 73, 89, 98, 56, 78]

console.log(grades[2]) //retrieve 89
grades[0] = 20 //assign index 0 to 20
console.log(grades) //20, 73, 89, 98, 56, 78

console.log(grades.length) //length method (6)
grades.push(100) //20, 73, 89, 98, 56, 78, 100 (adds 100 to end)
console.log(grades)
grades.pop() //20, 73, 89, 98, 56, 78 (removes from end)
console.log(grades)
grades.unshift(0) //0, 20, 73, 89, 98, 56, 78 (adds to beginning)
console.log(grades)
