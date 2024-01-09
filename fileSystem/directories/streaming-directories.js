// Streaming directory content over HTTP in JSON format

'use strict'

const { opendir } = require('fs')
const { createServer } = require('http')
const { Transform, Readable, pipeline } = require('stream')
const { join } = require('path')

const createEntryStream = () => {
  let syntax = '[\n'

  return new Transform({
    writableObjectMode: true,
    readableObjectMode: false,
    transform(entry, enc,  next) {
      next(null, `${syntax} "${entry. name}"`)
      syntax = ', \n'
    },
    final (cb) {
      this.push('\n]\n')
      cb()
    }
  })
}

createServer((req, res) => {
  if (req.url !== '/') {
    res.statusCode = 404
    res.end('Not Found')
    return
  }

  opendir(join(__dirname, '../files'), (err, dir) => {
    if (err) {
      res.statusCode = 500
      res.end('Server Error')
    }

    const dirStream = Readable.from(dir)
    const entryStream = createEntryStream()

    res.setHeader('Content-Type', 'application/json')

    pipeline(dirStream, entryStream, res, (err) => {
      if (err) {
        console.error(err)
      }
    })
  })
}).listen(3000)