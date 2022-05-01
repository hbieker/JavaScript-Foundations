//Create new array with even numbers
var scores = [56, 43, 23, 65, 80, 32, 13]
var evenScores = []
for(let i=0;i<scores.length;i++)
{
    if (scores[i]%2 == 0)
    {
        evenScores.push(scores[i])
    }
}
console.log('Even scores are', evenScores)

//Filter can do the same as above code
let evenFilter = scores.filter(score=>score%2==0)
console.log('Even scores are', evenFilter)

//Map will modify array values. Mapping from one value to a new value
let mappedArray = evenFilter.map(score=>score*3)
console.log('New values * 3', mappedArray)

//Reduce
let totalVal = mappedArray.reduce((sum, val)=>sum+val, 0)
console.log('Sum of array is', totalVal)

//Filter, Map, Reduce in one command
//Get even values, take those values * 3, then sum the values
var scores1 = [56, 43, 23, 65, 80, 32, 13]
let sumValue = scores1.filter(score=>score%2==0).map(score=>score*3).reduce((sum, val)=>sum+val, 0)
console.log('sumValue is', sumValue)

//Sorting arrays with strings
let fruits = ['banana', 'pineapple', 'mango', 'apple']
fruits.sort()
console.log('sorted fruit array is', fruits)

//Sorting arrayws with numbers
var values2 = [9, 5, 1, 10, 7]
console.log('sorted number array is', values2.sort((a,b)=> a-b))

//Reverse
console.log('reversed array', values2.reverse())