import { Request, Response } from 'express'
import logger from '../../utils/logger';
import { fetchMarkCap } from '../services/stocksapi';


// a controller to fetch the stock data 
export const getStocks = async (req:Request, res:Response) => {
    try {
        const response = await fetchMarkCap();
        return res.status(200).json(response); 
    } catch (error) {
        logger.error(error);
        return res.status(500).json({message: "Internal Server Error"});
    }
}