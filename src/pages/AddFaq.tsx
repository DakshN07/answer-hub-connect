
import React from "react";
import { Wand2 } from "lucide-react";

export default function AddFaq() {
  return (
    <div className="flex flex-col flex-1 min-h-screen pl-64 pt-16 bg-gray-50">
      <div className="max-w-xl mx-auto w-full px-6 py-10">
        <a href="/faqs" className="text-blue-600 hover:underline text-sm mb-2 inline-block">&larr; Back to FAQs</a>
        <h1 className="text-2xl font-bold mb-1">Add New FAQ</h1>
        <div className="text-gray-500 mb-6">Create a new frequently asked question and answer</div>
        <form className="bg-white rounded-lg shadow-sm border border-gray-100 px-6 py-6 flex flex-col gap-4">
          <div>
            <label className="block font-medium mb-1">Guild/Event</label>
            <select className="w-full px-4 py-2 border border-gray-200 rounded-md focus:border-blue-500">
              <option>Select Guild/Event</option>
            </select>
          </div>
          <div>
            <label className="block font-medium mb-1">Question</label>
            <input
              className="w-full px-4 py-2 border border-gray-200 rounded-md focus:border-blue-500"
              placeholder="Enter the frequently asked question..."
            />
          </div>
          <div className="relative">
            <label className="block font-medium mb-1">Answer</label>
            <button
              type="button"
              className="absolute right-2 top-2 text-purple-600 flex items-center text-sm font-semibold gap-1 hover:underline"
            >
              <Wand2 className="w-4 h-4" />AI Suggest
            </button>
            <textarea
              className="w-full px-4 py-2 border border-gray-200 rounded-md focus:border-blue-500 min-h-[90px] mt-1"
              placeholder="Enter the detailed answer to this question..."
            />
          </div>
          <span className="text-xs text-gray-400">Provide a clear, comprehensive answer that addresses the question completely.</span>
          {/* AI suggestion sample block */}
          <div className="bg-purple-50 rounded-md p-4 mt-1 border border-purple-100">
            <div className="flex items-center mb-1 text-purple-500 font-semibold text-sm">
              <Wand2 className="w-4 h-4 mr-1" /> AI Suggested Answer
            </div>
            <div className="text-gray-700 text-sm mb-2">
              Based on your question, here's a suggested answer that you can use or modify:
            </div>
            <div className="bg-white rounded p-3 text-gray-800 text-sm border border-gray-200 mb-2">
              To reset your password, please follow these steps: 1) Go to the login page and click "Forgot Password", 2) Enter your email address, 3) Check your email for a reset link, 4) Click the link and create a new password. If you don’t receive the email within 5 minutes, please check your spam folder or contact support.
            </div>
            <div className="flex gap-2 mt-1">
              <button className="px-4 py-2 rounded-md bg-purple-600 text-white text-sm font-medium hover:bg-purple-800 transition">Use This Answer</button>
              <button className="px-4 py-2 rounded-md bg-purple-100 text-purple-700 text-sm font-medium border hover:bg-purple-200 transition">Regenerate</button>
            </div>
          </div>
          <div className="flex items-center justify-between mt-4">
            <button type="button" className="px-5 py-2 rounded-md border border-gray-200 bg-gray-50 hover:bg-gray-100 font-medium">Cancel</button>
            <div className="flex gap-2">
              <button type="button" className="px-5 py-2 rounded-md bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold shadow">Save as Draft</button>
              <button type="submit" className="px-5 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow">Create FAQ</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
