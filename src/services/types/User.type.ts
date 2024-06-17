export interface IUser {
  username: string
  email?: string
  password: string
}

export interface IUserForm {
  username: string
  email: string
  password: string
  passwordRepeat: string
}
