'use strict'

const { createReadStream, createWriteStream } = require('fs')
const { join } = require('path')
const { pipeline, Transform } = require('stream')

const createUpperCaseStream = () => (
  new Transform({
    transform(chunk, encoding, next) {
      const uppercased = chunk.toString().toUpperCase()

      next(null, uppercased)
    }
  })
)

pipeline(
  createReadStream(__filename),
  createUpperCaseStream(),
  createWriteStream(join(__dirname, 'out-uppercase.txt')),
  (error) => {
    if (error) {
      console.error(error)
      return
    }

    console.log('Success!')
  }
)