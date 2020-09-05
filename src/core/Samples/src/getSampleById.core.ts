import getSampleById from './getSampleById.repository'
import { Sample } from '../../../interfaces'

export default async (id: number): Promise<Sample> => {
    return await getSampleById(id)
}
