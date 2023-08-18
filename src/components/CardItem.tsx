import React from "react";
import Image from "next/image";


type CardProps = {
  cardImage: string;
  productName?: string;
  priceTag?: string;
};

export default function CardItems(props: CardProps) {
  return (
    <div className="border-gray-500 border-2 w-[300px] h-[400px]">
      <h1>{props.productName}</h1>
      <Image alt="produto" width={100} height={100} src={props.cardImage || "/default.jpg"}/>

      <h2 className="flex flex-end">{props.priceTag}</h2>
    </div>
  );
}
