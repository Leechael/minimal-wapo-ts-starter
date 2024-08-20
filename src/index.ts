import { Hono } from 'hono/tiny'
import { handle } from '@phala/wapo-env/guest'

const app = new Hono()

app.get('/', (c) => {
  return c.json({ message: 'Hello World' })
})

export default handle(app)
