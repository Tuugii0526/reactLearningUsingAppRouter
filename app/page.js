import { LinksGenerator } from "@/components/link/LinksGenerator"

const links=[{
  id:0,
  name:'react'
},{
  id:1,
  name:'react-dom'
}]
export default function Home() {
  return (
   <LinksGenerator links={links} />
  )
   }
