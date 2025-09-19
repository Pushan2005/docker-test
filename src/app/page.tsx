"use client";
import { Button } from "@/components/ui/button";
import { db } from "@/db/client";
import { insertReportTest } from "./actions";

export default function Home() {
    return (
        <div className="">
            <Button onClick={insertReportTest}>Insert test row</Button>
        </div>
    );
}
