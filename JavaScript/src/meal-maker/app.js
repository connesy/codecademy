#!/usr/bin/env node

function isEntryPoint() {
  return require.main === module
}

const menu = {
  _courses: {
    _appetizers: [],
    _mains: [],
    _desserts: [],
  },

  get appetizers() {
    return this._courses._appetizers
  },
  set appetizers(course) {
    this._courses._appetizers = course
  },

  get mains() {
    return this._courses._mains
  },
  set mains(course) {
    this._courses._mains = course
  },

  get desserts() {
    return this._courses._desserts
  },
  set desserts(course) {
    this._courses._desserts = course
  },

  get courses() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts,
    }
  },

  _getCourseArray(courseName) {
    switch (courseName) {
      case 'appetizers':
        return this.appetizers

      case 'mains':
        return this.mains

      case 'desserts':
        return this.desserts
    }
  },

  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice,
    }

    const courseDishes = this._getCourseArray(courseName)
    courseDishes.push(dish)
  },

  getRandomDishFromCourse(courseName) {
    const courseDishes = this._getCourseArray(courseName)
    rand_index = Math.floor(Math.random() * courseDishes.length)

    return courseDishes[rand_index]
  },

  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers')
    const main = this.getRandomDishFromCourse('mains')
    const dessert = this.getRandomDishFromCourse('desserts')
    const totalPrice = appetizer.price + main.price + dessert.price

    return `Here is your meal: For appetizer, we have ${appetizer.name}. For the main course, we have ${main.name}, and for dessert; ${dessert.name}.
    The total price of the meal is ${totalPrice}.`
  }
}

if (isEntryPoint()) {
  // Add meal options to the courses
  menu.addDishToCourse(courseName='appetizers', dishName='Pea soup', dishPrice=4.0)
  menu.addDishToCourse(courseName='appetizers', dishName='Peking duck', dishPrice=7.0)
  menu.addDishToCourse(courseName='appetizers', dishName='Bread', dishPrice=2.0)

  menu.addDishToCourse(courseName='mains', dishName='Veal', dishPrice=10.0)
  menu.addDishToCourse(courseName='mains', dishName='Pork', dishPrice=12.0)
  menu.addDishToCourse(courseName='mains', dishName='Smoked salmon', dishPrice=11.0)

  menu.addDishToCourse(courseName='desserts', dishName='Chocolate cake', dishPrice=6.0)
  menu.addDishToCourse(courseName='desserts', dishName='Souffle', dishPrice=5.0)
  menu.addDishToCourse(courseName='desserts', dishName='Ice cream', dishPrice=4.0)

  console.log(menu.generateRandomMeal())
}

module.exports = {
  menu
}
