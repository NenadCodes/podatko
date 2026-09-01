"use client";

import { Suspense, useEffect } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "@/lib/auth-context";
import { Spinner } from "@/components/Spinner";

export default function AuthCallbackPage() {
  return (
    <Suspense fallback={<Spinner label="Signing you in…" />}>
      <AuthCallbackContent />
    </Suspense>
  );
}

function AuthCallbackContent() {
  const { session, loading } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const errorDescription = searchParams.get("error_description");

  useEffect(() => {
    if (!errorDescription && !loading && session) {
      router.replace("/app/dashboard");
    }
  }, [errorDescription, loading, session, router]);

  if (errorDescription) {
    return (
      <div className="flex min-h-screen flex-1 flex-col items-center justify-center gap-4 px-4 text-center">
        <p className="text-sm text-danger">{errorDescription}</p>
        <Link
          href="/app"
          className="text-sm font-medium text-brand hover:underline"
        >
          Back to sign in
        </Link>
      </div>
    );
  }

  return <Spinner label="Signing you in…" />;
}
