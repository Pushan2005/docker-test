import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

declare global {
    var __pgPool: Pool | undefined;
    var __drizzleDb: ReturnType<typeof drizzle> | undefined;
}

const pool =
    global.__pgPool ??
    new Pool({
        connectionString: process.env.DATABASE_URL,
    });

const db = global.__drizzleDb ?? drizzle(pool);

if (process.env.NODE_ENV !== "production") {
    global.__pgPool = pool;
    global.__drizzleDb = db;
}

export { db, pool };
