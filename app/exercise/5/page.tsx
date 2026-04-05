export default function ExerciseTwo() {
  return (
    <div className="flex min-h-screen">
      <main className="flex flex-1 flex-col items-center justify-center gap-4">
        {/* Edit the card below */}
        <div className="flex flex-col border border-black max-w-sm">
          <h2>Computer Science Club</h2>
          <p>Chapman University</p>
          <p>Our goal is to help CS students meet new people, build and strengthen their skills, and have fun!</p>
          <p>Featured Events:</p>
          <ul>
            <li>PantherHacks</li>
            <li>Boolean Bonfire</li>
            <li>Presentation Night</li>
          </ul>
          <div>
            <button className="border border-black">Join now!</button>
          </div>
        </div>
        {/* Don't edit above */}
      </main>
    </div>
  );
}
