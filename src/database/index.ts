// @ts-ignore
import { initClient } from '../models/client'

const Sequelize = require('sequelize')

const env = process.env.NODE_ENV || 'development'
console.log("================================")
console.log("================================")
console.log(__dirname)
console.log("================================")
console.log("================================")
console.log("================================")
const config = require(`../config/config.js`)[env]

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
