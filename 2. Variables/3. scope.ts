let nama = "Cindy" // Global scope

{
  let nama = "Rani" // Block scope
  console.log(nama) // Rani
}

console.log(nama) // Cindy
