import { Sequelize, DataTypes, Model } from 'sequelize'
import db from '../config/database.config'

interface IClient {
    firstName: string
    lastName: string
    birthdate: Date
}

export class Client extends Model<IClient> {}

export function initClient(sequelize: Sequelize): void {
    Client.init({
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        birthdate: DataTypes.DATE
      }, {
        sequelize,
        modelName: 'Client',
    })
}
