
import React, { useState } from "react";
import StatusCard from "@/components/StatusCard";
import { CircleHelp, Sun, CheckCircle, Clock, Filter, MessageSquare } from "lucide-react";

const platformColors = {
  "Discord": "bg-purple-100 text-purple-700 border-purple-200",
  "Slack": "bg-green-100 text-green-700 border-green-200",
  "Telegram": "bg-blue-100 text-blue-700 border-blue-200",
  "WhatsApp": "bg-emerald-100 text-emerald-700 border-emerald-200",
  "RocketChat": "bg-orange-100 text-orange-700 border-orange-200",
  "Web Dashboard": "bg-gray-100 text-gray-700 border-gray-200"
};

const platformStats = [
  { platform: "Discord", faqs: 89, questions: 12, accuracy: "96.2%" },
  { platform: "Slack", faqs: 67, questions: 4, accuracy: "94.8%" },
  { platform: "Telegram", faqs: 45, questions: 3, accuracy: "92.1%" },
  { platform: "WhatsApp", faqs: 28, questions: 2, accuracy: "98.5%" },
  { platform: "RocketChat", faqs: 18, questions: 1, accuracy: "89.3%" },
];

const recentQuestions = [
  {
    question: "How do I reset my password?",
    platform: "Discord",
    time: "2 minutes ago",
    status: "matched",
    user: "user#1234"
  },
  {
    question: "What are the system requirements?",
    platform: "Slack",
    time: "15 minutes ago",
    status: "matched",
    user: "john.doe@company.com"
  },
  {
    question: "Can I integrate with third-party tools?",
    platform: "Telegram",
    time: "1 hour ago",
    status: "unmatched",
    user: "@username"
  },
  {
    question: "How do I export my data?",
    platform: "WhatsApp",
    time: "2 hours ago",
    status: "matched",
    user: "+1234567890"
  },
  {
    question: "What is the pricing structure?",
    platform: "Discord",
    time: "3 hours ago",
    status: "matched",
    user: "admin#5678"
  },
];

export default function Dashboard() {
  const [selectedPlatform, setSelectedPlatform] = useState("All");
  
  const filteredQuestions = selectedPlatform === "All" 
    ? recentQuestions 
    : recentQuestions.filter(q => q.platform === selectedPlatform);

  const totalFaqs = platformStats.reduce((sum, stat) => sum + stat.faqs, 0);
  const totalUnmatched = platformStats.reduce((sum, stat) => sum + stat.questions, 0);
  const totalTodayQuestions = recentQuestions.length;

  return (
    <div className="flex flex-col flex-1 min-h-screen pl-64 pt-16 bg-gray-50">
      <div className="max-w-7xl mx-auto w-full px-8 py-10">
        <h1 className="text-2xl font-bold mb-1">Multi-Platform Dashboard</h1>
        <div className="text-gray-500 mb-6">Monitor your FAQ system performance across all platforms</div>
        
        {/* Overall Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <StatusCard
            icon={<CircleHelp className="w-6 h-6 text-blue-500" />}
            label="Total FAQs"
            value={totalFaqs}
          />
          <StatusCard
            icon={<Sun className="w-6 h-6 text-orange-400" />}
            label="Unmatched Questions"
            value={totalUnmatched}
            valueColor="text-orange-500"
          />
          <StatusCard
            icon={<CheckCircle className="w-6 h-6 text-green-500" />}
            label="Avg Accuracy"
            value="94.2%"
            valueColor="text-green-600"
          />
          <StatusCard
            icon={<Clock className="w-6 h-6 text-purple-500" />}
            label="Today's Questions"
            value={totalTodayQuestions}
            valueColor="text-purple-600"
          />
        </div>

        {/* Platform Stats */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 mb-8">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-gray-600" />
            Platform Performance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {platformStats.map((stat) => (
              <div key={stat.platform} className="border border-gray-100 rounded-lg p-4 hover:shadow-sm transition">
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${platformColors[stat.platform as keyof typeof platformColors]}`}>
                    {stat.platform}
                  </span>
                  <span className="text-sm text-gray-500">{stat.accuracy}</span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500">FAQs:</span>
                    <span className="font-semibold ml-1">{stat.faqs}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Pending:</span>
                    <span className="font-semibold ml-1 text-orange-600">{stat.questions}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Questions with Platform Filter */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 px-6 py-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Recent User Questions</h2>
            <div className="flex items-center gap-3">
              <Filter className="w-4 h-4 text-gray-400" />
              <select 
                value={selectedPlatform}
                onChange={(e) => setSelectedPlatform(e.target.value)}
                className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:border-blue-500 outline-none"
              >
                <option value="All">All Platforms</option>
                {platformStats.map(stat => (
                  <option key={stat.platform} value={stat.platform}>{stat.platform}</option>
                ))}
              </select>
            </div>
          </div>
          
          <ul className="space-y-2">
            {filteredQuestions.map((q, i) => (
              <li
                key={i}
                className={`flex items-center justify-between px-4 py-3 rounded-md transition
                            ${q.status === "unmatched" ? "bg-orange-50 border border-orange-100" : "bg-gray-50 border border-gray-100"}`}
              >
                <div className="flex items-center gap-3 flex-1">
                  <span className={`w-3 h-3 rounded-full ${q.status === "matched" ? "bg-green-500" : "bg-orange-400"}`} />
                  <div className="flex flex-col flex-grow">
                    <span className="font-medium">{q.question}</span>
                    <div className="flex items-center gap-3 text-sm text-gray-500">
                      <span>Asked {q.time}</span>
                      <span>by {q.user}</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${platformColors[q.platform as keyof typeof platformColors]}`}>
                        {q.platform}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-sm">
                  {q.status === "matched" ? (
                    <span className="text-green-600 font-medium">✓ Matched</span>
                  ) : (
                    <span className="text-orange-600 font-medium">⚠ No match</span>
                  )}
                </div>
              </li>
            ))}
          </ul>
          
          <div className="flex mt-6 justify-between items-center">
            <div className="text-sm text-gray-500">
              Showing {filteredQuestions.length} questions {selectedPlatform !== "All" && `from ${selectedPlatform}`}
            </div>
            <a href="/unknowns" className="bg-blue-600 text-white px-5 py-2 rounded-md shadow hover:bg-blue-700 transition">
              Review Unknown Questions
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
