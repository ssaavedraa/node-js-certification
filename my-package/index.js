'use strict'
// WORKS AD A SERVICE

// const pino = require('pino')
// const format = require('./format')

// const logger = pino()

// logger.info(format.upper('my-package started'))
// process.stdin.resume()

// WORKS AS A SERVICE OR MODULE

// 'use strict'
// const format = require('./format.mjs')

// if (require.main === module) {
//   const pino = require('pino')

//   const logger = pino()

//   logger.info(format.upper('my-package started'))
//   process.stdin.resume()
// } else {
//   const reverseAndUpper = (str) => (
//     format
//       .upper(str)
//       .split('')
//       .reverse()
//       .join('')
//   )

//   module.exports = reverseAndUpper
// }

// USING ESM

// if (require.main === module) {
//   const pino = require('pino')

//   const logger = pino()

//   import('./format.js')
//     .then((format) => {
//       logger.info(format.upper('my=packgage started'))

//       process.stdin.resume
//     })
//     .catch((err) => {
//       console.error(err)
//       process.exit(1)
//     })
// } else {
//   let format = null

//   const reverseAndUpper = async (str) => {
//     format = format || await import('./format.js')

//     return format.upper(str)
//       .split('')
//       .reverse()
//       .join('')
//   }

//   module.exports = reverseAndUpper
// }

// "type": "module"

import { realpath } from 'fs/promises'
import { fileURLToPath } from 'url'
import * as format from './format.js'

console.log(process.argv[1])
console.log(await realpath(fileURLToPath(import.meta.url)))
console.log(await realpath(process.argv[1]))
console.log(process.argv[1] && await realpath(fileURLToPath(import.meta.url)))

const isMain = process.argv[1] &&
  await realpath(fileURLToPath(import.meta.url)) ===
  await realpath(process.argv[1])

if (isMain) {
  const { default: pino } = await import('pino')

  const logger = pino()

  logger.info(format.upper('my-package started'))

  process.stdin.resume()
}

export default (str) => format
  .upper(str)
  .split('')
  .reverse()
  .join('')
