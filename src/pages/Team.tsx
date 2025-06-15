
import React, { useState } from "react";
import { Users, Plus, Mail, Shield, Crown, Trash2, Edit } from "lucide-react";

const teamMembers = [
  {
    id: 1,
    name: "John Doe",
    email: "john@company.com",
    role: "Admin",
    status: "Active",
    joinedDate: "Jan 15, 2024",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John"
  },
  {
    id: 2,
    name: "Sarah Wilson",
    email: "sarah@company.com",
    role: "Co-Admin",
    status: "Active",
    joinedDate: "Feb 3, 2024",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
  },
  {
    id: 3,
    name: "Mike Chen",
    email: "mike@company.com",
    role: "Moderator",
    status: "Active",
    joinedDate: "Feb 20, 2024",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike"
  },
  {
    id: 4,
    name: "Emily Davis",
    email: "emily@company.com",
    role: "Moderator",
    status: "Pending",
    joinedDate: "Mar 1, 2024",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily"
  }
];

const roleIcons = {
  "Admin": <Crown className="w-4 h-4 text-yellow-500" />,
  "Co-Admin": <Shield className="w-4 h-4 text-blue-500" />,
  "Moderator": <Users className="w-4 h-4 text-green-500" />
};

const statusColors = {
  "Active": "bg-green-100 text-green-700",
  "Pending": "bg-yellow-100 text-yellow-700",
  "Inactive": "bg-red-100 text-red-700"
};

export default function Team() {
  const [members, setMembers] = useState(teamMembers);
  const [showInviteModal, setShowInviteModal] = useState(false);
  const [inviteData, setInviteData] = useState({
    email: "",
    role: "Moderator"
  });

  const handleInvite = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Inviting member:", inviteData);
    // Here you would typically send invite to backend
    setShowInviteModal(false);
    setInviteData({ email: "", role: "Moderator" });
  };

  const handleRemoveMember = (id: number) => {
    setMembers(members.filter(member => member.id !== id));
  };

  return (
    <div className="flex flex-col flex-1 min-h-screen pl-64 pt-16 bg-gray-50">
      <div className="max-w-6xl mx-auto w-full px-8 py-10">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold mb-1">Team Management</h1>
            <div className="text-gray-500">Manage team members and their permissions</div>
          </div>
          <button
            onClick={() => setShowInviteModal(true)}
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            <Plus className="w-5 h-5" />
            Invite Member
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-100">
          <div className="p-6 border-b border-gray-100">
            <div className="flex items-center gap-4">
              <Users className="w-6 h-6 text-gray-400" />
              <span className="font-medium">Team Members ({members.length})</span>
            </div>
          </div>

          <div className="divide-y divide-gray-100">
            {members.map((member) => (
              <div key={member.id} className="p-6 hover:bg-gray-50 transition">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-medium text-gray-900">{member.name}</h3>
                        {roleIcons[member.role as keyof typeof roleIcons]}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Mail className="w-4 h-4" />
                        {member.email}
                      </div>
                      <div className="text-xs text-gray-400 mt-1">
                        Joined {member.joinedDate}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <div className="text-sm font-medium text-gray-700">{member.role}</div>
                      <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${statusColors[member.status as keyof typeof statusColors]}`}>
                        {member.status}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <button className="p-2 text-gray-400 hover:text-blue-600 transition">
                        <Edit className="w-4 h-4" />
                      </button>
                      {member.role !== "Admin" && (
                        <button
                          onClick={() => handleRemoveMember(member.id)}
                          className="p-2 text-gray-400 hover:text-red-600 transition"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Invite Modal */}
        {showInviteModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
              <h2 className="text-xl font-bold mb-4">Invite Team Member</h2>
              
              <form onSubmit={handleInvite} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={inviteData.email}
                    onChange={(e) => setInviteData({...inviteData, email: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 outline-none"
                    placeholder="member@company.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
                    Role
                  </label>
                  <select
                    id="role"
                    value={inviteData.role}
                    onChange={(e) => setInviteData({...inviteData, role: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 outline-none"
                  >
                    <option value="Moderator">Moderator</option>
                    <option value="Co-Admin">Co-Admin</option>
                  </select>
                </div>

                <div className="flex justify-end gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowInviteModal(false)}
                    className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                  >
                    Send Invite
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
