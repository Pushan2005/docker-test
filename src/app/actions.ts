"use server";
// this is for testing crud operations with Drizzle ORM and Postgres

import { db } from "@/db/client";
import { reports } from "@/db/schema";
import { eq } from "drizzle-orm";

export type reportInsert = typeof reports.$inferInsert;
export type reportFetch = typeof reports.$inferSelect;

export async function insertReport() {
    const newReportData: reportInsert = {
        title: "Test Report",
        status: false,
    };

    await db.insert(reports).values(newReportData);
    console.log("Inserted test report");
}

export async function getReports() {
    const result = await db.select().from(reports);
    console.log("Fetched reports", result);
    return result;
}

export async function updateReport() {
    await db.update(reports).set({ status: true, updated_at: new Date() });

    console.log("Report updated");
}

export async function deleteReport() {
    await db.delete(reports);

    console.log("Deleted report(s)");
}
