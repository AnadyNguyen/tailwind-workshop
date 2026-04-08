export default function ExerciseThree() {
  return (
    <div className="flex min-h-screen">
      <main className="flex flex-1 flex-col items-center justify-center gap-4">
        {/* Edit the spacing classes below */}
        <div className="bg-red-500">
          <div className="ml-4 border-4 border-black bg-blue-500 p-10">
            <div className="flex flex-col gap-10 bg-white">
              <p className="text-center">Some sample text here</p>
              <div className="h-6 bg-orange-400" />
              <p className="text-center">Some sample text here</p>
            </div>
          </div>
        </div>
        {/* Don't edit below */}
      </main>
    </div>
  );
}
