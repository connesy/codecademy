#!/usr/bin/env node

function isEntryPoint() {
  return require.main === module
}

const weekdays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']

function getSleepHours(day) {
  switch (day) {
    case 'monday':
      return 8
      break
    case 'tuesday':
      return 7.5
      break
    case 'wednesday':
      return 6.5
      break
    case 'thursday':
      return 8.5
      break
    case 'friday':
      return 8
      break
    case 'saturday':
      return 7.5
      break
    case 'sunday':
      return 8
      break
  }
}

function getActualSleepHours() {
  let totalHours = 0
  weekdays.forEach((weekday) => {
    totalHours += getSleepHours(weekday)
  })

  return totalHours
}

function getIdealSleepHours() {
  const idealHours = 7.5 * weekdays.length
  return idealHours
}

function calculateSleepDebt() {
  const actualSleepHours = getActualSleepHours()
  const idealSleepHours = getIdealSleepHours()

  const hourDiff = actualSleepHours - idealSleepHours

  if (hourDiff === 0) {
    console.log(`The user got the perfect amount of sleep: ${hourDiff} hours.`)
  } else if (actualSleepHours > idealSleepHours) {
    console.log(`The user got ${hourDiff} hours more sleep than needed.`)
  } else {
    console.log(`The user got ${hourDiff} hours less sleep than necessary.`)
  }
}

if (isEntryPoint()) {
  calculateSleepDebt()
}

module.exports = {
  getSleepHours,
  getActualSleepHours,
  getIdealSleepHours,
  calculateSleepDebt,
}
