import React, { useState } from 'react'
import Link from "next/link";
import {useRouter} from "next/navigation";

//Libraries Imports
import * as Accordion from '@radix-ui/react-accordion';
import { CaretDown, CaretUp } from 'phosphor-react';

type Props = {}

export default function LateralBar({ }: Props) {

    const [iconChange, setIconChange] = useState<boolean>(false);
    const [iconChangeSale, setIconChangeSale] = useState<boolean>(false);
    const handleIconChange = () => {
        setIconChange(prevState => !prevState);
    }
    const handleIconChangeSale = () => {
        setIconChangeSale(prevState => !prevState);
    }

    const navigation = useRouter();

    return (
        <div className='bg-gray-200 w-80 min-h-screen flex flex-col'>
            <h1 className='font-bold text-4xl justify-center flex mt-2'>Project Shoes</h1>
            <div className='w-full h-full relative flex-1'>

                <Accordion.Root
                    type="multiple"
                    className="flex flex-col items-start justify-start w-full h-full gap-2 mt-8"
                >
                    <Accordion.Item value="item-1-calçados" className="w-full p-2 border border-black/10 rounded-xl">

                        <Accordion.Header className="items-start justify-start w-full">
                            <Accordion.Trigger className="items-start justify-start w-full">
                                <div className='flex items-center' onClick={handleIconChange}>
                                    <h2 className="w-full text-2xl font-bold ml-3 text-start">Calçados</h2>
                                    {iconChange ? <CaretUp size={24} /> : <CaretDown size={24} />}
                                </div>

                            </Accordion.Trigger>
                        </Accordion.Header>
                        <Accordion.Content className="flex flex-col items-start justify-start bg-gray-300/10 AccordionContent">
                            <div className='flex flex-col'>
                                <button className="w-full py-2 px-4 my-1 hover:bg-gray-300 rounded-lg text-start font-bold">
                                    Visão Geral
                                </button>
                                <button onClick={()=>{
                                   navigation.push("/addShoes");
                                }} className="w-full py-2 px-4 my-1 hover:bg-gray-300 rounded-lg text-start font-bold">
                                    Cadastrar Calçado
                                </button>
                                <button className="w-full py-2 px-4 my-1 hover:bg-gray-300 rounded-lg text-start font-bold">
                                    Buscar
                                </button>
                            </div>

                        </Accordion.Content>
                    </Accordion.Item>

                    <Accordion.Item value="item-2-vendas" className="w-full p-2 border border-black/10 rounded-xl">
                        <Accordion.Header className="items-start justify-start w-full">
                            <Accordion.Trigger className="items-start justify-start w-full">
                                <div className='flex items-center' onClick={handleIconChangeSale}>
                                    <h2 className="w-full text-2xl font-bold ml-3 text-start">Vendas</h2>
                                    {iconChangeSale ? <CaretUp size={24} /> : <CaretDown size={24} />}
                                </div>
                            </Accordion.Trigger>
                        </Accordion.Header>
                        <Accordion.Content className="flex flex-col items-start justify-start bg-gray-300/10 AccordionContent">

                            <div className='flex flex-col'>
                                <button className="w-full py-2 px-4 my-1 hover:bg-gray-300 rounded-lg text-start  font-bold">
                                    Dados de vendas
                                </button>
                                <button className="w-full py-2 px-4 my-1 hover:bg-gray-300 rounded-lg text-start  font-bold">
                                    Gráficos Detalhados
                                </button>
                                <button className="w-full py-2 px-4 my-1 hover:bg-gray-300 rounded-lg text-start  font-bold">
                                    Percentual Trimestral
                                </button>
                            </div>
                        </Accordion.Content>
                    </Accordion.Item>
                </Accordion.Root>

                <Link className='w-full flex absolute bottom-0 left-0 justify-center items-end pb-5' href="/">
                    <button className='w-[80%] h-8 bg-orange-400 text-white text-center rounded-lg hover:bg-orange-500 font-semibold font-sans'>Ir ao Site</button>
                </Link>

            </div>
        </div>
    )
}