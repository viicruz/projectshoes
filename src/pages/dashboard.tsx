import LateralBar from "@/components/LateralBar";


const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export default function Home() {
  return (
    <main className="w-full min-h-screen">
      <div>
        <LateralBar/>
      </div>

    </main>
  );
}
