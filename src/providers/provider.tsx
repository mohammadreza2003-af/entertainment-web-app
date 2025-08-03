"use client";
import { FC, ReactNode } from "react";
import { ThemeProvider } from "next-themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

type ProviderProps = {
  children: ReactNode;
};

const Provider: FC<ProviderProps> = ({ children }) => {
  const queryClient = new QueryClient();

  return (
    <SidebarProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider attribute="class" enableSystem defaultTheme="dark">
          <AppSidebar />
          {children}
        </ThemeProvider>
      </QueryClientProvider>
    </SidebarProvider>
  );
};

export default Provider;
