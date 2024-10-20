"use client"

import { useTransition } from "react"
export default function TabButton({children,isActive,onClick}){
    const [isPending,startTransition]=useTransition()
if(isActive)
{
    return <b>{children}</b>
}
if(isPending)
{
    return <b className="text-gray-500">{children}</b>
}
return (
<button className="btn" onClick={()=>{
     setTimeout(()=>{
         startTransition(()=>{
           onClick()
         })
     },1000)
}}>
 {children}
</button>
)
}