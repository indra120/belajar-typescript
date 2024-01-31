let usia = 15
let status: string

status =
  usia >= 60
    ? "Lansia"
    : usia >= 18 && usia < 60
    ? "Dewasa"
    : usia > 12 && usia < 18
    ? "Remaja"
    : "Anak-anak"

console.log(status)
