import { Request, Response } from 'express'
import addSample from './addSample.core'
import { Sample } from '../../../interfaces'

export default async (req: Request, res: Response): Promise<Response> => {
    const { id, word } = req.body

    if (!id || !word) {
        return res.status(400).json({ error: 'Missing required parameters' })
    }

    const sample: Sample = { id, word }
    await addSample(sample)

    return res.status(200).json()
}