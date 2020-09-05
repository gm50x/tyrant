import addSample from './addSample.repository'
import { Sample } from '../../../interfaces'

export default async (sample: Sample): Promise<void> => {
    return await addSample(sample)
}
