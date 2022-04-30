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