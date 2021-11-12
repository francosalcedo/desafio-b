import { Sequelize, DataTypes, Model } from 'sequelize'

interface IClient {
    id: number
    firstName: string
    lastName: string
    birthdate: Date
    createdAt: Date
    updatedAt: Date
}

export class Client extends Model<IClient> {
    public readonly createdAt!: Date
    public readonly updatedAt!: Date
}

export function initClient(sequelize: Sequelize): void {
    Client.init({
        id: {
            allowNull: true,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
          },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        birthdate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: true,

        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: true,

        }
      }, {
        sequelize,
        modelName: 'Client',
    })
}

export default Client
