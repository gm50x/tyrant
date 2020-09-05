import { Request, Response } from 'express'
import getSampleById from './getSampleById.core'

export default async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params
    const parsedId = parseInt(id)

    if (!parsedId) {
        return res.status(400).json({ error: 'Provided id is not valid' })
    }

    const sample = await getSampleById(parsedId)
    return res.status(200).json(sample)
}