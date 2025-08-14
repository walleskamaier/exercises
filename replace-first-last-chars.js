// Given mission name
const missionName = "Sort"

// TODO: Print the original first and last character of the mission name
console.log(missionName[0], missionName[missionName.length - 1])

// TODO: Create a new string with the first letter as 'P' and last letter as 'k', the other letters should remain unchanged.
const newMissionName = "P" + missionName.slice(1, -1) + "k"

// TODO: Print the updated mission name
console.log(newMissionName)
// Make sure it prints "Pork"
