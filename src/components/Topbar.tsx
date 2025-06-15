
import React from "react";
import { CircleHelp } from "lucide-react";

export default function Topbar() {
  return (
    <header className="fixed left-64 right-0 top-0 h-16 bg-white border-b border-gray-200 flex items-center justify-between px-10 z-20">
      <div className="flex-1" />
      <div className="flex items-center gap-4">
        <span className="text-gray-600">Welcome, <span className="font-medium">John Doe</span></span>
        <button className="text-red-500 font-medium hover:underline ml-2">Logout</button>
      </div>
    </header>
  );
}
