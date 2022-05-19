import 'reflect-metadata'
import express from 'express'
import 'express-async-errors'
import cors from 'cors'
import { router } from './routes'
import { throwError } from './middlewares/throwError'

const app = express()

app.use(cors())
app.use(express.json())
app.use(router)
app.use(throwError)

app.listen(3000, () => console.log('HTTP server running!'))
