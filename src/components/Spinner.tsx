export function Spinner({ label }: { label?: string }) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-3 py-16 text-muted">
      <div className="h-6 w-6 animate-spin rounded-full border-2 border-border border-t-brand" />
      {label && <p className="text-sm">{label}</p>}
    </div>
  );
}
