import { PlaceholderValue } from 'next/dist/shared/lib/get-img-props'
import React from 'react'

type Inputprops = {
    placeHolder?:string
    type?:string
}

export default function InputBar(props:Inputprops) {
  return (
    <div className="flex items-center p-2">
      <input
        type={props.type}
        placeholder={props.placeHolder}
        className="w-full h-[50px] px-2 border-[1px]"
      />
      
    </div>
  )
}