import getAllSamples from './getAllSamples.repository'
import { Sample } from '../../../interfaces'

export default async (): Promise<Sample[]> => {
    return await getAllSamples()
}
