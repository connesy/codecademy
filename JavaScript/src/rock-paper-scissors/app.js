#!/usr/bin/env node

function UserException(message) {
  this.message = message
  this.name = 'UserException'
}

function isEntryPoint() {
  return require.main === module
}

const prompt = require('prompt-sync')({ sigint: true })
const validChoices = ['rock', 'paper', 'scissors']

function getUserChoice() {
  const userInput = prompt("Pick one of 'rock', 'paper' or 'scissors': ")
  const userChoice = userInput.toLowerCase()

  if ([...validChoices, 'bomb'].includes(userChoice)) {
    return userChoice
  } else {
    throw new UserException(`"${userInput}" is not a valid choice`)
  }
}

function getRandomChoice() {
  const randomIndex = Math.floor(Math.random() * validChoices.length)
  const randomChoice = validChoices[randomIndex]
  return randomChoice
}

function determineWinner(computerChoice, userChoice) {
  switch (userChoice) {
    case 'bomb':
      return 'The user won (by cheating)!'

    case computerChoice:
      return 'The game is a tie'

    case 'rock':
      return computerChoice === 'paper' ? 'The computer won!' : 'The user won!'

    case 'paper':
      return computerChoice === 'scissors' ? 'The computer won!' : 'The user won!'

    case 'scissors':
      return computerChoice === 'rock' ? 'The computer won!' : 'The user won!'
  }
}

function playRound() {
  const userChoice = getUserChoice()
  const computerChoice = getRandomChoice()
  const message = determineWinner(computerChoice, userChoice)
  console.log(message)
  return message
}

// Entrypoint
if (isEntryPoint()) {
  playRound()
}

module.exports = {
  validChoices,
  getRandomChoice,
  determineWinner,
}
