"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Search, Users, UserPlus, Copy } from "lucide-react";

interface Member {
    name: string;
    role: string;
    email: string;
    initials: string;
}

const initialMembers: Member[] = [
    { name: "Anushka Aggarwal", role: "Leader", email: "anushka@team.com", initials: "AA" },
    { name: "Sarah Chen", role: "Designer", email: "sarah@team.com", initials: "SC" },
    { name: "Rahul Kumar", role: "Frontend Developer", email: "rahul@team.com", initials: "RK" },
    { name: "Ankita", role: "Backend Developer", email: "ankita@team.com", initials: "AK" },
    { name: "Priya Patel", role: "Researcher", email: "priya@team.com", initials: "PP" },
];


export default function TeamPage() {
    const [search, setSearch] = useState("");
    const [members, setMembers] = useState(initialMembers);
    const [newMember, setNewMember] = useState({ name: "", role: "", email: "" });

    const handleAddMember = () => {
        if (!newMember.name || !newMember.role || !newMember.email) return;

        const initials = newMember.name
            .split(" ")
            .map((word) => word[0])
            .join("")
            .toUpperCase();

        setMembers([...members, { ...newMember, initials }]);
        setNewMember({ name: "", role: "", email: "" });
    };

    return (
        <div className="p-6 sm:p-8 bg-[#0a0f1a] text-white min-h-screen flex flex-col gap-10">

            {/* ---------- TEAM HEADER ---------- */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-[#0f1523] border border-white/10 p-6 rounded-2xl flex flex-col sm:flex-row justify-between items-start sm:items-center"
            >
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Team Catalyst</h1>
                    <p className="text-gray-400 mt-1">
                        Building the future of AI-powered education
                    </p>

                    {/* badges */}
                    <div className="flex gap-3 mt-4">
                        <span className="px-4 py-1.5 rounded-full bg-[#1e2637] text-purple-300 text-sm">
                            5 Members
                        </span>
                        <span className="px-4 py-1.5 rounded-full bg-[#1e2637] text-purple-300 text-sm">
                            67% Complete
                        </span>
                    </div>
                </div>

                {/* Invite Users */}
                <div className="flex flex-col sm:items-end gap-3 mt-6 sm:mt-0">
                    <button className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 px-5 py-2 rounded-xl font-medium hover:scale-[1.03] transition">
                        <UserPlus size={18} /> Invite Members
                    </button>

                    <div className="flex items-center gap-2 bg-[#1a2031] border border-white/10 px-4 py-2 rounded-lg">
                        <span className="text-sm text-gray-300">HACK2024XYZ</span>
                        <Copy className="w-4 h-4 cursor-pointer text-gray-300 hover:text-white" />
                    </div>
                </div>
            </motion.div>

            {/* ---------- TEAM MEMBERS SECTION ---------- */}
            <section>
                <div className="flex justify-between mb-4">
                    <h2 className="text-xl font-semibold">Team Members</h2>

                    <div className="flex items-center gap-2 bg-[#111827] px-3 py-2 rounded-lg border border-white/10 w-60">
                        <Search className="w-4 h-4 text-gray-400" />
                        <input
                            placeholder="Search members..."
                            className="bg-transparent outline-none text-sm w-full"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />

                    </div>
                </div>

                {/* Members Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {members
                        .filter(
                            (member) =>
                                member.name.toLowerCase().includes(search.toLowerCase()) ||
                                member.role.toLowerCase().includes(search.toLowerCase()) ||
                                member.email.toLowerCase().includes(search.toLowerCase())
                        )
                        .map((member, index) => (

                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 25 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="bg-[#101626] border border-white/5 p-5 rounded-xl flex justify-between items-center"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center font-bold">
                                        {member.initials}
                                    </div>
                                    <div>
                                        <p className="font-medium">{member.name}</p>
                                        <p className="text-sm text-gray-400">{member.role}</p>
                                    </div>
                                </div>
                                <button className="bg-[#0d1320] border border-white/10 text-sm px-4 py-2 rounded-lg hover:bg-[#141b2c] transition">
                                    View Profile
                                </button>
                            </motion.div>
                        ))}
                </div>
            </section>

            {/* ---------- ADD MEMBER FORM ---------- */}
            <section className="mt-2 bg-[#101626] border border-white/5 p-6 rounded-2xl">
                <h2 className="text-xl font-semibold mb-5">Add New Member</h2>

                <div className="grid sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <input
                        className="bg-[#0c111c] border border-white/10 text-sm px-4 py-2 rounded-lg focus:border-purple-500 outline-none"
                        placeholder="Enter name"
                        value={newMember.name}
                        onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
                    />

                    {/* Role */}
                    <input
                        className="bg-[#0c111c] border border-white/10 text-sm px-4 py-2 rounded-lg focus:border-purple-500 outline-none"
                        placeholder="Developer, Designer, etc."
                        value={newMember.role}
                        onChange={(e) => setNewMember({ ...newMember, role: e.target.value })}
                    />

                    {/* Email */}
                    <input
                        className="bg-[#0c111c] border border-white/10 text-sm px-4 py-2 rounded-lg focus:border-purple-500 outline-none"
                        placeholder="member@email.com"
                        type="email"
                        value={newMember.email}
                        onChange={(e) => setNewMember({ ...newMember, email: e.target.value })}
                    />
                    <button
                        onClick={handleAddMember}
                        className="w-full bg-gradient-to-r from-[#2563eb] to-[#3b82f6] 
border border-white/40 rounded-xl px-6 py-3 font-medium text-white 
shadow-lg shadow-blue-500/20 backdrop-blur-md
hover:scale-[1.02] hover:shadow-blue-400/20 transition-all duration-300"
                    >
                        Add Member
                    </button>
                </div>
            </section>

        </div>
    );
}
