import express from 'express'
import { samplesModule } from './core'

const app = express()
// const handlers = new SamplesHandler()

app.use('/samples', samplesModule.getSamplesRouter())

app.listen(8000, () => console.log('App listening on 8000'))