/**
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npx wrangler publish src/index.js --name my-worker` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */
import { Hono } from 'hono'

const app = new Hono()

app.get('/', (ctx) => {
  return ctx.json([
    {
      endpoint: '/hello',
      description: 'Returns Hello Falcons'
    }
  ])
})

app.get('/hello', (ctx) => {
  return ctx.text('Hello Falcons')
})
export default app
