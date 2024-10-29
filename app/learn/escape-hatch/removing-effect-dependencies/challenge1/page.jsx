"use client"

import {useState,useEffect} from 'react'
export const CounterNotOkay=()=>{
    const [countNo,setCountNo]=useState(0)
    useEffect(()=>{
        const id=setInterval(()=>{
            setCountNo(countNo+1)

        },1000)
        return ()=>{
            clearInterval(id)
        }
    },[countNo])
    return (
        <>
        This is the problem we have.
        <p>Count not okay:{countNo}</p>
        Here the problem is that 
        </>
    )
}
export default function Page(){
    const [count,setCount]=useState(0)
    useEffect(()=>{
        const id=setInterval(()=>{
            setCount(count=>count+1)
        },1000)
        return ()=>{
            clearInterval(id)
        }
    })
    return (
        <div className="right-container">
            <div className="right-container-div ">
            <CounterNotOkay/>
            </div>
            <div className="right-container-div">
            Counter okay: {count}
            </div>
            <div className="right-container-div">
                <p>Description:</p>
                <p>
                   {' Here the solution is setCount(count=>count+1)'}
                </p>
            </div>
        </div>
    )
}