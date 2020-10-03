#!/usr/bin/env node

const { validChoices, getRandomChoice, determineWinner } = require('./app')

test('Get random choice returns valid choice', () => {
  expect(validChoices).toContain(getRandomChoice());
});

describe('determineWinner', () => {
  describe('Computer plays rock', () => {
    const computerRock = 'rock';

    test('User plays rock', () => {
      expect(determineWinner(computerRock, 'rock')).toContain('tie');
    });

    test('User plays paper', () => {
      expect(determineWinner(computerRock, 'paper')).toContain('user');
    });

    test('User plays scissors', () => {
      expect(determineWinner(computerRock, 'scissors')).toContain('computer');
    });
  });

  describe('Computer plays paper', () => {
    const computerPaper = 'paper';

    test('User plays rock', () => {
      expect(determineWinner(computerPaper, 'rock')).toContain('computer');
    });

    test('User plays paper', () => {
      expect(determineWinner(computerPaper, 'paper')).toContain('tie');
    });

    test('User plays scissors', () => {
      expect(determineWinner(computerPaper, 'scissors')).toContain('user');
    });
  });

  describe('Computer plays scissors', () => {
    const computerScissors = 'scissors';

    test('User plays rock', () => {
      expect(determineWinner(computerScissors, 'rock')).toContain('user');
    });

    test('User plays paper', () => {
      expect(determineWinner(computerScissors, 'paper')).toContain('computer');
    });

    test('User plays scissors', () => {
      expect(determineWinner(computerScissors, 'scissors')).toContain('tie');
    });
  });

  test('User wins with bomb', () => {
    validChoices.forEach((computerChoice) => {
      expect(determineWinner(computerChoice, 'bomb')).toContain('cheating');
    });
  });
});