class Human {
  name = "" // Property
  age = 0
  gender = ""
}

const people1 = new Human() // Object is an instance of a class
console.log(people1)

people1.name = "Indra" // Change the value of property
people1.age = 19
people1.gender = "male"

console.log(people1)
console.log(people1.name) // Accessing the property
