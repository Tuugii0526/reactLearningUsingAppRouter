import { poppins } from "@/app/fonts/fonts"
import Link from "next/link"
export const LinksGenerator=({links})=>{
    return (
        <ul className="h-10 flex justify-around items-center">
        {links.map(link=><Link href={`/${link?.name}`} key={link?.id} className="h-fit w-fit p-2 bg-yellow-200 rounded-full">
          <li  className={`${poppins.className} capitalize`}>{link?.name} </li>
        </Link>)}
      </ul>
    )
}