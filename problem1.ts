function playWithAsterik(height: number): void {
  for (let i = 1; i <= height; i++) {
    let spaces = " ".repeat(height - i)
    let stars = "* ".repeat(i)
    console.log(spaces + stars)
  }
}

playWithAsterik(5)
