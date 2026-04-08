import Image from "next/image";
import { HeartIcon, HistoryIcon } from "lucide-react";

export default function ExerciseSeven() {
  return (
    <div className="flex min-h-screen">
      <main className="flex flex-1 flex-col items-center justify-center gap-4">
        <div className="flex flex-col justify-center gap-2 rounded-xl border-4 border-black px-10 py-10">
          {/*  */}
          <div className="flex flex-col items-center gap-4 rounded-3xl bg-gray-100 pb-4">
            <div className="relative h-full w-full">
              <Image
                src="/lessons/3/space.png"
                width={0}
                height={0}
                unoptimized
                alt="An Astronaut"
                className="h-40 w-full rounded-t-3xl object-cover hover:scale-[500%]"
              />
              <div className="absolute left-2 top-2 flex flex-row items-center gap-1 p-1 text-gray-100">
                <HeartIcon className="h-6 w-6 fill-gray-100" />
              </div>
              <div className="absolute bottom-0.5 right-0.5 flex flex-row items-center gap-1 p-1 text-gray-100 shadow-sm">
                <HistoryIcon className="h-4 w-4" />
                <p className="text-sm font-bold italic">4 min ago</p>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center gap-4">
              <Image
                src="/lessons/3/astronaut.png"
                width={0}
                height={0}
                unoptimized
                alt="An Astronaut"
                className="h-24 w-24 rounded-full shadow-sm"
              />
              <div className="justify-start">
                <p className="font-bold">Jerry Price</p>
                <p>Astronaut</p>
              </div>
            </div>
          </div>
          {/* Don't edit above */}
        </div>
      </main>
    </div>
  );
}
