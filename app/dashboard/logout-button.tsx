"use client";

import { Button } from "@/components/ui/button";
import axiosClient from "@/lib/axiosInstance";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function LogoutButton() {
  const router = useRouter();
  const [pending, setPending] = useState(false);

  async function onLogout() {
    setPending(true);
    try {
      await axiosClient.get("/api/auth/logout");
      router.push("/login");
      router.refresh();
    } finally {
      setPending(false);
    }
  }

  return (
    <Button type="button" variant="outline" disabled={pending} onClick={onLogout}>
      {pending ? "Signing out..." : "Log out"}
    </Button>
  );
}
