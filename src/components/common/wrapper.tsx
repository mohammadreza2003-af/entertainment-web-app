import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type WrapperProps = {
  children: ReactNode;
  className?: string;
};
export default function Wrapper({ children, className }: WrapperProps) {
  return (
    <div
      className={cn(
        "max-w-7xl mx-auto w-full sm:px-8 px-6 md:my-6 my-4",
        className
      )}
    >
      {children}
    </div>
  );
}
