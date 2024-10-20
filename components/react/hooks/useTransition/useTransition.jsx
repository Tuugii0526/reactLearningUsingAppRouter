"use client"
import { useTransition } from "react"
export const useTransitionPage=()=>{
    const [isPending,startTransition]=useTransition()
    return (
        <div>Hello</div>
    )
}