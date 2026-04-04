"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const TOTAL_EXERCISES = 10;

export default function Footer() {
  const pathname = usePathname();
  const match = pathname.match(/^\/exercise\/(\d+)$/);

  if (!match) return null;

  const current = parseInt(match[1], 10);
  const hasPrev = current > 1;
  const hasNext = current < TOTAL_EXERCISES;

  return (
    <footer className="fixed bottom-0 left-0 flex h-14 w-full items-center justify-between border-t-2 border-gray-800 bg-gradient-to-r from-orange-50 via-white to-teal-100 px-6">
      <div className="w-24">
        {hasPrev && (
          <Link
            href={`/exercise/${current - 1}`}
            className="text-sm font-medium text-gray-600 transition-colors hover:text-blue-800 hover:underline"
          >
            ← Previous
          </Link>
        )}
      </div>

      <div className="flex flex-col items-center gap-1 py-2">
      <span className="text-gray-900">
        Exercise {current} / {TOTAL_EXERCISES}
      </span>
      <Link href="/" className="text-gray-600 hover:text-blue-800 hover:underline">
        Home
      </Link>
      </div>

      <div className="flex w-24 justify-end">
        {hasNext && (
          <Link
            href={`/exercise/${current + 1}`}
            className="text-sm font-medium text-gray-600 transition-colors hover:text-blue-800 hover:underline"
          >
            Next →
          </Link>
        )}
      </div>
    </footer>
  );
}
