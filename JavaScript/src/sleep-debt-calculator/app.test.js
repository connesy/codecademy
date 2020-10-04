#!/usr/bin/env node

const { getSleepHours, getActualSleepHours, getIdealSleepHours } = require('./app')

describe('Get sleep hours', () => {
  test('Monday', () => {
    expect(getSleepHours('monday')).toBe(8)
  })
  test('Tuesday', () => {
    expect(getSleepHours('tuesday')).toBe(7.5)
  })
  test('Wednesday', () => {
    expect(getSleepHours('wednesday')).toBe(6.5)
  })
  test('Thursday', () => {
    expect(getSleepHours('thursday')).toBe(8.5)
  })
  test('Friday', () => {
    expect(getSleepHours('friday')).toBe(8)
  })
  test('Saturday', () => {
    expect(getSleepHours('saturday')).toBe(7.5)
  })
  test('Sunday', () => {
    expect(getSleepHours('sunday')).toBe(8)
  })
})

test('Get actual sleep hours', () => {
  expect(getActualSleepHours()).toBe(54)
})

test('Get ideal hours', () => {
  expect(getIdealSleepHours()).toBe(52.5)
})

