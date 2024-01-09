'use strict'
const { pipeline } = require('stream')
const { join } = require('path')
const { createReadStream, createWriteStream } = require('fs')

pipeline(
  createReadStream(__filename),
  createWriteStream(join(__dirname, 'out.txt')),
  (error) => {
    if (error) {
      console.error(error)
      return
    }

    console.log("Finished!")
  }
)

/*
  This pattern is excellent to deal with large files, provide constant memory usage using small reading and wirting chunks
*/