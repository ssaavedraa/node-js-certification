import { resolve } from 'import-meta-resolve'

console.log(`import 'pino' => `, await resolve('pino', import.meta.url))
console.log(`import 'pino' => `, await resolve('tap', import.meta.url))