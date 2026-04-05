import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-orange-50 via-white to-teal-100">
      <main className="flex w-[100vw] flex-1 flex-col px-6 py-20 sm:px-10 lg:px-32 xl:px-40">
        <h1 className="mb-1 text-4xl font-bold text-teal-800">Welcome to the Tailwind Workshop!</h1>
        <ol className="mt-4 gap-4 px-4">
          <li className="text-lg text-gray-700">
            <a href="/exercise/1" className="text-blue-800 hover:underline">
              Exercise 1 - Colors
            </a>
          </li>
          <li className="text-lg text-gray-700">
            <a href="/exercise/2" className="text-blue-800 hover:underline">
              Exercise 2 - Hover Effect
            </a>
          </li>
          <li className="text-lg text-gray-700">
            <a href="/exercise/3" className="text-blue-800 hover:underline">
              Exercise 3 - Padding and Margin
            </a>
          </li>
          <li className="text-lg text-gray-700">
            <a href="/exercise/4" className="text-blue-800 hover:underline">
              Exercise 4 - Flexbox Demo
            </a>
          </li>
          <li className="text-lg text-gray-700">
            <a href="/exercise/5" className="text-blue-800 hover:underline">
              Exercise 5 - Card Design
            </a>
          </li>
        </ol>
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
