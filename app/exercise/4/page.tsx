import InteractiveFlexbox from "@/components/InteractiveFlexbox";

export default function ExerciseFour() {
  return (
    <div className="flex w-full flex-col items-center gap-4 px-6 pb-32 pt-10">
      <main className="flex w-full max-w-3xl flex-col gap-4">
        {/* !! DO NOT TOUCH the InteractiveFlexbox component below. Go to the page and just click around */}
        <InteractiveFlexbox />
        {/* !! DO NOT TOUCH the InteractiveFlexbox component above. Go to the page and just click around */}
      </main>
    </div>
  );
}
