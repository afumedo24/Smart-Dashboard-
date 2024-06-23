import { Router } from "express";
import { login, register } from "../controllers/authController";

/*
    these are the routes creating a new user and login
*/
export default (router: Router) => {
    router.post('/auth/register', register),
    router.post('/auth/login', login)
}