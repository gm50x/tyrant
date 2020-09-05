import express from 'express'
import bodyParser from 'body-parser'

import { samplesModule } from './core'

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/samples', samplesModule.getSamplesRouter())

const port = process.env.PORT || 8000
app.listen(port, () => console.log(`App listening on ${port}`))