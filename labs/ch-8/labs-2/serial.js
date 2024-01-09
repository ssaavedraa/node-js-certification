'use strict'
const { promisify } = require('util')

const print = (err, contents) => { 
  if (err) console.error(err)
  else console.log(contents) 
}

const opA = (cb) => {
  setTimeout(() => {
    cb(null, 'A')
  }, 500)
}

const opB = (cb) => {
  setTimeout(() => {
    cb(null, 'B')
  }, 250)
}

const opC = (cb) => {
  setTimeout(() => {
    cb(null, 'C')
  }, 125)
}

const opAPromise = promisify(opA)
const opBPromise = promisify(opB)
const opCPromise = promisify(opC)

const run = async () => {
  print(null, await(opAPromise()))
  print(null, await(opBPromise()))
  print(null, await(opCPromise()))
}

run().catch(err => console.error(err))