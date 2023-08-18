import React from "react";
import {
  FacebookLogo,
  InstagramLogo,
  TiktokLogo,
  TwitterLogo,
  YoutubeLogo,
} from "phosphor-react";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className="bg-black text-white py-8 justify-center items-center">
      <div className="flex px-4 ml-2">
        <div className="w-1/2">
          <h2 className="text-white font-bold text-xl mb-2">Suporte</h2>
          <div className="w-1/2 h-[2px] bg-white"></div>
          <ul className="text-gray-400 font-light">
            <li className="mb-1">Atendimento ao Cliente</li>
            <li className="mb-1">Formas de Pagamento</li>
            <li className="mb-1">Perguntas Frequentes</li>
            <li className="mb-1">Política de Entregas</li>
            <li className="mb-1">Política de Privacidade</li>
            <li className="mb-1">Termos e Condições de Uso</li>
          </ul>
        </div>
        <div className="w-1/2">
          <h2 className="text-white font-bold text-xl mb-2">
            Sobre a ProjectShoes
          </h2>
          <div className="w-1/2 h-[2px] bg-white"></div>
          <ul className="text-gray-400 font-light">
            <li className="mb-1">Carreiras</li>
            <li className="mb-1">A PUMA</li>
            <li className="mb-1">Notícias Corporativas</li>
            <li className="mb-1">Imprensa</li>
            <li className="mb-1">Sustentabilidade</li>
          </ul>
        </div>
        <div className="w-1/2">
          <h2 className="text-white font-bold text-xl mb-2">
            Contatos e Mídias
          </h2>
          <div className="w-1/2 h-[2px] bg-white"></div>

          <div className="flex flex-row w-full gap-4">
          <FacebookLogo size={30} color="white" />
          <YoutubeLogo size={30} color="white" />
          <InstagramLogo size={30} color="white" />
          <TiktokLogo size={30} color="white" />
          </div>
        </div>
      </div>
    </footer>
  );
}
