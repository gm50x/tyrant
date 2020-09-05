import data from './db.json'
import { Sample } from '../../../interfaces'

export default (): Promise<Sample[]> => {
    return Promise.resolve(data)
}