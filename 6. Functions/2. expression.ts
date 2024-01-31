let greeting: () => void

greeting = function(): void {
  console.log("Hi Mom!")
}
greeting()

greeting = function(): void {
  console.log("Hello world!")
}
greeting()
