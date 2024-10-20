"use client"

import { memo} from "react"
const PostsTab=memo(function PostsTab(){
    let items=[]
    for (let i = 0; i < 500; i++) {
        items.push(<SlowPost key={i} index={i} />);
      }
      return (
        <ul className="p-5 ring-1 rounded-lg items-center flex flex-col w-full h-[200px] overflow-y-scroll ">
          {items}
        </ul>
      );
})
function SlowPost({index}){
return (
    <li>
        Post {index+1}
    </li>
)
}
export default PostsTab