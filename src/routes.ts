import { Router } from 'express'
import { UsersController } from './controllers/UsersController'

export const router = Router()

// User
const usersController = new UsersController()
router.post('/users', usersController.create)
