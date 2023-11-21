function caesarCipher(offset: number, input: string): string {
  const alphabetLength = 26
  offset = offset % alphabetLength

  return input
    .toLowerCase()
    .split("")
    .map((char) => {
      if (char === " ") {
        return char //abaikan spasi
      }
      let shiftedCode = char.charCodeAt(0) + offset

      if (char >= "a" && char <= "z") {
        shiftedCode =
          ((shiftedCode - 97 + alphabetLength) % alphabetLength) + 97
      }

      return String.fromCharCode(shiftedCode)
    })
    .join("")
}

console.log(caesarCipher(3, "abc")) // def
console.log(caesarCipher(2, "alta")) // cnvc
console.log(caesarCipher(10, "alterraacademy")) // kvdobbkkmknowi
console.log(caesarCipher(1, "abcdefghijklmnopqrstuvwxyz"))
// bcdefghijklmnopqrstuvwxyza
console.log(caesarCipher(1000, "abcdefghijklmnopqrstuvwxyz"))
// mnopqrstuvwxyzabcdefghijkl
