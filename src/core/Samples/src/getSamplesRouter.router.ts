import { Router } from 'express'
import { asyncWrapper } from '../../../util'
import getAllSamplesHandler from './getAllSamples.handler'
import getSampleByIdHandler from './getSampleById.handler'

export default (): Router => {
    const router = Router()
    router.get('', asyncWrapper(getAllSamplesHandler))
    router.get('/:id', asyncWrapper(getSampleByIdHandler))
    return router
}