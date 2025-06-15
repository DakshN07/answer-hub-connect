
import React from "react";

const members = [
  {
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Admin",
    status: "Active",
    lastActive: "2 hours ago",
    initials: "JD",
    color: "bg-purple-500",
  },
  {
    name: "Sarah Miller",
    email: "sarah.miller@example.com",
    role: "Moderator",
    status: "Active",
    lastActive: "1 day ago",
    initials: "SM",
    color: "bg-green-500",
  },
  {
    name: "Mike Johnson",
    email: "mike.johnson@example.com",
    role: "Moderator",
    status: "Pending",
    lastActive: "Never",
    initials: "MJ",
    color: "bg-orange-500",
  },
  {
    name: "Emily Wilson",
    email: "emily.wilson@example.com",
    role: "Admin",
    status: "Active",
    lastActive: "5 minutes ago",
    initials: "EW",
    color: "bg-pink-500",
  },
  {
    name: "David Brown",
    email: "david.brown@example.com",
    role: "Moderator",
    status: "Inactive",
    lastActive: "2 weeks ago",
    initials: "DB",
    color: "bg-blue-500",
  },
];

const roleColor = {
  Admin: "bg-purple-100 text-purple-700",
  Moderator: "bg-green-100 text-green-700",
};
const statusColor = {
  Active: "bg-green-100 text-green-700",
  Pending: "bg-yellow-100 text-yellow-700",
  Inactive: "bg-gray-100 text-gray-700",
};

export default function Team() {
  return (
    <div className="flex flex-col flex-1 min-h-screen pl-64 pt-16 bg-gray-50">
      <div className="max-w-6xl mx-auto w-full px-8 py-10">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Team Management</h1>
          <a
            href="#"
            className="flex items-center gap-2 bg-blue-600 text-white font-semibold px-4 py-2 rounded-md shadow hover:bg-blue-700 transition"
          >
            + Add Team Member
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 px-6 py-4 flex items-center gap-3">
            <span className="bg-blue-100 p-2 rounded-full text-blue-500">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v2H2v-2h5M8.5 15C7.67 15 7 15.67 7 16.5S7.67 18 8.5 18 10 17.33 10 16.5 9.33 15 8.5 15zM15.5 15c-.83 0-1.5.67-1.5 1.5S14.67 18 15.5 18s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"/><circle cx="12" cy="6" r="3" /></svg>
            </span>
            <span className="font-medium">Total Members</span>
            <span className="ml-auto text-xl font-semibold">8</span>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 px-6 py-4 flex items-center gap-3">
            <span className="bg-purple-100 p-2 rounded-full text-purple-500">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4 8 5.79 8 8s1.79 4 4 4zm-4 8v-2c0-2 4-3.1 6-3.1s6 1.1 6 3.1v2"/></svg>
            </span>
            <span className="font-medium">Admins</span>
            <span className="ml-auto text-xl font-semibold">3</span>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 px-6 py-4 flex items-center gap-3">
            <span className="bg-green-100 p-2 rounded-full text-green-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M20 21v-2a4 4 0 00-3-3.87"/><path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 21v-2a4 4 0 013-3.87"/><circle cx="12" cy="7" r="4"/></svg>
            </span>
            <span className="font-medium">Moderators</span>
            <span className="ml-auto text-xl font-semibold">5</span>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
          <div className="flex justify-between mb-2">
            <span className="font-semibold text-lg">Team Members</span>
            <div className="flex gap-2">
              <input className="px-3 py-1 border border-gray-200 rounded-md text-sm" placeholder="Search members..." />
              <select className="px-3 py-1 border border-gray-200 rounded-md text-sm">
                <option>All Roles</option>
                <option>Admin</option>
                <option>Moderator</option>
              </select>
            </div>
          </div>
          <table className="min-w-full text-left">
            <thead>
              <tr>
                <th className="py-2 px-3 font-semibold text-gray-700">Member</th>
                <th className="py-2 px-3 font-semibold text-gray-700">Role</th>
                <th className="py-2 px-3 font-semibold text-gray-700">Status</th>
                <th className="py-2 px-3 font-semibold text-gray-700">Last Active</th>
                <th className="py-2 px-3 font-semibold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {members.map((m, i) => (
                <tr key={i} className="border-b last:border-0">
                  <td className="py-2 px-3 flex gap-3 items-center">
                    <span className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-white ${m.color}`}>
                      {m.initials}
                    </span>
                    <span>
                      <div className="font-medium">{m.name}</div>
                      <div className="text-xs text-gray-500">{m.email}</div>
                    </span>
                  </td>
                  <td className="py-2 px-3"><span className={`px-2 py-1 rounded text-xs font-medium ${roleColor[m.role]}`}>{m.role}</span></td>
                  <td className="py-2 px-3"><span className={`px-2 py-1 rounded text-xs font-medium ${statusColor[m.status]}`}>{m.status}</span></td>
                  <td className="py-2 px-3 text-sm">{m.lastActive}</td>
                  <td className="py-2 px-3 text-blue-600 hover:underline cursor-pointer flex gap-3">
                    <button>Edit</button>
                    <button className="text-red-500">Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex items-center justify-between mt-4">
            <div className="text-sm text-gray-500">Showing 1 to 5 of 8 results</div>
            <div className="flex gap-2">
              <button className="px-3 py-1 rounded-md border bg-gray-50">Previous</button>
              <button className="px-3 py-1 rounded-md border bg-blue-600 text-white font-bold">1</button>
              <button className="px-3 py-1 rounded-md border">2</button>
              <button className="px-3 py-1 rounded-md border bg-gray-50">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
