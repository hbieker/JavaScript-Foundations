//Objects are collections of properties

let person = {
    firstName:'John',
    lastName:'Doe', 
    age: 24,
    fullName: function()
    {
        console.log(this.firstName+this.lastName)
    }
}

console.log(person.fullName())
console.log(person.firstName)
console.log(person['lastName'])
person.firstName = 'Tim'  //Change name at runtime
console.log(person.firstName)
console.log(person['lastName'])

//Add propoerty at runtime
person.gender='Male'
console.log(person)

//Remove property
//delete person.gender
console.log(person)
console.log('gender' in person)

//Print all values of a javascript object
for(let key in person)
{
    console.log(person[key])
}