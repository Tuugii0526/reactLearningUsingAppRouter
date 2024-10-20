"use client"


import { topics } from "@/lib/links";
import { PlaceTree } from "./PlaceTree";
export const Nav = () => {
    const root=topics[0]
    const planetIds=root.childIds
    const link='/'
  return <ol className="list-decimal">
    {
        planetIds.map(id=><PlaceTree key={id} placeId={id} places={topics} link={link}/>)
    }
  </ol>;
};
