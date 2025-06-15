
import React, { useState } from "react";
import { CheckCircle, X, MessageSquareQuote, Clock } from "lucide-react";

const unknownQuestions = [
  {
    id: 1,
    question: "Can I integrate with Zapier webhooks?",
    askedBy: "user@example.com",
    timestamp: "2 hours ago",
    channel: "Discord",
    status: "pending"
  },
  {
    id: 2,
    question: "How do I set up custom domains?",
    askedBy: "admin@company.com",
    timestamp: "5 hours ago",
    channel: "Web Dashboard",
    status: "pending"
  },
  {
    id: 3,
    question: "Is there a mobile app available?",
    askedBy: "mobile@user.com",
    timestamp: "1 day ago",
    channel: "Discord",
    status: "pending"
  },
  {
    id: 4,
    question: "What are the API rate limits?",
    askedBy: "dev@startup.com",
    timestamp: "2 days ago",
    channel: "Web Dashboard",
    status: "approved"
  },
  {
    id: 5,
    question: "How do I backup my data?",
    askedBy: "backup@company.com",
    timestamp: "3 days ago",
    channel: "Discord",
    status: "rejected"
  }
];

const channelColors = {
  "Discord": "bg-purple-100 text-purple-700",
  "Web Dashboard": "bg-blue-100 text-blue-700",
  "Slack": "bg-green-100 text-green-700"
};

const statusColors = {
  "pending": "bg-yellow-100 text-yellow-700",
  "approved": "bg-green-100 text-green-700",
  "rejected": "bg-red-100 text-red-700"
};

export default function UnknownQuestions() {
  const [questions, setQuestions] = useState(unknownQuestions);
  const [selectedQuestions, setSelectedQuestions] = useState<number[]>([]);

  const handleApprove = (id: number) => {
    setQuestions(questions.map(q => 
      q.id === id ? { ...q, status: "approved" } : q
    ));
  };

  const handleReject = (id: number) => {
    setQuestions(questions.map(q => 
      q.id === id ? { ...q, status: "rejected" } : q
    ));
  };

  const handleSelectQuestion = (id: number) => {
    setSelectedQuestions(prev => 
      prev.includes(id) 
        ? prev.filter(qId => qId !== id)
        : [...prev, id]
    );
  };

  const pendingCount = questions.filter(q => q.status === "pending").length;

  return (
    <div className="flex flex-col flex-1 min-h-screen pl-64 pt-16 bg-gray-50">
      <div className="max-w-7xl mx-auto w-full px-8 py-10">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold mb-1">Unknown Questions</h1>
            <div className="text-gray-500">
              Review and manage questions that couldn't be matched with existing FAQs
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-yellow-100 text-yellow-700 px-3 py-2 rounded-lg font-medium">
              {pendingCount} Pending Review
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-100">
          <div className="p-6 border-b border-gray-100">
            <div className="flex items-center gap-4">
              <MessageSquareQuote className="w-6 h-6 text-gray-400" />
              <span className="font-medium">Recent Unknown Questions</span>
            </div>
          </div>

          <div className="divide-y divide-gray-100">
            {questions.map((question) => (
              <div key={question.id} className="p-6 hover:bg-gray-50 transition">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <input
                        type="checkbox"
                        checked={selectedQuestions.includes(question.id)}
                        onChange={() => handleSelectQuestion(question.id)}
                        className="rounded border-gray-300"
                      />
                      <h3 className="font-medium text-gray-900">{question.question}</h3>
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <span>Asked by: {question.askedBy}</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {question.timestamp}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${channelColors[question.channel as keyof typeof channelColors]}`}>
                        {question.channel}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-500">Status:</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium capitalize ${statusColors[question.status as keyof typeof statusColors]}`}>
                        {question.status}
                      </span>
                    </div>
                  </div>

                  {question.status === "pending" && (
                    <div className="flex items-center gap-2 ml-4">
                      <button
                        onClick={() => handleApprove(question.id)}
                        className="flex items-center gap-1 bg-green-600 text-white px-3 py-1 rounded-md hover:bg-green-700 transition text-sm"
                      >
                        <CheckCircle className="w-4 h-4" />
                        Approve
                      </button>
                      <button
                        onClick={() => handleReject(question.id)}
                        className="flex items-center gap-1 bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red-700 transition text-sm"
                      >
                        <X className="w-4 h-4" />
                        Reject
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 border-t border-gray-100 bg-gray-50">
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-500">
                Showing {questions.length} questions
              </div>
              {selectedQuestions.length > 0 && (
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500">{selectedQuestions.length} selected</span>
                  <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition text-sm">
                    Bulk Approve
                  </button>
                  <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition text-sm">
                    Bulk Reject
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
