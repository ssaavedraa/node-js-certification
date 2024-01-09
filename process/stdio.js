'use estrict'

const { Transform } = require('stream')

console.error(process.stdin.isTTY ? 'terminal' : 'piped to')

const createUppercaseStream = () => {
  return new Transform({
    transform(chunk, encoding, next) {
      if (chunk.toString() === 'exit\n') {
        process.exit()
      } else {
        const uppercased = chunk.toString().toUpperCase()

        next(null, uppercased)
      }

    }
  })
}

process.stdin.pipe(createUppercaseStream()).pipe(process.stdout)