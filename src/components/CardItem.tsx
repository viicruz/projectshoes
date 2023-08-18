import React from "react";
import Image from "next/image";

type CardProps = {
  cardImage: string;
  productName?: string;
  priceTag?: string;
};

export default function CardItems(props: CardProps) {
  return (
    <div className=" w-[300px] h-[400px]">
      <div className="w-14 flex justify-center bg-black text-white font-semibold rounded">
        NOVO
      </div>

      <Image
        alt="produto"
        width={300}
        height={400}
        src={props.cardImage || "/default.jpg"}
      />
      <div className="border-b-2 "></div>
      <div className="justify-center flex">
        <h2>{props.productName}</h2>
      </div>
      <div className="justify-center flex">
        <h3 className="text-3xl">{props.priceTag}</h3>
      </div>
    </div>
  );
}
