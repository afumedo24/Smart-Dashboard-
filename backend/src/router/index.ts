import { Router }  from "express";
import authentication from "./authRouter";
import users from "./usersRouter";
import services from "./servicesRouter";
import sensors from "./sensorRouter";

const router = Router();

export default (): Router => {
    authentication(router)
    users(router)
    services(router)
    sensors(router)
    
    return router
}