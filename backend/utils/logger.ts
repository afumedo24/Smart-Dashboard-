import pino from "pino";

// Create a logger instance and set custom options
const logger = pino({
    transport: {
        target: "pino-pretty",
        options: {
            colorize: true,
            ignore: "pid,hostname",          
        },
    }
});

export default logger;