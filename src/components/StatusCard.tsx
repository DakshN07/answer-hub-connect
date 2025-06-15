
import React from "react";

type StatusCardProps = {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  desc?: string;
  iconBg?: string;
  valueColor?: string;
};

export default function StatusCard({ icon, label, value, desc, iconBg = "bg-blue-100", valueColor = "text-gray-900" }: StatusCardProps) {
  return (
    <div className="flex flex-col bg-white rounded-lg shadow-sm border border-gray-100 px-6 py-4 min-w-[160px] min-h-[70px]">
      <div className="flex items-center mb-1 gap-2">
        <span className={`p-2 rounded-full ${iconBg}`}>{icon}</span>
        <span className="text-sm text-gray-500">{label}</span>
      </div>
      <div className={`text-2xl font-bold ${valueColor}`}>{value}</div>
      {desc && <div className="text-xs text-gray-400 mt-1">{desc}</div>}
    </div>
  );
}
