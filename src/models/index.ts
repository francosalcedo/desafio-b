import { initClient } from './client'

const Sequelize = require('sequelize')

const env = process.env.NODE_ENV || 'development'
const config = require(`${__dirname}/../config/config.json`)[env]

interface DB {
  [key: string]: any
}

const sequelize = new Sequelize(config.database, config.username, config.password, config)

// Init models
initClient(sequelize)

const db = {
  sequelize,
  Sequelize,
  Client: sequelize.models.Client
}

module.exports = db
