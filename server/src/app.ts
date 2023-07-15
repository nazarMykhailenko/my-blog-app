import express from 'express'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (_, res) => {
	res.send('OK')
})

const server = app.listen(4444, () => {
	console.log('Server OK')
})
server.on('error', (e) => console.error('Error', e))
