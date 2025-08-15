function solution(numbers) {
  const result = []
  let left, right

  if (numbers.length % 2 === 1) {
    const middle = Math.floor(numbers.length / 2)
    result.push(`${numbers[middle]} 0`)
    left = middle - 1
    right = middle + 1
  } else {
    left = numbers.length / 2 - 1
    right = left + 1
  }

  while (left >= 0 && right < numbers.length) {
    result.push(`${numbers[left]} ${numbers[right]}`)
    left--
    right++
  }

  return result
}

console.log(solution([1, 2, 3, 4, 5]));  // ["3 0", "2 4", "1 5"]
console.log(solution([1, 2, 3, 4]));     // ["2 3", "1 4"]