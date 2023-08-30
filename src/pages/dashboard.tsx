import LateralBar from "@/components/LateralBar";
import Charts from "@/components/Charts"

export default function Home() {
  return (
    <main className="w-full min-h-screen flex">
      <div>
        <LateralBar />
      </div>
      <div className="flex-grow flex justify-center items-start">
        <Charts />
      </div>
    </main>
  );
}


