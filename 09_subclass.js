//One class can inherit the properties & methods of another class (superclass / subclass)

const Person = require('./08_classes')
class Pet extends Person
{

get location()
{
    return "Animal Shelter"
}
constructor (firstName, lastName)
{
    //call parent class constructor
    super(firstName,lastName)
}
}

let pet = new Pet("Sammy", "Dog")
pet.fullName()
console.log(pet.location)
