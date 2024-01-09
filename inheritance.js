//----------------------------------------//
//  PROTOTYPAL INHERITANACE (FUNCTIONAL)  //
//----------------------------------------//

// const wolf = {
//   howl: function () {
//     console.log(this.name + ': awooooo')
//   }
// }

// const dog = Object.create(
//   wolf,
//   {
//     woof: {
//       value: function () {
//         console.log(this.name + ': woof')
//       }
//     }
//   }
// )

// function createDog (name) {
//   return Object.create(
//     dog, {
//       name: {
//         value: name + ' the dog'
//       }
//     }
//   )
// }

// // const rufus = Object.create(dog, {
// //   name: {
// //     value: 'Rufus the dog'
// //   }
// // })

// const rufus = createDog('Rufus')

// rufus.woof()
// rufus.howl()

// // Check object prototype
// console.log(Object.getPrototypeOf(rufus) === dog)
// console.log(Object.getPrototypeOf(dog) === wolf)


//-----------------------------------------//
//  PROTOTYPAL INHERITANACE (CONSTRUCTOR)  //
//-----------------------------------------//

// function Wolf (name) {
//   this.name = name
// }

// Wolf.prototype.howl = function () {
//   console.log(this.name + ': awoooooooooooooo')
// }

// function Dog (name) {
//   Wolf.call(this, name + ' the dog')
// }

// function inherit (prototype) {
//   function ChainLink(){}
//   ChainLink.prototype = prototype

//   return new ChainLink()
// }

// Dog.prototype = inherit(Wolf.prototype)

// // // ES5+
// Dog.prototype = inherit(Wolf.prototype)

// //NodeJS
// const util = require('util')
// util.inherits(Dog, Wolf)

// Dog.prototype.woof = function () {
//   console.log(this.name + ': Woof')
// }

// const rufus = new Dog('Rufus')

// rufus.woof()
// rufus.howl()

// console.log(Object.getPrototypeOf(rufus) === Dog.prototype)
// console.log(Object.getPrototypeOf(Dog.prototype) === Wolf.prototype)

//------------------------------------------//
//  PROTOTYPAL INHERITANACE (CLASS SYNTAX)  //
//------------------------------------------//

class Wolf {
  constructor (name) {
    this.name = name
  }

  howl () {
    console.log(this.name + ': awooooooooooo')
  }
}

class Dog extends Wolf {
  constructor (name) {
    super(name + ' the dog')
  }

  woof () {
    console.log(this.name + ': woof')
  }
}


const rufus = new Dog('Rufus')

rufus.woof()
rufus.howl()

console.log(Object.getPrototypeOf(rufus) === Dog.prototype)
console.log(Object.getPrototypeOf(Dog.prototype) === Wolf.prototype)