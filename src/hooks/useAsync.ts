"use client";

import { useEffect, useState } from "react";

type AsyncState<T> =
  | { status: "loading" }
  | { status: "error"; error: string }
  | { status: "success"; data: T };

export function useAsync<T>(fn: () => Promise<T>, key: string) {
  const [prevKey, setPrevKey] = useState(key);
  const [state, setState] = useState<AsyncState<T>>({ status: "loading" });
  const [tick, setTick] = useState(0);

  // Reset to loading during render when the key changes, instead of in an
  // effect — this is React's recommended way to adjust state on prop change.
  if (key !== prevKey) {
    setPrevKey(key);
    setState({ status: "loading" });
  }

  useEffect(() => {
    let cancelled = false;
    fn()
      .then((data) => {
        if (!cancelled) setState({ status: "success", data });
      })
      .catch((err) => {
        if (!cancelled) {
          setState({
            status: "error",
            error: err instanceof Error ? err.message : "Something went wrong",
          });
        }
      });
    return () => {
      cancelled = true;
    };
    // fn intentionally excluded: callers pass a stable key instead
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key, tick]);

  return {
    ...state,
    refetch: () => {
      setState({ status: "loading" });
      setTick((t) => t + 1);
    },
  };
}
