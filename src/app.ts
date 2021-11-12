import express from 'express'
import dotenv from 'dotenv'

import cors from 'cors'

import clientRoutes from './routes/client'
import errorHandler from './middleware/errorHandler'

dotenv.config()

require('./config/sequelize')

const app = express()

app.use(cors({
    origin: '*'
}))
app.use(express.json())
app.use('/client', clientRoutes)
app.use(errorHandler)

app.listen(process.env.APP_PORT, () => {
	console.log('Server is running on port' + process.env.APP_PORT)
})

export default app
