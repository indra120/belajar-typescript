class Human {
  name = ""
  age = 0
  gender = ""

  setName(newName: string): void {
    this.name = newName // "this" refers to the current object
  }
}

const people1 = new Human()
console.log(people1)

people1.setName("Indra")
people1.age = 19
people1.gender = "male"

console.log(people1)