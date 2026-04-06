import Image from "next/image";

export default function ExerciseTwo() {
  const cats = ["camille", "luna", "panda"];

  return (
   <div className="flex w-full flex-col items-center gap-4 px-6 pb-32 pt-10">
      <main className="flex flex-col w-full items-center justify-center gap-4">
        {/* Edit the classes BELOW using breakpoints */}
        <div className="flex w-full flex-col border border-black">
          <div className="grid w-full grid-cols-4 items-center gap-2 p-4">
          {/* Edit the classes ABOVE using breakpoints. No need to touch the rest below */}
            {cats.map((cat) =>
              Array.from({ length: 4 }, (_, i) => {
                const photoNumber = i + 1;
                const src = `/lessons/6/${cat}${photoNumber}.jpg`;
                const alt = cat[0].toUpperCase() + cat.slice(1);

                return (
                  <div key={`${cat}-${photoNumber}`} className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      className="object-cover"
                      src={src}
                      alt={alt}
                      fill
                    />
                  </div>
                );
              })
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
