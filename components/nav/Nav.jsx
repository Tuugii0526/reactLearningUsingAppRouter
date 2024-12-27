import { fetchLinks } from "@/lib/actions";
import { NavSub } from "./NavSub";
export const Nav = async () => {
  const links = await fetchLinks();
  return <NavSub links={links} />;
};
