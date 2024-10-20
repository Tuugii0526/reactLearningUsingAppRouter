import Link from "next/link"

export const PlaceTree=({placeId,places,link})=>{
const  place=places[placeId]
const childIds=place.childIds
return  (
    <li className="ml-8 capitalize">
        <Link href={`${link}${place.title}`}>
     {place.title}
        </Link>
     {childIds.length > 0 && 
    <ol className="list-decimal">
        {
             childIds.map(id=><PlaceTree key={id} placeId={id} places={places}  link={`${link}${place.title}/`}/>)
        }
    </ol>
     }
    </li>
)
}