const basketballPlayers = [
  { firstName: "Jill", lastName: "Huang", team: "Gators" },
  { firstName: "Janko", lastName: "Barton", team: "Sharks" },
  { firstName: "Wanda", lastName: "Vakulskas", team: "Sharks" },
  { firstName: "Jill", lastName: "Moloney", team: "Gators" },
  { firstName: "Luuk", lastName: "Watkins", team: "Gators" },
];

const footballPlayers = [
  { firstName: "Hanla", lastName: "Radosti", team: "32ears" },
  { firstName: "Tina", lastName: "Watkins", team: "Barleycorns" },
  { firstName: "Alex", lastName: "Patel", team: "32ears" },
  { firstName: "Jill", lastName: "Huang", team: "Barleycorns" },
  { firstName: "Wanda", lastName: "Vakulskas", team: "Barleycorns" },
];

/**
 * Exercise 1. Write a function that accepts two arrays of players and returns an
 * array of the players who play in both sports. The functions must have a O(N + M) time complexity
 * @param {Array} footballPlayers
 * @param {Array} basketballPlayers
 * @returns {Array<string>}
 */
function playersInBothTeams(footballPlayers, basketballPlayers) {
  const playersMap = {};
  const playersInBothTeams = [];

  for (let index = 0; index < footballPlayers.length; index++) {
    const player = footballPlayers[index];
    const fullName = `${player.firstName} ${player.lastName}`;

    playersMap[fullName] = true;
  }

  for (let index = 0; index < basketballPlayers.length; index++) {
    const player = basketballPlayers[index];
    const fullName = `${player.firstName} ${player.lastName}`;

    if (playersMap[fullName]) {
      playersInBothTeams.push(fullName);
    }
  }

  return playersInBothTeams;
}

console.log(playersInBothTeams(footballPlayers, basketballPlayers));
