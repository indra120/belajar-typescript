class Human {
  // Method is a function inside an object
  breath(): void {
    console.log("Breathing...") // This is also a method
  }
}

const people1 = new Human()

console.log(people1)

people1.breath()
