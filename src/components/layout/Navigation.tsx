"use client";
import Link from "next/link";
import Wrapper from "../common/wrapper";
import Image from "next/image";
import { navitems } from "@/constant";
import { useEffect } from "react";
import NavigationItem from "./NavigationItem";
import { usePathname } from "next/navigation";
import { useNavStore } from "@/store";

export default function Navigation() {
  const path = usePathname();
  const { activeLink, setActiveLink } = useNavStore();

  useEffect(() => {
    setActiveLink(path);
  }, [path, setActiveLink]);

  return (
    <Wrapper className="md:hidden mt-4">
      <nav className="bg-sidebar p-4 rounded-3xl top-5 w-full">
        <div className="flex items-center justify-between">
          <div>
            <Link href="/">
              <Image src="/images/logo.svg" alt="logo" width={32} height={32} />
            </Link>
          </div>
          <div className="flex items-center gap-4">
            {navitems.map((item, index) => (
              <NavigationItem item={item} activeItem={activeLink} key={index} />
            ))}
          </div>
          <div>
            <h2 className="text-center">Profile</h2>
          </div>
        </div>
      </nav>
    </Wrapper>
  );
}
