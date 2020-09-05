import data from './db.json'
import { Sample } from '../../../interfaces'

export default (id: number): Promise<Sample> => {
    return Promise.resolve(data.find(x => x.id === id))
}