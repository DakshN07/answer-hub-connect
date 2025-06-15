
import React from "react";
import StatusCard from "@/components/StatusCard";
import { CheckCircle, BarChart2, Clock, Star } from "lucide-react";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Pie, PieChart, Cell } from "recharts";

const metrics = [
  {
    label: "Total Questions",
    icon: <BarChart2 className="text-blue-500 w-6 h-6" />,
    value: 2847,
    desc: "+12% from last week",
    iconBg: "bg-blue-100",
  },
  {
    label: "Match Accuracy",
    icon: <CheckCircle className="text-green-600 w-6 h-6" />,
    value: "87.3%",
    desc: "+2.1% from last week",
    iconBg: "bg-green-100",
    valueColor: "text-green-700"
  },
  {
    label: "Response Time",
    icon: <Clock className="text-purple-500 w-6 h-6" />,
    value: "0.8s",
    desc: "15% faster",
    iconBg: "bg-purple-100",
    valueColor: "text-purple-700"
  },
  {
    label: "User Satisfaction",
    icon: <Star className="text-yellow-400 w-6 h-6" />,
    value: "4.6/5",
    desc: "+0.2 from last week",
    iconBg: "bg-yellow-100",
    valueColor: "text-yellow-500"
  }
];

const questionsOverTime = [
  { day: "Mon", Answered: 540, Unanswered: 50 },
  { day: "Tue", Answered: 500, Unanswered: 40 },
  { day: "Wed", Answered: 610, Unanswered: 55 },
  { day: "Thu", Answered: 720, Unanswered: 65 },
  { day: "Fri", Answered: 850, Unanswered: 75 },
  { day: "Sat", Answered: 390, Unanswered: 30 },
  { day: "Sun", Answered: 350, Unanswered: 25 },
];

const accuracyTrend = [
  { week: "Week 1", Accuracy: 85 },
  { week: "Week 2", Accuracy: 88 },
  { week: "Week 3", Accuracy: 91 },
  { week: "Week 4", Accuracy: 94 },
];

const categoryPieData = [
  { name: "Security & Account", value: 35, color: "#3b82f6" },
  { name: "Billing & Payments", value: 28, color: "#22c55e" },
  { name: "General Information", value: 22, color: "#a78bfa" },
  { name: "Support & Help", value: 15, color: "#facc15" },
];

const mostAsked = [
  { question: "How do I reset my password?", category: "Security & Account", count: 847 },
  { question: "What are your business hours?", category: "General Information", count: 623 },
  { question: "How do I cancel my subscription?", category: "Billing & Payments", count: 456 },
  { question: "Where can I find my invoice?", category: "Billing & Payments", count: 389 },
  { question: "How do I contact support?", category: "Support & Help", count: 312 }
];

const peakHours = [
  { hour: "9AM", count: 110 },
  { hour: "11AM", count: 185 },
  { hour: "2PM", count: 220 },
  { hour: "4PM", count: 175 },
  { hour: "6PM", count: 150 },
  { hour: "8PM", count: 95 },
];

export default function Analytics() {
  return (
    <div className="flex flex-col flex-1 min-h-screen pl-64 pt-16 bg-gray-50">
      <div className="max-w-7xl mx-auto w-full px-8 py-10">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h1 className="text-2xl font-bold mb-1">Analytics & Statistics</h1>
            <div className="text-gray-500">Insights into your FAQ performance and user engagement</div>
          </div>
          <div className="flex items-center gap-3">
            <select className="px-3 py-2 border border-gray-200 rounded-lg">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>This Year</option>
            </select>
            <button className="ml-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white rounded shadow font-semibold">Export Report</button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {metrics.map((m, i) => (
            <StatusCard
              key={i}
              icon={m.icon}
              label={m.label}
              value={m.value}
              desc={m.desc}
              iconBg={m.iconBg}
              valueColor={m.valueColor}
            />
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <div className="col-span-3 bg-white rounded-lg shadow-sm border border-gray-100 p-6">
            <div className="font-semibold mb-3">Questions Over Time</div>
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={questionsOverTime}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="Answered" stackId="a" fill="#3b82f6" />
                <Bar dataKey="Unanswered" stackId="a" fill="#ef4444" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="col-span-2 flex flex-col gap-6">
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
              <div className="font-semibold mb-3">Accuracy Trend <span className="text-green-500 text-sm font-normal">/ Improving</span></div>
              <ResponsiveContainer width="100%" height={80}>
                <LineChart data={accuracyTrend}>
                  <XAxis dataKey="week" hide />
                  <YAxis domain={[80, 100]} hide />
                  <Line type="monotone" dataKey="Accuracy" stroke="#10b981" strokeWidth={2} dot />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 flex flex-col">
              <div className="font-semibold mb-3">Questions by Category</div>
              <div className="flex items-center gap-4">
                <PieChart width={110} height={110}>
                  <Pie
                    data={categoryPieData}
                    cx={55}
                    cy={55}
                    innerRadius={30}
                    outerRadius={50}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {categoryPieData.map((entry, idx) => (
                      <Cell key={`cell-${idx}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
                <div className="flex-1 flex flex-col gap-2">
                  {categoryPieData.map((c, idx) => (
                    <div key={c.name} className="flex items-center gap-2">
                      <span className={`rounded-full w-3 h-3`} style={{ backgroundColor: c.color }}></span>
                      <span className="text-gray-700 text-sm font-medium flex-1">{c.name}</span>
                      <span className="text-gray-500 text-xs font-bold">{c.value}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
              <div className="font-semibold mb-3">Peak Question Hours</div>
              <ResponsiveContainer width="100%" height={42}>
                <BarChart data={peakHours}>
                  <XAxis dataKey="hour" />
                  <Tooltip />
                  <Bar dataKey="count" fill="#2563eb" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
            <div className="font-semibold mb-3">Most Asked FAQs</div>
            <ul>
              {mostAsked.map((q, idx) => (
                <li key={idx} className="flex justify-between items-center py-2 border-b last:border-0">
                  <div>
                    <span className="font-medium">{q.question}</span>
                    <div className="text-gray-400 text-xs">{q.category}</div>
                  </div>
                  <span className="text-gray-700 font-semibold">{q.count} <span className="text-xs font-normal text-gray-400">asks</span></span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
