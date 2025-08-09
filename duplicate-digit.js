function solution(n) {
  let result = 0
  let position = 1

  while (n > 0) {
    const digit = n % 10
    result = digit * 10 * position + digit * position + result
    position *= 100
    n = Math.floor(n / 10)
  }

  return result
}

console.log(solution(1234))
