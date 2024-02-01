class Calculation {
  static add(x: number, y: number): number {
    // You can't use "this" on static method!
    return x + y
  }

  // Arrow-syntaxt
  static subtract = (x: number, y: number): number => {
    return x - y
  }
}

// You can use the method without creating an instance of that class!
let randomNumber = Calculation.add(22, 47)
console.log(randomNumber)

randomNumber = Calculation.subtract(randomNumber, 24)
console.log(randomNumber)
