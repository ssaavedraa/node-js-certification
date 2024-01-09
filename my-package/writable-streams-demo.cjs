'use strict'
// const fs = require('fs')
// const writable = fs.createWriteStream('./out')
// writable.on('finish', () => console.log('finished writing'))
// writable.write('A\n')
// writable.write('B\n')
// writable.write('C\n')
// writable.end('nothing more to write')

const {Writable} = require('stream')
const createWriteStream = (data) => {
  return new Writable({
    objectMode: true,
    write (chunk, enc, next) {
      data.push(chunk)
      next()
    }
  })
}
const data = []
const writable = createWriteStream(data)
writable.on('finish', () => console.log('finished writing', data))
writable.write('A\n')
writable.write('B\n')
writable.write('C\n')
writable.write(1)
writable.end('nothing more to write')
