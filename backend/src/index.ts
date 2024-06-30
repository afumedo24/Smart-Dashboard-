import express from 'express';
import router from './router'
import config from 'config';
import logger from '../utils/logger';
import connectDB from '../utils/db';
import cors from 'cors';

// Get the port from the config file
const PORT = config.get<number>('port');

// Create an express app
const app = express();

// Use the express middlewares to parse the request body and enable CORS
app.use(express.json(), express.urlencoded({ extended: true }), cors());

// Use the router middleware to handle the routes
app.use('/api', router());

// Start the server and wait for the connection to the database
app.listen(PORT, async () => {   
    logger.info(`Server running on http://localhost:${PORT}/api`)
    await connectDB();
})
