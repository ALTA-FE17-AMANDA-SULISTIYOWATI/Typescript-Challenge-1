function ubahHuruf(sentence: string): string {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const shift = 10 // menentukan jumlah geseran

  return sentence
    .toUpperCase() // Mengubah teks menjadi huruf kapital
    .split("") // Memecah teks menjadi array karakter
    .map((char) => {
      // Mengenkripsi setiap karakter
      if (alphabet.includes(char)) {
        const index = (alphabet.indexOf(char) + shift) % 26
        return alphabet[index]
      } else {
        return char
      }
    })
    .join("") // Menggabungkan array karakter kembali menjadi string
}

console.log(ubahHuruf("SEPULSA OKE")) // COZEVCK YUO
console.log(ubahHuruf("ALTERRA ACADEMY")) // KVDOBBK KMKNOWI
console.log(ubahHuruf("INDONESIA")) // SXNYXOCSK
console.log(ubahHuruf("GOLANG")) // QYVKXQ
console.log(ubahHuruf("PROGRAMMER")) // ZBYQBKWWOB
