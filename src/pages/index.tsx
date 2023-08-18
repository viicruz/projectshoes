import Image from "next/image";
import { Inter } from "next/font/google";
import ButtonBanner from "../components/ButtonBanner";
import CTA from "../components/CTA";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import EmblaCarousel from "../components/Carousel/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel-react";

const inter = Inter({ subsets: ["latin"] });

const OPTIONS: EmblaOptionsType = {
  dragFree: true,
  containScroll: "trimSnaps",
};
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export default function Home() {
  return (
    <main className="w-full min-h-screen">
      <Header />

      <div className="w-full h-[500px] overflow-hidden relative mb-2">
        <Image
          className="w-full"
          priority
          width={1440}
          height={500}
          alt=""
          src={"/BannerShoes.png"}
        />
        <CTA />
      </div>

      <div className="w-full h-[500px] overflow-hidden relative flex justify-center items-center">
        <Image
          className="w-[100%]"
          priority
          width={1440}
          height={500}
          alt=""
          src={"/Future_Q3_1.webp"}
        />
        <div className="flex w-[30%] absolute justify-between mt-20">
          <ButtonBanner text="VER CHUTEIRAS" buttonColor="red" />
          <ButtonBanner text="CONHECER O PACK" buttonColor="red" />
        </div>
      </div>
      <div className="w-full flex justify-center items-cente">
        <div className="max-w-7xl">
          <EmblaCarousel
            slides={[1, 2, 3, 4, 5, 6]}
            options={{
              slidesToScroll: "auto",
              containScroll: "trimSnaps",
            }}
          />
        </div>
      </div>
      <div className="w-full flex justify-center items-center mt-[200px]">
        <p className="text-gray-900 font-light">
          A ProjectShoes é uma loja de destaque no cenário da moda urbana,
          reconhecida por oferecer uma ampla seleção de tênis de marcas
          renomadas, com estilos únicos e uma qualidade excepcional.
        </p>
      </div>

      
        <Footer />
     
    </main>
  );
}
