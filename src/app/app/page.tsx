"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth-context";
import { LoginScreen } from "@/components/LoginScreen";
import { Spinner } from "@/components/Spinner";

export default function AppHome() {
  const { session, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && session) {
      router.replace("/app/dashboard");
    }
  }, [loading, session, router]);

  if (loading || session) {
    return <Spinner />;
  }

  return <LoginScreen />;
}
