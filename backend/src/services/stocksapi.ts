import axios from "axios";
import config from 'config';
import logger from '../../utils/logger';
import lodash from 'lodash';

// get the base URI and API key from the config file
const FINNHUB_BASE_URI = config.get<string>('finnhub_base_url');  
const FINNHUB_API_KEY = config.get<string>('finnhub_api_key');

// define the interfaces for the stock symbols
interface StockSymbol {
  symbol: string;
  description: string;
  displaySymbol: string;
  type: string;
}

// define the interface for the stock profile
interface StockProfile {
  marketCapitalization?: number;
  name?: string;
}

// a function to fetch stock symbols from the FINNHUB API
async function fetchStockSymbols() {
  try {
    const response = await axios.get<StockSymbol[]>(`${FINNHUB_BASE_URI}/stock/symbol?exchange=US&token=${FINNHUB_API_KEY}`);
    logger.info('Fetched stock symbols');
    // Use lodash to slice the response data
    return lodash.slice(response.data, 0, 6)
  } catch (error) {
    logger.error('Error fetching stock symbols:', error);
    return [];
  }
}

// a function to fetch stock profile from the FINNHUB API
async function fetchStockProfile(symbol: string): Promise<StockProfile | null> {
  try {
    const response = await axios.get<StockProfile>(`${FINNHUB_BASE_URI}/stock/profile2?symbol=${symbol}&token=${FINNHUB_API_KEY}`);
    return response.data;
  } catch (error) {
    logger.error(`Error fetching profile for ${symbol}:`, error);
    return null;
  }
}

// a function to fetch market capitalization for the stock symbols
export async function fetchMarkCap(): Promise<{ name: string; marketCap: number }[]> {
  try {
    const symbols = await fetchStockSymbols();
    const stockData: { name: string; marketCap: number }[] = [];

    for (const symbol of symbols) {
      const profile = await fetchStockProfile(symbol.symbol);
      if (profile && profile.marketCapitalization && profile.name) {
        stockData.push({
          name: profile.name,
          marketCap: profile.marketCapitalization
        });
      }
    }
    logger.info('Fetched stock data');
    return stockData;
  } catch (error) {
    logger.error('Error fetching stock data:', error);
    return [];
  }
}
