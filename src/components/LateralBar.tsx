import React from 'react'
import CommonButton from "../components/CommonButton"

type Props = {}

export default function LateralBar({ }: Props) {
    return (
        <div className='bg-gray-200 w-80 min-h-screen flex flex-col'>
            <h1 className='font-bold text-4xl justify-center flex mt-2'>Project Shoes</h1>
            <div className='ml-4'>
                <h2>Calçados</h2>
                <h2>Usuários</h2>
            </div>
            <div className='w-full flex h-full justify-center items-end'>
                <button className='w-[80%] h-8 bg-orange-400 text-white text-center rounded-lg hover:bg-orange-500 font-semibold font-sans'>Ir ao Site</button>
            </div>
        </div>
    )
}