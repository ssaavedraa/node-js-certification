'use strict'

console.log(process.cwd())
console.log(process.platform)
console.log(process.pid)

const outputStats = () => {
  const uptime = process.uptime()
  const { user, system } = process.cpuUsage()
  console.log({
    uptime,
    user,
    system,
    total: (user + system) /  1000000
  })
}

outputStats()

setTimeout(() => {
  outputStats()
  const now = Date.now()

  while (Date.now() - now < 5000) {}

  outputStats()
}, 500);
