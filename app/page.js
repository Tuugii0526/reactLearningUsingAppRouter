import { LinksGenerator } from "@/components/link/LinksGenerator"
import { linksForRoot } from "@/lib/links"
export default function Home() {
  return (
   <LinksGenerator links={linksForRoot} />
  )
   }
