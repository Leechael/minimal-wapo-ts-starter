import { Hono } from 'hono/tiny'
import { handle } from '@phala/wapo-env/guest'

const app = new Hono()

app.get('/', (c) => {
  let vault: Record<string, string> = {}
  try {
    vault = JSON.parse(process.env.secret || '')
  } catch (e) {
  }
  if (vault.foo) {
    return c.json({ message: vault.foo })
  }
  return c.json({ message: 'Hello World' })
})

export default handle(app)
