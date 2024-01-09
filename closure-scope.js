// function outerFn () {
//   var foo = true

//   function print() {
//     console.log(foo)
//   }

//   print() // -> true

//   foo = false

//   print()// -> false
// }

// outerFn()

//-------------------------------------//

// function outerFn () {
//   var foo = true

//   function print(foo) { // -> at naming collision takes the nearest closure scope
//     console.log(foo)
//   }

//   print(1) // -> 1

//   foo = false

//   print(2)// -> 2
// }

// outerFn()

//-------------------------------------//

// function outerFn () {
//   var foo = true
// }

// outerFn()
// console.log(foo) // -> ReferenceError

//-------------------------------------//

function init (type) {
  var id = 0

  return (name) => {
    id += 1

    return {
      id,
      type,
      name
    }
  }
}

const createUser = init('user')
const createBook = init('book')
// init() return a function, so we can use createUser and createBook as new functions

// createUser = (name) => {
//   id +=1
//   return {
//     id,
//     type: 'user',
//     name
//   }
// }

const dave = createUser('Dave')
const annie = createUser('Annie')
const ncb = createBook('Node Cookbook')

console.log(dave)
console.log(annie)
console.log(ncb)

//-------------------------------------//

// function createSigner (secret) {
//   const keyPair = createKeyPair(secret)

//   return function (content) {
//     return {
//       signed: cryptoSign(content, keyPair.privateKey),
//       publickKey: keyPair.publickKey
//     }
//   }
// }

// const sign = createSigner('super secret thing')
// const signedcontent = sign('sign me')
// const moreSignedContent = sign('sign me as well')

//-------------------------------------//

function Wolf (name) {
  const howl = () => {
    console.log(name + ': awoooooo')
  }

  return {
    howl
  }
}

function dog (name) {
  name = name + ' the dog'

  const woof = () => {
    console.log(name + ': woof')
  }

  return {
    ...Wolf(name),
    woof
  }
}

const rufus = dog('Rufus')

rufus.woof()
rufus.howl()
