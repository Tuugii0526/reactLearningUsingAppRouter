import { LinksContainer } from "@/components/react/hooks/linksContainer"
import { fetchLinks } from "@/lib/actions"

export default async function Page(){
  let links
  try {
     links=await fetchLinks()
  } catch (error) {
    
  }
    return (
      <div className="w-full flex flex-col items-center gap-4 ">
        <LinksContainer links={links} />
      </div>
    )
}