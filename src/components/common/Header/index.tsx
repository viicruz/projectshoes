import React from "react";
import { ShoppingCart, SignIn, MagnifyingGlass } from "phosphor-react";
import Image from "next/image";
import Link from "next/link";

import SearchBar from "../SearchBar";
import CommonButton from "../IconButton";

type Props = {};

export default function Header ({ }: Props) {
  return (
    <header>
      <div className="bg-yellow-600 w-full h-10 flex justify-center items-center">
        <p className="text-white underline font-semibold">
          Promoções semanais no site oficial!
        </p>
      </div>

      <nav className="w-full h-20 bg-black flex items-center justify-between">
        <div className="ml-4 flex items-center">
          <Link href="/">
            <Image src="/logo.png" alt="Logo" width={80} height={40} />
          </Link>
          <ul className="flex space-x-6 text-white ml-8">
            <li>
              <a
                href="#"
                className="hover:underline decoration-yellow-600 hover:text-gray-300"
              >
                Masculino
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:underline decoration-yellow-600 hover:text-gray-300"
              >
                Feminino
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:underline decoration-yellow-600 hover:text-gray-300"
              >
                Esportes
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:underline decoration-yellow-600 hover:text-gray-300"
              >
                Coleções
              </a>
            </li>
          </ul>
        </div>

        <div className="flex items-center mr-4">
          <div className="mr-4">
            <SearchBar icon={MagnifyingGlass} />
          </div>

          <div className="space-x-4 mr-4">
            <CommonButton icon={<ShoppingCart size={24} color="white" />} />

            <Link href="login">
              <CommonButton icon={<SignIn size={24} color="white" />} />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
