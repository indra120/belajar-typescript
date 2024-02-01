class Human {
  // get called when creating an instance of this class
  constructor(name: string, age: number, gender: string) {
    this.name = name
    this.age = age
    this.gender = gender
  }

  name: string
  age: number
  gender: string
}

const people1 = new Human("Indra", 19, "male")

console.log(people1)