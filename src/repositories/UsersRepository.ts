export interface UserCreateData {
  name: string
  email: string
  password: string
}

export interface UsersRepository {
  create: (data: UserCreateData) => Promise<void>
  getByEmail: (email: string) => Object
}
