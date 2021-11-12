import { Sequelize } from 'sequelize'

//process.env.db_user
const host = 'localhost'
const user = 'usuario'
const database = 'backend'
const password = '123'
const port = 5432

const db = new Sequelize(database, user, password, {
    host,
    port,
    dialect: 'postgres',
    logging: false
})

export default db
