import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full min-h-screen">
      <Header />

      <div className="w-full h-[500px]">
        <div className="w-full h-[100px] bg-gray-200 flex items-center">
            <p className="font-semibold text-2xl ml-16">ÁREA DO CLIENTE</p>
        </div>
      </div>

      <div className="">
        <Footer />
      </div>
    </main>
  );
}
