import LateralBar from "@/components/specific/LateralBar";
import Charts from "@/components/specific/Charts"

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


