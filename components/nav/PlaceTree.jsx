import Link from "next/link"

export const PlaceTree=({topicId,links,link})=>{
const  currentLink=links[topicId]
const childIds=currentLink.childIds
return  (
    <li className="ml-8 ">
        <Link href={`${link}${currentLink.topic}`}>
     {currentLink.topic}
        </Link>
     {childIds.length > 0 && 
    <ol className="list-decimal">
        {
             childIds.map(id=><PlaceTree key={id} topicId={id} links={links}  link={`${link}${currentLink.topic}/`}/>)
        }
    </ol>
     }
    </li>
)
}