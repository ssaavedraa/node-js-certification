'use strict'

const os = require('os')

console.log('Hostname', os.hostname())
console.log('Home dir', os.homedir())
console.log('Temp dir', os.tmpdir())
console.log('Temp dir', os.platform())
console.log('Temp dir', os.type())