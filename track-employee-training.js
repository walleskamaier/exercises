// You have a list of employees, each with their name, job title, and years since last training, all in a single string.

// Your task is to:

// Split and process each employee's information
// Check if they have gone more than 2 years without training
// If so, append a note indicating they need a training refresh
// Display the result in a clear and readable format
// TODO: Tokenize the employee data and determine if training refresh is needed
// TODO: Display the result in format `Name: <name> - Role: <role> - Years since training: <years> - <training status>`

const employeeData = "Alice,Developer,3|Bob,Manager,1|Charlie,Designer,4"
const employeeList = employeeData.split("|")

employeeList.forEach((employee) => {
  let token = employee.split(",")
  let name = token[0]
  let role = token[1]
  let years = Number(token[2])
  let trainingStatus = years > 2 ? "Needs training refresh" : "Up-to-date"
  console.log(
    `Name: ${name} - Role: ${role} - Years since training: ${years} - ${trainingStatus}`
  )
})
