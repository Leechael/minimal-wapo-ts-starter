import { expect, test } from 'vitest'
import { app } from '../src/'

test('GET /', async () => {
  const resp = await app.request('/')
  // console.log(resp)
  expect(resp.status).toBe(200)
  expect(resp.headers.get('content-type')?.toLowerCase()).toBe('application/json; charset=utf-8')
  const data = await resp.json()
  expect(data).toHaveProperty('message')
})

test('POST /', async () => {
  const input = { foo: 'bar' }
  const resp = await app.request('/', {
    method: 'POST',
    body: JSON.stringify(input),
  })
  expect(resp.status).toBe(200)
  expect(resp.headers.get('content-type')?.toLowerCase()).toBe('application/json; charset=utf-8')
  const data = await resp.json()
  console.log(data)
  expect(data).toEqual(input)
})
