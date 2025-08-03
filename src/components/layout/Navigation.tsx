"use client";
import Link from "next/link";
import Wrapper from "../common/wrapper";
import Image from "next/image";
import { navitems } from "@/constant";
import { useEffect, useState } from "react";
import NavigationItem from "./NavigationItem";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const path = usePathname();
  const [activeItem, setActiveItem] = useState<string | null>("home");

  useEffect(() => {
    const newPath = path.split("/")[1];
    setActiveItem(newPath);
  }, [path]);

  return (
    <Wrapper className="absolute top-8 md:hidden">
      <nav className="bg-sidebar p-4 rounded-3xl top-5 w-full">
        <div className="flex items-center justify-between">
          <div>
            <Link href="/">
              <Image src="/images/logo.svg" alt="logo" width={32} height={32} />
            </Link>
          </div>
          <div className="flex items-center gap-4">
            {navitems.map((item, index) => (
              <NavigationItem item={item} activeItem={activeItem} key={index} />
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
