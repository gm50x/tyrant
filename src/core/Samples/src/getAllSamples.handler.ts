import { Request, Response } from 'express'
import getAllSamples from './getAllSamples.core'

export default async (req: Request, res: Response): Promise<Response> => {
    const samples = await getAllSamples()
    return res.status(200).json(samples)
}