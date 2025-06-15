
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { CircleHelp, LayoutDashboard, MessageSquareQuote, Plus, Users, BarChart2 } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import React from "react";

const navItems = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    path: "/dashboard",
  },
  {
    label: "FAQs",
    icon: CircleHelp,
    path: "/faqs",
  },
  {
    label: "Unknown Questions",
    icon: MessageSquareQuote,
    path: "/unknowns",
  },
  {
    label: "Add FAQ",
    icon: Plus,
    path: "/add-faq",
  },
  {
    label: "Team Management",
    icon: Users,
    path: "/team",
  },
  {
    label: "Analytics",
    icon: BarChart2,
    path: "/analytics",
  },
];

export default function AppSidebar() {
  const location = useLocation();

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>
            <span className="flex items-center font-bold text-xl text-blue-700">
              <span className="rounded-full bg-blue-100 p-2 mr-2">
                <CircleHelp className="w-6 h-6 text-blue-500" />
              </span>
              FAQ Dashboard
            </span>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.label}>
                  <SidebarMenuButton
                    asChild
                    isActive={location.pathname === item.path}
                  >
                    <Link to={item.path}>
                      <item.icon className="w-5 h-5 mr-2" />
                      <span>{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
