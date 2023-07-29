import http, { Server } from 'http';
import { Application } from 'express';
import dotenv from 'dotenv';
dotenv.config();

import App from './app';
import ConnectDatabase from "./config/database";

const PORT: number = Number(process.env.PORT) || 3000;
const app = new App().app;

const server: Server = http.createServer(app as Application);

const startServer = async (): Promise<void> => {
    try {
        await ConnectDatabase();

        server.listen(PORT, () => console.log(`App listening at PORT: http://localhost:${PORT}`));
    } catch (error) {
        console.error(error, "App failed to start");
        process.exit(1);
    }
}

startServer();