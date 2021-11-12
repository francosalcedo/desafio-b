import {Request, Response} from 'express'
import { successResponse, errorResponse } from '../../helpers'
import db from '../../database'

export const allClients = async (req: Request, res: Response) => {
    try {
      const clients = await db.Client.findAndCountAll({
        order: [
          ['createdAt', 'DESC'],
          ['firstName', 'ASC'],
        ]
      })

      return successResponse(req, res, { clients })
    } catch (error: any) {
        console.log(error)
      return errorResponse(req, res, error.message)
    }
}

export const saveClient = async (req: Request, res: Response) => {
    try {
        const record = await db.Client.create({ ...req.body })

        return successResponse(req, res, {
            record
        })
    } catch (error: any) {
        console.error(error)
        return errorResponse(req, res, error.message)
    }
}

export const findOneClient = async (req: Request, res: Response) => {
    try {
        const client = await db.Client.findOne({
            where: {
                id: req.params.id
            }
        })

        return successResponse(req, res, { client })
    } catch (error: any) {
        console.log(error)
        return errorResponse(req, res, error.message)
    }
}
