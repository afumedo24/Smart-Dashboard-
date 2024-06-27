import express from 'express';
import router from './router'
import config from 'config';
import logger from '../utils/logger';
import connectDB from '../utils/db';
import cors from 'cors';

const PORT = config.get<number>('port');
const app = express();

app.use(express.json(), express.urlencoded({ extended: true }), cors());
app.use('/api', router());

app.listen(PORT, async () => {   
    logger.info(`Server running on http://localhost:${PORT}/api`)
    await connectDB();
})
