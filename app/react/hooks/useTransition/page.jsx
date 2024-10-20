"use client"

import {useState} from "react"
import { poppins } from "@/app/fonts/fonts"
import TabButton from "./TabButton"
import { AboutTab } from "./AboutTab"
import PostsTab from "./PostsTab"
import { ContactTab } from "./ContactTab"
export default function Page(){
    const [tab,setTab]=useState('about')
    function selectTab(tab){
        setTab(tab)
    }
    return (
        <div className="w-full h-full flex flex-col items-center">
            <p className={`text-center ${poppins.className}`}>Use Transiton</p>
            <div className="w-full flex justify-center gap-2">
                <TabButton isActive={tab==='about'} onClick={()=>{
                    selectTab('about')
                }} >
                    About
                </TabButton>
                <TabButton isActive={tab==='posts'} onClick={()=>{
                    selectTab('posts')
                }} >
                    Posts
                </TabButton>
                <TabButton isActive={tab==='contact'} onClick={()=>{
                    selectTab('contact')
                }} >
                    Contact
                </TabButton>
            </div>
            <hr/>
                {tab==='about' && <AboutTab />}
                {tab==='posts' && <PostsTab/>}
                {tab==='contact' && <ContactTab/>}
        </div>
        
    )
}