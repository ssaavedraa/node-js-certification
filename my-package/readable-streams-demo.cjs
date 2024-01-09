'use strict'
// const fs = require('fs')
// const readable = fs.createReadStream(__filename)
// readable.on('data', (data) => console.log(' got data', data))
// readable.on('end', (data) => console.log(' finished reading'))

// const {Readable} = require('stream')
// const createReadStream = () => {
//   const data = ['some', 'data', 'to', 'read']
//   return new Readable({
//     encoding: 'utf-8',
//     read () {
//       if (data.length === 0) this.push(null)
//       else this.push(data.shift())
//     }
//   })
// }

// const readable = createReadStream()
// readable.on('data', (data) => {console.log('got data', data)})
// readable.on('end', () => {console.log('finished reading')})

const {Readable} = require('stream')
const readable = Readable.from(['some', 'data', 'to', 'read'])
readable.on('data', (data) => console.log('got data', data))
readable.on('end', () => console.log('finished reading'))