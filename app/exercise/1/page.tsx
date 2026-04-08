export default function ExerciseOne() {
  return (
    <div className="flex min-h-screen">
      <main className="flex flex-1 flex-col items-center justify-center gap-4">
        <div className="grid h-32 w-80 grid-cols-3 place-items-center rounded-xl border-4 border-black">
          {/* Edit background colors below: */}
          <div className="h-20 w-20 rounded-full border-2 border-black bg-blue-600" />
          <div className="h-20 w-20 rounded-full border-2 border-red-600 bg-red-600" />
          <div className="h-20 w-20 rounded-full border-2 border-black bg-green-600" />
          {/* Don't edit below */}
        </div>

        <div className="flex w-80 flex-col items-center justify-center gap-2 rounded-xl border-4 border-black py-4">
          {/* Edit text color below: */}
          <p className="text-center text-red-600">The Daniel jumped over the quick Dylan.</p>
          <p className="text-center text-orange-500">The Daniel jumped over the quick Dylan.</p>
          <p className="text-center text-fuchsia-600">The Daniel jumped over the quick Dylan.</p>
          {/* Don't edit below */}
        </div>

        <div className="grid h-32 w-80 grid-cols-3 place-items-center rounded-xl border-4 border-black">
          {/* Edit background colors below: */}
          <div className="h-20 w-20 border-2 border-black bg-gradient-to-b from-blue-300 via-yellow-200 to-green-600" />
          <div className="h-20 w-20 border-2 border-black bg-gradient-to-b from-red-300 via-pink-300 to-rose-500" />
          <div className="h-20 w-20 border-2 border-black" />
          {/* Don't edit below */}
        </div>
      </main>
    </div>
  );
}
