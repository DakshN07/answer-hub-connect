
import React from "react";
import { Edit, Trash2, Plus, Search } from "lucide-react";

const sampleFaqs = [
  {
    question: "How do I reset my password?",
    answer: "To reset your password, go to the login page and click 'Forgot Password'...",
    created: "2 days ago",
  },
  {
    question: "What are the system requirements?",
    answer: "Our system requires a modern web browser with...",
    created: "3 days ago",
  },
  {
    question: "How do I export my data?",
    answer: "You can export your data by navigating to Settings...",
    created: "1 week ago",
  },
  {
    question: "What is the pricing structure?",
    answer: "We offer flexible pricing plans starting from...",
    created: "2 weeks ago",
  },
  {
    question: "How do I contact support?",
    answer: "You can reach our support team through email...",
    created: "3 weeks ago",
  },
];

export default function Faqs() {
  return (
    <div className="flex flex-col flex-1 min-h-screen pl-64 pt-16 bg-gray-50">
      <div className="max-w-6xl mx-auto w-full px-8 py-10">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">FAQs Management</h1>
          <a
            href="/add-faq"
            className="flex items-center gap-2 bg-blue-600 text-white font-semibold px-4 py-2 rounded-md shadow hover:bg-blue-700 transition"
          >
            <Plus className="w-5 h-5" />
            Add New FAQ
          </a>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-5 mb-5">
          <div className="flex gap-3 items-center mb-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
              <input
                className="pl-10 pr-3 py-2 w-full border border-gray-200 rounded-lg focus:border-blue-500 transition outline-none"
                placeholder="Search FAQs..."
                type="text"
              />
            </div>
            <select className="ml-3 px-3 py-2 border border-gray-200 rounded-lg">
              <option>Sort by: Newest</option>
              <option>Oldest</option>
              <option>A-Z</option>
            </select>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full text-left">
              <thead>
                <tr className="bg-gray-50 border-b">
                  <th className="py-2 px-3 font-semibold text-gray-700">Question</th>
                  <th className="py-2 px-3 font-semibold text-gray-700">Answer Preview</th>
                  <th className="py-2 px-3 font-semibold text-gray-700">Created</th>
                  <th className="py-2 px-3 font-semibold text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {sampleFaqs.map((faq, i) => (
                  <tr key={i} className="border-b last:border-0 hover:bg-blue-50">
                    <td className="py-2 px-3">{faq.question}</td>
                    <td className="py-2 px-3 text-gray-500">{faq.answer}</td>
                    <td className="py-2 px-3">{faq.created}</td>
                    <td className="py-2 px-3 flex gap-3">
                      <a href="/add-faq" className="text-blue-600 hover:underline flex items-center gap-1"><Edit className="w-4 h-4" />Edit</a>
                      <button className="text-red-500 hover:underline flex items-center gap-1"><Trash2 className="w-4 h-4" />Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex items-center justify-between mt-4">
              <div className="text-sm text-gray-500">Showing 1 to 5 of 247 results</div>
              <div className="flex gap-2">
                <button className="px-3 py-1 rounded-md border bg-gray-50">Previous</button>
                <button className="px-3 py-1 rounded-md border bg-blue-600 text-white font-bold">1</button>
                <button className="px-3 py-1 rounded-md border">2</button>
                <button className="px-3 py-1 rounded-md border">3</button>
                <button className="px-3 py-1 rounded-md border bg-gray-50">Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
