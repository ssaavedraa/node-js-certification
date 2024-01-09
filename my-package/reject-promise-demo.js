import { setTimeout } from 'timers/promises'

const ac = new AbortController()

const { signal } = ac

const timeout = setTimeout(
  1000,
  'will Not be logged',
   {
    signal
   }
)

setImmediate(() => {
  ac.abort()
})

try {
  console.log(await timeout)
} catch (error) {
  if (error.code !== 'ABORT_ERR') throw error
}