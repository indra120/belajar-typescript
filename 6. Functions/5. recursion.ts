const factorial = (n: number): number => {
  if (n === 0) {
    return 1
  } else {
    return n * factorial(n - 1)
  }
}
console.log(factorial(5))

const greetings = (message: string, count: number): void => {
  if (count > 0) {
    console.log(message)
    greetings(message, count - 1)
  }
}
greetings("Hello", 5)
