
import pg from "pg";
import { ENV } from "./env.js";

const { Pool } = pg;

export const connectDB = async () => {
    try {
        const pool = new Pool({
            connectionString: ENV.DB_URL,
            ssl: {
                rejectUnauthorized: true,
            },
        });

        await pool.query("SELECT NOW()");

        console.log("Connected to Neon PostgreSQL ☑️");

        return pool;

    } catch (error) {
        console.error("Database connection error 💣", error.message);
        process.exit(1);
    }
};
