import fs from 'fs'
import data from './db.json'
import { Sample } from '../../../interfaces'

const filepath = './src/core/Samples/src/db.json'

export default (sample: Sample): void => {
    data.push(sample)
    fs.writeFileSync(filepath, JSON.stringify(data))
}