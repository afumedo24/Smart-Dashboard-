import mongoose from "mongoose";
import config from "config";
import logger from "./logger";

const connectDB = async () => {
    // get the database URI from the config file
    const DB_URI = config.get<string>("db_uri");

    try {
        // connect to the database
        await mongoose.connect(DB_URI);
        logger.info("Connected to the database");
    } catch (error) {
        logger.error("Error connecting to the database: ", error);
        }
}

export default connectDB;

