import { UsersRepository } from '../../repositories/UsersRepository'
import { hash } from 'bcryptjs'

interface CreateUserUseCaseRequest {
  name: string
  email: string
  password: string
}

export class CreateUserUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute(req: CreateUserUseCaseRequest) {
    const { name, email, password } = req

    if (!name) throw new Error('Name is required')
    if (!email) throw new Error('Email is required')
    if (!password) throw new Error('Password is required')

    const userAlreadyExists = await this.usersRepository.getByEmail(email)
    if (userAlreadyExists) throw new Error('User already exists')

    const passwordHash = await hash(password, 8)

    await this.usersRepository.create({ name, email, password: passwordHash })
  }
}
