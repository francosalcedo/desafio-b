import express, {Request, Response} from 'express'
import db from './config/database.config'

( async () => {
    try {
        await db.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})()

db.sync().then(() => {
    console.log('connect to db')
})

const app = express()
const port = 9000

app.get('/', (req: Request, res: Response) => {
    return res.send(`Hellow mundillo`)
})

app.post('/create', (req: Request, res: Response) => {
    console.log(req.body)
    return res.send('')
})

app.listen(port, () => {
    console.log(`server is running in ${port}`)
})
