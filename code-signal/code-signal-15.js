// Your latest assignment involves debugging a segment of code in the Employee Information Management System for your JavaScript project. There is code designed to neatly present employee data, but it is currently not functioning correctly. Can you identify the error and correct it?

// Employee Information Management System

let employeeData = "Name: John Doe, Age: 30, Role: Engineer"

// Split employee data into an array of strings
let employeeInfoArray = employeeData.split(",")

let cleanedData = ""

employeeInfoArray.forEach((info) => {
  cleanedData += info.trim() + "\n"
})

console.log(cleanedData)

// Expected Output:
// Name: John Doe
// Age: 30
// Role: Engineer
