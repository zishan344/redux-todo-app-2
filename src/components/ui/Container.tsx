import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";
interface TContainer {
  children: ReactNode;
  className?: string;
}
const Container = ({ children, className }: TContainer) => {
  return (
    <div className={cn("h-screen w-full mx-auto max-w-7xl", className)}>
      {children}
    </div>
  );
};

export default Container;
