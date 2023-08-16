import React from "react";
import ButtonCTA from "./ButtonCTA";

type Props = {};

export default function CTA({}: Props) {
  return (
    <div className="flex flex-col w-1/3 absolute top-0 left-0 translate-y-[100%] ml-8 gap-4 ">
      <h1 className="font-bold text-5xl text-white">PALERMO</h1>
      <p className="font-semibold text-white text-[17px]">
        O RETORNO DE UMA LENDA
      </p>
      <ButtonCTA text="DISPONÍVEL AGORA"/>
    </div>
  );
}
