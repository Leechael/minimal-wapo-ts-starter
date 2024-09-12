import '@phala/wapo-env'
import { Hono } from 'hono/tiny'
import { handle } from '@phala/wapo-env/guest'

const app = new Hono()

app.get('/', (c) => {
  const derivedKey = Wapo.deriveSecret("SALTY");
  const hex = Buffer.from(derivedKey).toString('hex');
  return c.json({ message: `${hex}` })
})

app.post('/', async (c) => {
  const data = await c.req.json()
  console.log('user payload in JSON:', data)
  return c.json(data)
})

export default handle(app)
