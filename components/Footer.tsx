"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronLeftIcon, ChevronRightIcon, HomeIcon } from "lucide-react";

const TOTAL_EXERCISES = 5;

export default function Footer() {
  const pathname = usePathname();
  const match = pathname.match(/^\/exercise\/(\d+)$/);

  if (!match) return null;

  const current = parseInt(match[1], 10);
  const hasPrev = current > 1;
  const hasNext = current < TOTAL_EXERCISES;

  return (
    <footer className="fixed bottom-0 left-0 flex h-24 w-full items-center justify-between border-t-2 border-gray-800 bg-gradient-to-r from-orange-50 via-white to-teal-100 px-6">
      <div className="w-24">
        {hasPrev && (
          <Link
            href={`/exercise/${current - 1}`}
            className="flex flex-row items-center text-sm font-medium text-gray-600 transition-colors hover:text-blue-800 hover:underline"
          >
            <ChevronLeftIcon /> Previous
          </Link>
        )}
      </div>

      <div className="flex flex-col items-center gap-1 py-2">
        <Link href="/" className="rounded-full bg-gray-100 p-2 text-gray-600 hover:text-blue-800 hover:underline">
          <HomeIcon />
        </Link>
        <span className="text-gray-900">
          Exercise {current} / {TOTAL_EXERCISES}
        </span>
      </div>

      <div className="flex w-24 justify-end">
        {hasNext && (
          <Link
            href={`/exercise/${current + 1}`}
            className="flex flex-row items-center text-sm font-medium text-gray-600 transition-colors hover:text-blue-800 hover:underline"
          >
            Next <ChevronRightIcon />
          </Link>
        )}
      </div>
    </footer>
  );
}
