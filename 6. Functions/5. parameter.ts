// Function with parameter
const halo = (nama: string): void => {
  console.log("Halo %s!", nama)
}
halo("Indra")

// Unknown parameter
const greeting = (message: unknown) => {
  // console.log(message) // error
  message = String(message)
  console.log(message)
}
greeting("Hi Mom!")

// Optional parameter
const $greeting = (message?: unknown) => {
  if (message === undefined) {
    message = "Hello world!"
  }
  console.log(message)
}
$greeting()

// Default parameter value
const _greeting = (message = "Hello") => {
  console.log(message)
}
_greeting()
