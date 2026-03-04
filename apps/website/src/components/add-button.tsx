"use client";

import { Button } from "./ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";
import AuthGuard from "./auth-guard";

export default function AddButton() {
  return (
    <AuthGuard>
      <Button variant="outline" asChild>
        <Link href="/events/add">
          <Plus /> Add Event
        </Link>
      </Button>
    </AuthGuard>
  );
}
