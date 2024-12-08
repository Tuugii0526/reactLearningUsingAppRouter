"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
export const PlaceTree = ({ topicId, links, link }) => {
  const pathName = usePathname();
  const currentLink = links[topicId];
  const childIds = currentLink.childIds;
  const isCurrent = pathName == `${link}${currentLink.topic}`;
  return (
    <li className="ml-8 ">
      <Link
        href={`${link}${currentLink.topic}  `}
        className={`${isCurrent ? "bg-green-500 p-1 rounded-md" : ""}`}
      >
        {currentLink.topic}
      </Link>
      {childIds.length > 0 && (
        <ol className="list-decimal">
          {childIds.map((id) => (
            <PlaceTree
              key={id}
              topicId={id}
              links={links}
              link={`${link}${currentLink.topic}/`}
            />
          ))}
        </ol>
      )}
    </li>
  );
};
