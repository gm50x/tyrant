import { Request, Response, NextFunction } from 'express'
import { RequestError } from '../../interfaces'

export default (err: RequestError, req: Request, res: Response, next: NextFunction) => {
    res.status(err.statusCode || 500).json({ error: err.message })
}
