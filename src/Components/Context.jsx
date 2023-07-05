import react, { useEffect } from 'react';
import { Products } from "../Procudct";
import { createContext } from "react";
import { useState } from "react";
export let MyContext=createContext();
export function Context(props)
{
    function getInitialValue()
    {
        let obj={};
        for(let i=0;i<Products.length;i++)
        {
            obj[i+1]=0;
        }
        return obj;
    }
    let [cart,setCart]=useState(getInitialValue());
    function addToCart(id)
    {
        setCart({...cart,[id]:cart[id]+1});
    }
    function removeFromCart(id)
    {
        setCart({...cart,[id]:cart[id]-1});
    }
    function totalAmount()
    {
        let totalAmount=0
        Products.map((product)=>
        {
            if(cart[product.id]>0)
            {
                totalAmount+=(cart[product.id]*product.price)
            }
        })
        return totalAmount;
    }
        return(<MyContext.Provider value={{addToCart,cart,removeFromCart,setCart,totalAmount}}>
            {props.children}
        </MyContext.Provider>
        );
}