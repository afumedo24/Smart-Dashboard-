import { Router } from "express";
import { login, register } from "../controllers/authController";

/*
    these are the routes for:
        - registering a new user
        - logging in a user
*/
export default (router: Router) => {
    router.post('/auth/register', register),
    router.post('/auth/login', login)
}