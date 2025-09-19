import { serial, text, pgTable, boolean, timestamp } from "drizzle-orm/pg-core";

export const reports = pgTable("reports", {
    id: serial("id").primaryKey(),
    title: text("title").notNull(),
    status: boolean("status").notNull().default(false),
    created_at: timestamp("created_at", {
        withTimezone: true,
    })
        .notNull()
        .defaultNow(),
    updated_at: timestamp("updated_at", {
        withTimezone: true,
    }),
    deleted_at: timestamp("deleted_at", {
        withTimezone: true,
    }),
});
