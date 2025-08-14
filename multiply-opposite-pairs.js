function solution(numbers) {
  const result = []
  const length = numbers.length
  const mid = Math.floor(length / 2)

  // First, add the middle element if the array has odd length
  if (length % 2 !== 0) {
    result.push(numbers[mid])
  }

  // Then add pairs from center to edges
  for (let i = mid - 1; i >= 0; i--) {
    const left = numbers[i]
    const right = numbers[length - 1 - i]
    result.push(left * right)
  }

  return result
}

// Tests
console.log("Test 1 (Odd): ", solution([1, 2, 3, 4, 5])) // [3, 8, 5]
console.log("Test 2 (Even):   ", solution([1, 2, 3, 4])) // [4, 6]
console.log("Test 3 (Empty): ", solution([])) // []
console.log("Test 4 (Single element):", solution([7])) // [7]
console.log("Test 5 (Two elements):", solution([2, 5])) // [10]
console.log(
  "Test 6 (Example 2):",
  solution([-9, 1, 2, 10, 5, -3, 4, 7, 2, 1, 9])
) // [-9, 2, 21, 40, 5]
