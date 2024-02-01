class Animal {
  makeSound(): void {
    console.log("Make some sound")
  }
}
class Cat extends Animal {
  makeSound(): void {
    console.log("Meow")
  }
}
class Dog extends Animal {
  makeSound(): void {
    console.log("Bark")
  }
}

const animal = new Animal()
const cat = new Cat()
const dog = new Dog()

animal.makeSound()
cat.makeSound()
dog.makeSound()
