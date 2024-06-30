import { Router} from 'express'
import { getAllUsers, getUser, updateUser, deleteUser } from '../controllers/usersController'
import { validateReq } from '../middlewares/authMiddleware'

/*
    all user routes get validated before reaching the controller
    this is done by calling the validateReq middleware 
    we check if the user has a valid token after that we proceed to the controller

    these are the routes for:
        - sending the all users data
        - sending the user data
        - updating the user data
        - deleting the user data
*/
export default (router:Router ) => {
    router.get("/users", validateReq, getAllUsers)
    router.get("/user", validateReq, getUser)
    router.patch("/user", validateReq, updateUser)
    router.delete("/user", validateReq, deleteUser)
}