// API_BASE_URLを使ってルートを統一
// CORS設定でフロントと連携可能
// エラーハンドラーをグローバルに設定

import 'reflect-metadata';
import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import { errorHandler } from './middleware/errorHandler';
import { AppDataSource } from './config/appDataSource';
import { apiRouter } from './routes';

dotenv.config();

export const API_BASE_URL = '/api';

export const app = express();

export const start = async () => {
    const port = process.env.PORT || 3000;

    const corsOptions = {
        // 許可したいドメイン
        origin: ['http://localhost:5173'],
        // 許可したいHTTPメソッド
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        // 許可したいヘッダー
        allowedHeaders: ['Content-Type', 'Authorization'],
    };

    app.use(cors(corsOptions));
    app.use(express.json());

    AppDataSource.initialize()
        .then(() => {
            // ルーティング設定
            app.use(API_BASE_URL, apiRouter);
            app.use(errorHandler);

            if (process.env.NODE_ENV !== 'test') {
                app.listen(port, () => {
                    console.log(`Server is running on http://localhost:${port}`);
                });
            }
        })
        .catch((error) => {
            console.error('Error during Data Source initialization:', error);
        });
};

if (process.env.NODE_ENV !== 'test') {
    start();
}