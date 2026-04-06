import Link from "next/link";

export default function Home() {

  const exercises = [
    { title: "Exercise 1 - Colors", href: "/exercise/1" },
    { title: "Exercise 2 - Hover Effect", href: "/exercise/2" },
    { title: "Exercise 3 - Padding and Margin", href: "/exercise/3" },
    { title: "Exercise 4 - Flexbox Demo", href: "/exercise/4" },
    { title: "Exercise 5 - Card Design", href: "/exercise/5" },
    { title: "Exercise 6 - Responsiveness", href: "/exercise/6" },
    { title: "Exercise 7 - All Fun and Games", href: "/exercise/7" },
  ];

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-orange-50 via-white to-teal-100">
      <main className="flex w-[100vw] flex-1 flex-col items-center justify-center px-6 py-20 sm:px-10 lg:px-32 xl:px-40">
        <h1 className="mb-1 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-teal-600 to-teal-800">Welcome to the Tailwind Workshop!</h1>
        <div className="flex flex-col mt-8 gap-3 px-4 w-full max-w-md">
          {exercises.map((exercise) => (
            <div key={exercise.href} className="flex mb-2 w-full text-center items-center">
              <Link href={exercise.href} className="text-lg px-3 py-2 rounded-md w-full bg-teal-700 text-white transition-all hover:bg-teal-600 hover:scale-105 hover:drop-shadow-[0_5px_2px_rgba(0,0,0,0.2)] hover:font-semibold hover:text-orange-50">
                {exercise.title}
              </Link>
            </div>
          ))}
        </div>
      </main>
      <div className="flex flex-col items-center justify-center py-4">
        <p className="text-center text-sm italic text-gray-700">
          Created by{" "}
          <Link href="https://tsiv.dev/" className="text-blue-800 hover:underline">
            Daniel Tsivkovski
          </Link>{" "}
          and{" "}
          <Link href="https://dylanravel.com/" className="text-blue-800 hover:underline">
            Dylan Ravel
          </Link>{" "}
          in association with Chapman Computer Science Club. <br />
          Free to use and modify with attribution under the{" "}
          <Link
            href="https://github.com/dtsivkovski/tailwind-workshop/blob/main/LICENSE"
            className="text-blue-800 hover:underline"
          >
            MIT License
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
