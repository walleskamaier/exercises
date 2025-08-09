function solution(n) {
  let reversed = 0

  while (n > 0) {
    let digit = n % 10
    reversed = reversed * 10
    reversed += digit
    n = Math.floor(n / 10)
  }

  return reversed
}

console.log(solution(12345)) // Output should be 54321
