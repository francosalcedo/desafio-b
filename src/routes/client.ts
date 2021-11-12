import express from 'express'

import * as clientController from '../controllers/client/client.controller'
import * as clientValidator from '../controllers/client/client.validator'
import { validate } from '../helpers'

const router = express.Router()

router.get(
    '/',
    clientController.allClients,
)

router.get(
    '/:id',
    validate(clientValidator.schemaClientFindOne),
    clientController.findOneClient,
)

router.post(
    '/',
    validate(clientValidator.schemaClientSave),
    clientController.saveClient,
)

export default router
