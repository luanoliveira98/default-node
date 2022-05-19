import { Request, Response } from 'express'
import { PrismaUsersRepository } from '../repositories/prisma/PrismaUsersRepository'
import { CreateUserUseCase } from '../useCases/users/CreateUserUseCase'

export class UsersController {
  async create(req: Request, res: Response) {
    const { name, email, password } = req.body

    const prismaUsersRepository = new PrismaUsersRepository()
    const createUserUseCase = new CreateUserUseCase(prismaUsersRepository)
    await createUserUseCase.execute({ name, email, password })
    return res.status(201).send()
  }
}
