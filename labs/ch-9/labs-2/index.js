'use strict'
const { EventEmitter } = require('events')

process.nextTick(console.log, 'passed!')

const ee = new EventEmitter()

ee.on('error', (error) => console.error(error.message))

ee.emit('error', Error('timeout'))
