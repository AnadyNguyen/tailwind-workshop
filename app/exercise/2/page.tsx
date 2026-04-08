export default function ExerciseTwo() {
  return (
    <div className="flex min-h-screen">
      <main className="flex flex-1 flex-col items-center justify-center gap-4">
        <div className="flex flex-col items-center justify-center gap-10 rounded-xl border-4 border-black px-10 py-10">
          {/* Edit the button below with unique hover effects. Don't forget the transition class */}
          <button className="rounded-md border border-blue-900 bg-blue-600 px-4 py-2 text-white hover: bg-red-600 hover:scale-110">
            Change my colors!
          </button>
          <button className="rounded-md border border-pink-900 bg-pink-600 px-4 py-2 text-white hover: transition-all">
            Change my scaling!
          </button>
          <button className="rounded-md border border-amber-900 bg-amber-600 px-4 py-2 text-white hover: transition-colors">
            Move me around!
          </button>
          <button className="rounded-md border border-green-900 bg-green-700 px-4 py-2 text-white">
            Do whatever here idc I'm just a button
          </button>
          {/* Don't edit above */}
        </div>
      </main>
    </div>
  );
}
