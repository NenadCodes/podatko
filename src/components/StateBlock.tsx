export function ErrorBlock({
  message,
  onRetry,
}: {
  message: string;
  onRetry?: () => void;
}) {
  return (
    <div className="rounded-xl border border-danger/30 bg-danger/5 p-4 text-sm text-danger">
      <p>{message}</p>
      {onRetry && (
        <button
          type="button"
          onClick={onRetry}
          className="mt-2 font-medium underline underline-offset-2"
        >
          Retry
        </button>
      )}
    </div>
  );
}

export function EmptyBlock({ message }: { message: string }) {
  return (
    <div className="rounded-xl border border-dashed border-border p-6 text-center text-sm text-muted">
      {message}
    </div>
  );
}
