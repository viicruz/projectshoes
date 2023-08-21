import React, { type ReactNode } from 'react'
import { ShoppingCart, SignIn, MagnifyingGlass} from "phosphor-react";
import Icon from "phosphor-react"
type Buttonprops = {
    name?:string
    icon?:ReactNode
}

export default function CommonButton(props:Buttonprops) {
  return (
    <button>
       
        {props.name}
        {props.icon}
     
    </button>
  )
}