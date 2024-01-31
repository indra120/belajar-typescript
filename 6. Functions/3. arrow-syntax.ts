const sayHello = (): void => {
  console.log("Hello!")
}
sayHello()

let greeting: () => string

greeting = (): string => {
  return "Hello"
}
console.log("%s world!", greeting())

greeting = (): string => "Hi"
console.log("%s Mom!", greeting())
