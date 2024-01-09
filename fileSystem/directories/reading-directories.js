'use strict'

const { readdirSync, readdir } = require('fs')
const { readdir: readdirProm } = require('fs/promises')
const { join } = require('path')

const filesDirPath = join(__dirname, '../files')

try {
  console.log('sync', readdirSync(filesDirPath))
} catch (error) {
  console.error(error)
}

readdir(filesDirPath, (error, files) => {
  if (error) {
    console.error(error)
    return
  }

  console.log('callback', files)
})

async function run () {
  const files = await readdirProm(filesDirPath)

  console.log('promise', files)
}

run().catch((error) => console.error(error))