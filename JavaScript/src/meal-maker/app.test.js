#!/usr/bin/env node

const { menu } = require('./app')

test('Initially empty menu', () => {
  const expected_courses = {
    _appetizers: [],
    _mains: [],
    _desserts: []
  }

  expect(menu._courses).toMatchObject(expected_courses)
})
