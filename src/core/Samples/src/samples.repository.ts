import data from './mock.json'
import { Sample } from '../../../interfaces'

export function getAllSamples(): Promise<Sample[]> {
    return Promise.resolve(data)
}

export function getSampleById(id: number): Promise<Sample> {
    return Promise.resolve(data.find(x => x.id === id))
}