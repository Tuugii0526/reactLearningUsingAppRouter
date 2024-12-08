"use client";

import { classifyLinks } from "@/lib/classifyLinks";
import { PlaceTree } from "./PlaceTree";
import { useMemo } from "react";
export const NavSub = ({ links }) => {
  if (!links) {
    throw new Error("links should be passed as props");
  }
  if (!links.length) {
    return;
  }
  const arrangedLinks = useMemo(() => {
    return classifyLinks(links);
  }, [links]);
  const root = arrangedLinks[1];
  const rootChildIds = root.childIds;
  const link = "/";
  return (
    <ol className="list-decimal">
      {rootChildIds.map((id) => (
        <PlaceTree key={id} topicId={id} links={arrangedLinks} link={link} />
      ))}
    </ol>
  );
};
