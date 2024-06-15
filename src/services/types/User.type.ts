
export interface User {
    id?: number
    username: string,
    password: string,
}

export interface UserForm {
    username: string
    email: string
    password: string
    passwordRepeat: string

}