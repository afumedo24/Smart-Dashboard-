import crypto from 'crypto';
import config from 'config';
import jwt from 'jsonwebtoken';

// get all the configuration values from the config module
const SALT = config.get<string>('salt');
const SECRET = config.get<string>('secret')
const JWT_SECRET = config.get<string>('jwtsecret');

// a function that takes a password and returns a hashed password using crypto
export const hashPassword = (password: string) => {
    return crypto.createHmac('sha256', [SALT, password].join('/')).update(SECRET).digest('hex');
}

// a function that generates a token using jwt
export const signToken = (payload: any) => {
    return jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });
}

// a function that verifies (decodes) a jwt token 
export const verifyToken = (token: string) => {
    return jwt.verify(token, JWT_SECRET);
}

// a function that converts a unix timestamp to a normal time format 
export const unixToNormalTime = (unix: number) => {
    // multiply by 1000 to get the milliseconds
    const time = new Date(unix * 1000);
    // use the Intl.DateTimeFormat to format the German time
    const formatter = new Intl.DateTimeFormat('de-DE', {
        hour: '2-digit',
        minute: '2-digit',
    });
    // return the formatted time
    return formatter.format(time);
}

// a function that returns the URL of the weather icon
export const weatherIconURL = (icon: string) => {
    return `https://openweathermap.org/img/wn/${icon}.png`;
}