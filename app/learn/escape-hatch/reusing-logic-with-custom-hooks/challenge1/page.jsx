"use client"

import {useState,useEffect} from 'react'
const useInterval=(callback,delay)=>{
    useEffect(()=>{
        const id=setInterval(callback,delay)
        return ()=>{
            clearInterval(id)
        }
    },[callback,delay])
}
const useCounter=()=>{
    const [count,setCount]=useState(0)
    useInterval(()=>{
        setCount(count=>count+1)
    },1000)
    return count
}
export default function Page(){
    const count=useCounter()
return (
    <div>{count}</div>
)

}