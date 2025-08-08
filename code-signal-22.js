function solution(n) {
  let digit_mult = 1
  let hasOdd = false

  while (n > 0) {
    let digit = n % 10
    if (digit % 2 !== 0) {
      digit_mult *= digit
      hasOdd = true
    }
    n = Math.floor(n / 10)
  }
  return hasOdd ? digit_mult : 0
}

console.log(solution(2468)) 
