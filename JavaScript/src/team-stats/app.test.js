#!/usr/bin/env node

const { team } = require('./app')

describe('team', () => {
  test('team should be an object', () => {
    expect(typeof team).toBe('object')
  })

  describe('team players', () => {
    test('team has players', () => {
      expect(team._players.length).toBe(3)
    })

    describe('player properties', () => {
      test('each player has firstName', () => {
        team._players.forEach((player) => {
          expect(player).toHaveProperty('firstName')
        })
      })

      test('each player has lastName', () => {
        team._players.forEach((player) => {
          expect(player).toHaveProperty('lastName')
        })
      })

      test('each player has age', () => {
        team._players.forEach((player) => {
          expect(player).toHaveProperty('age')
        })
      })
    })

    test('get players', () => {
      expect(team.games).toMatchObject(team._games)
    })
  })

  describe('team games', () => {
    test('team has games', () => {
      expect(team._games.length).toBe(3)
    })

    describe('game properties', () => {
      test('each game has opponent', () => {
        team._games.forEach((game) => {
          expect(game).toHaveProperty('opponent')
        })
      })

      test('each game has teamPoints', () => {
        team._games.forEach((game) => {
          expect(game).toHaveProperty('teamPoints')
        })
      })

      test('each game has opponentPoints', () => {
        team._games.forEach((game) => {
          expect(game).toHaveProperty('opponentPoints')
        })
      })
    })

    test('get games', () => {
      expect(team.games).toMatchObject(team._games)
    })
  })

  describe('add new player', () => {
    test('add new player', () => {
      // Add player
      newPlayer = {firstName: 'Steph', lastName: 'Curry', age: 28}
      team.addPlayer(
        firstName=newPlayer.firstName,
        lastName=newPlayer.lastname,
        age=newPlayer.age
      )

      expect(team.players.length).toBe(4)
      expect(team.players.slice(-1)[0]).toMatchObject(newPlayer)
    })
  })

  describe('add new game', () => {
    test('add new game', () => {
      newGame = {opponent: 'LA', teamPoints: 43, opponentPoints: 54}
      team.addGame(
        opponent=newGame.opponent,
        teamPoints=newGame.teamPoints,
        opponentPoints=newGame.opponentPoints
      )

      expect(team.games.length).toBe(4)
      expect(team.games.slice(-1)[0]).toMatchObject(newGame)
    })
  })
})
