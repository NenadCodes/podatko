"use client";

import { useState } from "react";
import { useAuth } from "@/lib/auth-context";

function GoogleIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-5 w-5" aria-hidden="true">
      <path
        fill="#FFC107"
        d="M43.6 20.5H42V20.4H24v7.2h11.3c-1.6 4.5-5.9 7.7-11.3 7.7-6.9 0-12.4-5.6-12.4-12.4S17.1 10.5 24 10.5c3.2 0 6 1.2 8.2 3.1l5.4-5.4C34.4 5.1 29.5 3 24 3 12.4 3 3 12.4 3 24s9.4 21 21 21 21-9.4 21-21c0-1.2-.1-2.4-.4-3.5z"
      />
      <path
        fill="#FF3D00"
        d="m6.3 14.7 6 4.4c1.6-4.3 5.7-7.6 10.7-7.6 3.2 0 6 1.2 8.2 3.1l5.4-5.4C34.4 5.1 29.5 3 24 3c-7.5 0-14 4.3-17.7 10.7z"
      />
      <path
        fill="#4CAF50"
        d="M24 45c5.4 0 10.2-2 13.7-5.4l-6.3-5.2c-2 1.4-4.6 2.3-7.4 2.3-5.4 0-9.9-3.4-11.5-8.1l-6.2 4.8C9.9 40.5 16.4 45 24 45z"
      />
      <path
        fill="#1976D2"
        d="M43.6 20.5H42V20.4H24v7.2h11.3c-.8 2.2-2.2 4.1-4 5.4l6.3 5.2C41.4 34.9 44 30 44 24c0-1.2-.1-2.4-.4-3.5z"
      />
    </svg>
  );
}

export function LoginScreen() {
  const { signInWithGoogle } = useAuth();
  const [signingIn, setSigningIn] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSignIn = async () => {
    setError(null);
    setSigningIn(true);
    try {
      await signInWithGoogle();
    } catch {
      setError("Couldn't start sign-in. Please try again.");
      setSigningIn(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-1 items-center justify-center px-4">
      <div className="w-full max-w-sm rounded-xl border border-border bg-surface p-8 shadow-sm">
        <div className="mb-6 text-center">
          <h1 className="text-xl font-semibold text-foreground">
            Marketing Analytics
          </h1>
          <p className="mt-1 text-sm text-muted">
            Sign in to view your dashboard
          </p>
        </div>

        <button
          type="button"
          onClick={handleSignIn}
          disabled={signingIn}
          className="flex w-full items-center justify-center gap-3 rounded-lg border border-border bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-60"
        >
          <GoogleIcon />
          {signingIn ? "Redirecting…" : "Sign in with Google"}
        </button>

        {error && (
          <p className="mt-4 text-center text-sm text-danger">{error}</p>
        )}
      </div>
    </div>
  );
}
