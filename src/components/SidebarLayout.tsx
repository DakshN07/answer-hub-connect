
import React from "react";
import { useSidebar } from "@/components/ui/sidebar";

interface SidebarLayoutProps {
  children: React.ReactNode;
}

const SidebarLayout: React.FC<SidebarLayoutProps> = ({ children }) => {
  const { state } = useSidebar();

  return (
    <div className={`flex w-full min-h-screen transition-all duration-200 ${state === "collapsed" ? "md:ml-[4rem]" : "md:ml-[16rem]"}`}>
      {children}
    </div>
  );
};

export default SidebarLayout;
