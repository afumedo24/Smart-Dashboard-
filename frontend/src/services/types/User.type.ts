// Interface representing a user object.
export interface IUser {
  username: string;     // The username of the user.
  email?: string;       // Optional email address of the user.
  password: string;     // The password of the user.
}

// Interface representing user input for registration or update.
export interface IUserForm {
  username: string;           // The desired username for registration.
  email: string;              // The email address for registration.
  password: string;           // The password for registration.
  passwordRepeat: string;     // Repeat of the password to confirm registration.
}