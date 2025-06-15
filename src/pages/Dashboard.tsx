
import React from "react";
import StatusCard from "@/components/StatusCard";
import { CircleHelp, Sun, CheckCircle, Clock } from "lucide-react";

const recentQuestions = [
  {
    question: "How do I reset my password?",
    tags: ["matched"],
    time: "2 minutes ago",
    status: "matched",
    color: "blue"
  },
  {
    question: "What are the system requirements?",
    tags: ["matched"],
    time: "15 minutes ago",
    status: "matched",
    color: "green"
  },
  {
    question: "Can I integrate with third-party tools?",
    tags: ["unmatched"],
    time: "1 hour ago",
    status: "unmatched",
    color: "orange"
  },
  {
    question: "How do I export my data?",
    tags: ["matched"],
    time: "2 hours ago",
    status: "matched",
    color: "blue"
  },
  {
    question: "What is the pricing structure?",
    tags: ["matched"],
    time: "3 hours ago",
    status: "matched",
    color: "green"
  },
];

const statusDot = {
  blue: "bg-blue-500",
  green: "bg-green-500",
  orange: "bg-orange-400"
};

export default function Dashboard() {
  return (
    <div className="flex flex-col flex-1 min-h-screen pl-64 pt-16 bg-gray-50">
      <div className="max-w-6xl mx-auto w-full px-8 py-10">
        <h1 className="text-2xl font-bold mb-1">Dashboard Overview</h1>
        <div className="text-gray-500 mb-6">Monitor your FAQ system performance and activity</div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <StatusCard
            icon={<CircleHelp className="w-6 h-6 text-blue-500" />}
            label="Total FAQs"
            value={247}
          />
          <StatusCard
            icon={<Sun className="w-6 h-6 text-orange-400" />}
            label="Unanswered"
            value={23}
            valueColor="text-orange-500"
          />
          <StatusCard
            icon={<CheckCircle className="w-6 h-6 text-green-500" />}
            label="Accuracy"
            value="94.2%"
            valueColor="text-green-600"
          />
          <StatusCard
            icon={<Clock className="w-6 h-6 text-purple-500" />}
            label="Today's Questions"
            value={18}
            valueColor="text-purple-600"
          />
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 px-6 py-4">
          <h2 className="text-lg font-semibold mb-3">Recent User Questions</h2>
          <ul>
            {recentQuestions.map((q, i) => (
              <li
                key={i}
                className={`flex items-center px-4 py-3 mb-2 rounded-md transition
                            ${q.status === "unmatched" ? "bg-orange-50" : "bg-gray-100"} `}
              >
                <span className={`w-3 h-3 rounded-full mr-3 ${statusDot[q.color]}`} />
                <div className="flex flex-col flex-grow">
                  <span className="font-medium">{q.question}</span>
                  <span className="text-sm text-gray-500">
                    Asked {q.time} • {q.status === "matched" ? "Matched with existing FAQ" : "No match found"}
                  </span>
                </div>
              </li>
            ))}
          </ul>
          <div className="flex mt-6 justify-end">
            <a href="/unknowns" className="btn btn-primary bg-blue-600 text-white px-5 py-2 rounded-md shadow hover:bg-blue-700 transition">Review Unknown Questions</a>
          </div>
        </div>
      </div>
    </div>
  );
}
