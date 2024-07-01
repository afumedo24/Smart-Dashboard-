import { Request, Response } from 'express'
import logger from '../../utils/logger';
import { fetchMarkCap } from '../services/stocksapi';

// a controller to fetch the stock data 
export const getStocks = async (req:Request, res:Response): Promise<Response> => {
    try {
        // fetch the stock data
        const response = await fetchMarkCap();

        // check if the response is empty
        if (!response) {
            logger.error(`Failed to fetch stock data`);
            return res.status(500).json({ message: 'Failed to fetch stock data' });
        }

        // log and send the stock data as a response
        logger.info(`Stock data sent successfully`);
        return res.status(200).json(response); 
    } catch (error: any) {
        logger.error('Error sending stocks data: ',error.message);
        return res.status(500).json({message: "Internal Server Error"});
    }
}