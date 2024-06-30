import { Router }  from "express";
import authentication from "./authRouter";
import users from "./usersRouter";
import services from "./servicesRouter";
import sensors from "./sensorRouter";

// create a new router
const router = Router();

// export the router
export default (): Router => {
    // each of these functions defines routes for a different part of the application
    // we pass the router to each of these functions to add the routes to the router
    // this way we can keep the routes for different parts of the application separate
    authentication(router)
    users(router)
    services(router)
    sensors(router)
    
    // return the router
    return router
}