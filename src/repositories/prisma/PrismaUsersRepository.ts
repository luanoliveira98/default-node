import { prisma } from '../../prisma'
import { UserCreateData, UsersRepository } from '../UsersRepository'

export class PrismaUsersRepository implements UsersRepository {
  async create({ name, email, password }: UserCreateData) {
    await prisma.user.create({
      data: { name, email, password }
    })
  }

  async getByEmail(email: string) {
    const user = await prisma.user.findUnique({ where: { email: email } })
    return user
  }
}
