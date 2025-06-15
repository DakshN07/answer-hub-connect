
import React, { useState } from "react";
import { Save, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function AddFaq() {
  const [formData, setFormData] = useState({
    question: "",
    answer: "",
    category: "",
    tags: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Saving FAQ:", formData);
    // Here you would typically send to backend
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="flex flex-col flex-1 min-h-screen pl-64 pt-16 bg-gray-50">
      <div className="max-w-4xl mx-auto w-full px-8 py-10">
        <div className="flex items-center gap-4 mb-6">
          <Link 
            to="/faqs" 
            className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to FAQs
          </Link>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8">
          <h1 className="text-2xl font-bold mb-6">Add New FAQ</h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="question" className="block text-sm font-medium text-gray-700 mb-2">
                Question *
              </label>
              <input
                type="text"
                id="question"
                name="question"
                value={formData.question}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 outline-none transition"
                placeholder="Enter the question..."
                required
              />
            </div>

            <div>
              <label htmlFor="answer" className="block text-sm font-medium text-gray-700 mb-2">
                Answer *
              </label>
              <textarea
                id="answer"
                name="answer"
                value={formData.answer}
                onChange={handleChange}
                rows={6}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 outline-none transition resize-vertical"
                placeholder="Enter the detailed answer..."
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 outline-none transition"
                >
                  <option value="">Select a category</option>
                  <option value="Security & Account">Security & Account</option>
                  <option value="Billing & Payments">Billing & Payments</option>
                  <option value="General Information">General Information</option>
                  <option value="Support & Help">Support & Help</option>
                </select>
              </div>

              <div>
                <label htmlFor="tags" className="block text-sm font-medium text-gray-700 mb-2">
                  Tags
                </label>
                <input
                  type="text"
                  id="tags"
                  name="tags"
                  value={formData.tags}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 outline-none transition"
                  placeholder="password, reset, login (comma separated)"
                />
              </div>
            </div>

            <div className="flex justify-end gap-4 pt-6">
              <Link 
                to="/faqs"
                className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition"
              >
                Cancel
              </Link>
              <button
                type="submit"
                className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                <Save className="w-4 h-4" />
                Save FAQ
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
