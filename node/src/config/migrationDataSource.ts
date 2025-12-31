import * as dotenv from 'dotenv';
import { DataSource } from "typeorm";

dotenv.config();

export const MigrationDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: ['src/domain/entity/*.ts'],
    migrations: ['src/database/migrations/*.ts'],
    logging: false
});
