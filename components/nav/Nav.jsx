import { fetchLinks } from "@/lib/actions";
import { NavSub } from "./NavSub";
export const Nav =async () => {
  const links= await fetchLinks()
// const [links,setLinks]=useState([])
// useEffect( ()=>{
//   async function getLinks(){
//     try {
//       const links=await fetchLinks()
//       setLinks(links)
//     } catch (error) {
      
//     }
//   }
//   setLinks(links)
// },[])
  return (
    <NavSub links={links} />
  )
};
 