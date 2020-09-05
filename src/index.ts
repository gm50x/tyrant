import express from 'express'
import { samplesModule } from './core'

const app = express()

app.use('/samples', samplesModule.getSamplesRouter())

const port = process.env.PORT || 8000

app.listen(port, () => console.log(`App listening on ${port}`))