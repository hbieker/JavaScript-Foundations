//export class to make it available for other .js files
module.exports = class Person
{
    //class properties do not change with each object
    age = 25
    //location = "USA"
    get location()
    {
        return "USA"
    }

//constructor is a method that executes by default when you create an object of the class
//these instance variables are set when the object is created
constructor (firstName, lastName)
{
    this.firstName = firstName
    this.lastName = lastName
}

//method
fullName()
    {
        console.log(this.firstName+this.lastName)
    }
}

//create new object. Comment out to use this class from another file
//send first and last name to constructor at runtime
//let person = new Person("Tim", "Johnson")
//let person1 = new Person("Don", "Miller")
//console.log(person.age)
//console.log(person.location)
//console.log(person.fullName())
//console.log(person1.age)
//console.log(person1.location)
//console.log(person1.fullName())