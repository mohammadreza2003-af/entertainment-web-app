"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { navitems } from "@/constant";
import { useNavStore } from "@/store";
import { usePathname } from "next/navigation";

export function AppSidebar() {
  const path = usePathname();
  const { activeLink, setActiveLink } = useNavStore();

  useEffect(() => {
    setActiveLink(path);
  }, [path, setActiveLink]);

  return (
    <Sidebar variant="floating" className="h-[90vh] my-auto left-4">
      <SidebarHeader className="flex items-center justify-center h-24">
        <Link href="/">
          <Image src="/images/logo.svg" alt="logo" width={32} height={32} />
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup className="h-full">
          <SidebarGroupContent className="h-full">
            <SidebarMenu className="flex flex-col space-y-6 items-center justify-start h-full">
              {navitems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="hover:bg-transparent">
                    <Link href={item.url}>
                      <div className="w-6 h-6">
                        <item.icon
                          className={`w-full h-full  hover:text-red-500 transition duration-200 ease-in ${
                            activeLink === item.url
                              ? "text-white"
                              : "text-gray-500"
                          }`}
                        />
                      </div>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="flex flex-col items-center justify-center h-16 bg-gray-800 text-white">
        <h2 className="text-center">Profile</h2>
      </SidebarFooter>
    </Sidebar>
  );
}
