// Loading state for the entire app
export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-zinc-300 border-t-zinc-900 dark:border-zinc-700 dark:border-t-zinc-50" />
        <p className="text-sm text-zinc-600 dark:text-zinc-400">Loading...</p>
      </div>
    </div>
  );
}
