export default function ExerciseTwo() {
  return (
    <div className="flex min-h-screen">
      <main className="flex flex-1 flex-col items-center justify-center gap-4">
        {/* Edit the card below */}
        <div className="flex max-w-sm flex-col border border-black">
          <h2>Computer Science Club</h2>
          <p>Chapman University</p>
          <p className="font-serif">Our goal is to help CS students meet new people, build and strengthen their skills, and have fun!</p>
          <p>Featured Events</p>
          <ul>
            <li className="list-disc ml-4">PantherHacks</li>
            <li className="list-decimal ml-5">Boolean Bonfire</li>
            <li className="list-disc ml-4">Presentation Night</li>
          </ul>
          <div>
            <button className="border border-black hover:drop-shadow-2xl m-4 bg-red-300">Join now</button>
          </div>
        </div>
        {/* Don't edit above */}
      </main>
    </div>
  );
}
