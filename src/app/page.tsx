"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    insertReport,
    getReports,
    updateReport,
    deleteReport,
    type reportFetch as Report,
} from "./actions";

export default function Home() {
    const [data, setData] = useState<Report[] | null>(null);
    const [isFetching, setIsFetching] = useState(false);

    async function getReportsHandler() {
        setIsFetching(true);
        const reports = await getReports();
        setData(reports);
        setIsFetching(false);
    }

    return (
        <div className="p-4 space-y-4">
            <div className="flex items-center gap-2">
                <Button onClick={getReportsHandler} disabled={isFetching}>
                    {isFetching ? "Fetching…" : "Fetch"}
                </Button>
                <Button onClick={insertReport} variant="secondary">
                    Insert
                </Button>
                <Button onClick={updateReport} variant="outline">
                    Update
                </Button>
                <Button onClick={deleteReport} variant="destructive">
                    Delete
                </Button>
            </div>

            <Separator />

            {data ? (
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>ID</TableHead>
                            <TableHead>Title</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Created</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data.map((r) => (
                            <TableRow key={r.id}>
                                <TableCell>{r.id}</TableCell>
                                <TableCell>{r.title}</TableCell>
                                <TableCell>
                                    {r.status ? "Complete" : "Pending"}
                                </TableCell>
                                <TableCell>
                                    {new Date(r.created_at).toLocaleString()}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            ) : (
                <p className="text-sm text-muted-foreground">
                    Press Fetch to load data.
                </p>
            )}
        </div>
    );
}
