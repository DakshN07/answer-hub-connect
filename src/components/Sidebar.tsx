
import React from "react";
import {
  LayoutDashboard,
  MessageSquareQuestion,
  CircleHelp,
  Plus,
  Users,
  BarChart2,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import cn from "classnames";

const navItems = [
  {
    label: "Dashboard",
    icon: <LayoutDashboard className="w-5 h-5 mr-2" />,
    path: "/dashboard",
  },
  {
    label: "FAQs",
    icon: <CircleHelp className="w-5 h-5 mr-2" />,
    path: "/faqs",
  },
  {
    label: "Unknown Questions",
    icon: <MessageSquareQuestion className="w-5 h-5 mr-2" />,
    path: "/unknowns",
  },
  {
    label: "Add FAQ",
    icon: <Plus className="w-5 h-5 mr-2" />,
    path: "/add-faq",
  },
  {
    label: "Team Management",
    icon: <Users className="w-5 h-5 mr-2" />,
    path: "/team",
  },
  {
    label: "Analytics",
    icon: <BarChart2 className="w-5 h-5 mr-2" />,
    path: "/analytics",
  },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <aside className="fixed top-0 left-0 h-full min-h-screen w-64 bg-white border-r border-gray-200 flex flex-col px-0 z-30">
      <div className="h-16 flex items-center px-6 border-b border-gray-100">
        <span className="flex items-center font-bold text-xl tracking-tight text-blue-700">
          <span className="rounded-full bg-blue-100 p-2 mr-2">
            <CircleHelp className="w-6 h-6 text-blue-500" />
          </span>
          FAQ Dashboard
        </span>
      </div>
      <nav className="flex-1 py-6">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                to={item.path}
                className={cn(
                  "flex items-center px-6 py-2 rounded-md transition-colors duration-100 text-gray-800 hover:bg-blue-50 hover:text-blue-700 font-medium",
                  location.pathname === item.path && "bg-blue-100 text-blue-700 font-semibold"
                )}
              >
                {item.icon}
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
