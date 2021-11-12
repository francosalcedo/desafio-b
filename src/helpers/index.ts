import {Request, Response, NextFunction} from 'express'

export const successResponse = (req: Request, res: Response, data: any, code: number = 200) => res.send({
    code,
    data,
    success: true,
})

export const errorResponse = (
    req: Request,
    res: Response,
    errorMessage = 'Algo salio mal',
    code = 500,
    error = {},
) => res.status(500).json({
    code,
    errorMessage,
    error,
    data: null,
    success: false,
})

export const validate = (schema: any) => async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validate({
        body: req.body,
        query: req.query,
        params: req.params,
      })
      return next()
    } catch (err: any) {
      return res.status(500).json({type: err.name, message: err.message })
    }
}
