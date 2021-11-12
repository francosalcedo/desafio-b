import { initClient } from '../models/Client'

const Sequelize = require('sequelize')

const env = process.env.NODE_ENV || 'development'
const config = require(`${__dirname}/../config/config.js`)[env]

interface DB {
    [key: string]: any
}

const sequelize = new Sequelize(config.database, config.username, config.password, config)

// models
initClient(sequelize)

const db: DB = {
  sequelize,
  Sequelize,
  Client: sequelize.models.Client
}

export default db
