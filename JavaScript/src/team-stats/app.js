#!/usr/bin/env node

function isEntryPoint() {
  return require.main === module
}

const team = {
  _players: [
    {firstName: 'Pablo', lastName: 'Sanchez', age: 11},
    {firstName: 'Lærke', lastName: 'Mejlgaard', age: 29},
    {firstName: 'Stefan', lastName: 'Mejlgaard', age: 27}
  ],
  _games: [
    {opponent: 'Broncos', teamPoints: 42, opponentPoints: 27},
    {opponent: 'Seattle', teamPoints: 15, opponentPoints: 18},
    {opponent: 'New York', teamPoints: 58, opponentPoints: 2}
  ],

  get players() {
    return this._players
  },

  get games() {
    return this._games
  },

  addPlayer(firstName, lastName, age) {
    newPlayer = {
      firstName: firstName,
      lastName: lastName,
      age: age
    }

    team.players.push(newPlayer)
  },

  addGame(opponent, teamPoints, opponentPoints) {
    newGame = {
      opponent: opponent,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints
    }

    team.games.push(newGame)
  }
}

if (isEntryPoint()) {

  // Add three new players
  team.addPlayer(firstName='Steph', lastName='Curry', age=28)
  team.addPlayer(firstName='Lisa', lastName='Leslie', age=44)
  team.addPlayer(firstName='Bugs', lastName='Bunny', age=76)

  // Add three new games
  team.addGame(opponent='LA', teamPoints=15, opponentPoints=54)
  team.addGame(opponent='IL', teamPoints=84, opponentPoints=35)
  team.addGame(opponent='WY', teamPoints=34, opponentPoints=52)

  console.log(team.players)
  console.log(team.games)
}


module.exports = {
  team
}
