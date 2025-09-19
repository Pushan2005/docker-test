"use server";
// this is for testing crud operations with Drizzle ORM and Postgres

import { db } from "@/db/client";
import { reports } from "@/db/schema";

export async function insertReportTest() {
    type newReport = typeof reports.$inferInsert;
    const newReportData: newReport = {
        title: "Test Report",
        status: false,
    };

    await db.insert(reports).values(newReportData);
    console.log("Inserted test report");
}
