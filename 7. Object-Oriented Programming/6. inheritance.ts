class Animal {
  breath(): void {
    console.log("Breathing...")
  }
}
class Cat extends Animal {
  walk(): void {
    console.log("Walking...")
  }
}
class Bird extends Animal {
  fly(): void {
    console.log("Flying...")
  }
}

const animal = new Animal()
const cat = new Cat()
const bird = new Bird()

animal.breath()

cat.breath()
cat.walk()

bird.breath()
bird.fly()
