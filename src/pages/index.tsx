import Image from "next/image";
import { Inter } from "next/font/google";
import ButtonBanner from "../components/CommonButton";
import CTA from "../components/CTA";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


import EmblaCarousel, {
  type Slide,
} from "../components/Carousel/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel-react";

const inter = Inter({ subsets: ["latin"] });

const OPTIONS: EmblaOptionsType = {
  dragFree: true,
  containScroll: "trimSnaps",
};

const slides: Slide[] = [
  {
    image: "/chut6.jpg",
    name: "PUMA FUTURE VERMELHA",
    price: "R$450,00",
  },
  {
    image: "/chut5.jpg",
    name: "NIKE VAPOR CAMPO",
    price: "R$215,00",
  },
 
  {
    image: "/chut4.webp",
    name: "PUMA ULTRA ",
    price: "R$350,00",
  },
  {
    image: "/chut3.webp",
    name: "NIKE PHANTOM GX",
    price: "R$200,00",
  },
  {
    image: "/chut2.webp",
    name: "NIKE PHANTOM",
    price: "R$310,00",
  },
  {
    image: "/chut1.webp",
    name: "ADIDAS FRIZZ X MESSI",
    price: "R$400,00",
  },
];

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
      <div className="justify-center flex">
        <h1 className="font-bold text-3xl">EXPLORE NOVOS PACKS</h1>
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="max-w-7xl">
          <EmblaCarousel
            slides={slides}
            options={{
              slidesToScroll: "auto",
              containScroll: "trimSnaps",
            }}
          />
        </div>
      </div>

      <div className="">
        <Footer />
      </div>
    </main>
  );
}
