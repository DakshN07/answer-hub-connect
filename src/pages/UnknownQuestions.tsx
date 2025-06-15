
import React from "react";
import { Wand2 } from "lucide-react";

const unknowns = [
  {
    priority: "high",
    asked: 2,
    question: "Can I integrate with third-party tools like Slack and Discord?",
    users: "user123, admin456, moderator789",
    lastAsked: "2 hours ago",
    aiAnswer: "Yes, we offer integrations with popular third-party tools including Slack, Discord, Microsoft Teams, and Zapier. You can set up webhooks to receive notifications and sync data automatically. Visit our integrations page in settings to configure these connections."
  },
  {
    priority: "medium",
    asked: 3,
    question: "Is there a mobile app available?",
    users: "mobile_user, app_seeker",
    lastAsked: "1 day ago",
    aiAnswer: "Currently, we offer a responsive web application that works great on mobile browsers. A dedicated mobile app is in development and will be available in Q2 2024. You can add our web app to your home screen for a native-like experience."
  },
  {
    priority: "low",
    asked: 1,
    question: "What programming languages do you support for API integration?",
    users: "developer_joe",
    lastAsked: "3 days ago",
    aiAnswer: "Our REST API supports integration with any programming language that can make HTTP requests. We provide official SDKs for JavaScript/Node.js, Python, PHP, and Ruby. Documentation and code examples are available for Java, C#, Go, and other popular languages."
  }
];

const priorityStyle = {
  high: "bg-red-100 text-red-700",
  medium: "bg-yellow-100 text-yellow-700",
  low: "bg-green-100 text-green-700"
};

const priorityLabel = {
  high: "High Priority",
  medium: "Medium Priority",
  low: "Low Priority"
};

export default function UnknownQuestions() {
  return (
    <div className="flex flex-col flex-1 min-h-screen pl-64 pt-16 bg-gray-50">
      <div className="max-w-5xl mx-auto w-full px-8 py-10">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Unknown Questions</h1>
          <div>
            <button className="mr-2 px-4 py-2 rounded-md bg-gray-100 font-medium text-gray-900 border">Bulk Delete</button>
            <button className="px-4 py-2 rounded-md bg-green-600 text-white font-medium hover:bg-green-700 transition">+ Bulk Add to FAQs</button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 px-6 py-4">
            <div className="flex items-center gap-2 mb-1">
              <span className="bg-orange-100 text-orange-600 px-2 py-1 rounded text-xs font-medium">Total Unknown</span>
              <span className="text-lg font-semibold ml-2">23</span>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 px-6 py-4">
            <div className="flex items-center gap-2 mb-1">
              <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-xs font-medium">This Week</span>
              <span className="text-lg font-semibold ml-2">8</span>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 px-6 py-4">
            <div className="flex items-center gap-2 mb-1">
              <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-xs font-medium">High Priority</span>
              <span className="text-lg font-semibold ml-2">5</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 mb-5">
          {unknowns.map((q, i) => (
            <div key={i} className="bg-white rounded-lg shadow-sm border border-gray-100 p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className={`px-2 py-1 rounded text-xs font-semibold ${priorityStyle[q.priority]}`}>{priorityLabel[q.priority]}</span>
                <span className="text-xs text-gray-500">Asked {q.asked} {q.asked === 1 ? "time" : "times"}</span>
              </div>
              <div className="font-semibold text-lg mb-1">{q.question}</div>
              <div className="text-sm text-gray-500 mb-2">Last asked {q.lastAsked} • Users: {q.users}</div>
              <div className="bg-purple-50 rounded p-4 mb-2 border border-purple-100">
                <div className="flex items-center mb-1 font-medium text-purple-600 text-sm">
                  <Wand2 className="w-4 h-4 mr-1" /> AI Suggested Answer
                </div>
                <div className="text-gray-800 text-sm whitespace-pre-line">{q.aiAnswer}</div>
              </div>
              <div className="flex gap-2 mt-2">
                <button className="px-4 py-2 rounded-md bg-green-600 text-white hover:bg-green-700 transition text-sm font-medium">+ Add to FAQs</button>
                <button className="px-4 py-2 rounded-md bg-gray-100 border font-medium text-sm">Edit Answer</button>
                <button className="ml-auto p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded transition">🗑️</button>
              </div>
            </div>
          ))}
        </div>
        <button className="mx-auto my-5 px-6 py-2 rounded-md border bg-gray-50 font-medium text-gray-800 hover:bg-gray-100 transition block">Load More Questions</button>
      </div>
    </div>
  );
}
