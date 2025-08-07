// In our final task, you will process space exploration crew members' data for command assignments! You have been given a string of crew details separated by semicolons. Your mission is to split, clean, and display each member's information correctly. Let's get those crew details ready for launch!

// Space exploration crew members' data, containing their names, missions, and roles
let crewData =
  "Neil,Armstrong,Apollo 11,C;Buzz,Aldrin,Apollo 11,P;Michael,Collins,Apollo 11,CM"

crewData.split(";").forEach((member) => {
  let [name, lastName, mission, role] = member.split(",")
  console.log(`${name} ${lastName} ${mission} ${role}`)
})
