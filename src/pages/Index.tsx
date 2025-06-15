
import React from "react";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import Dashboard from "./Dashboard";

const Index = () => {
  return (
    <div>
      <Sidebar />
      <Topbar />
      <Dashboard />
    </div>
  );
};

export default Index;
