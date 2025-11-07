"use client";

import { useState } from "react";
import { Search, Upload, FileText, User } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";

const fileData = [
    { name: "Project Pitch.pptx", size: "2.4 MB", user: "Sarah", time: "Today, 10:30 AM" },
    { name: "Design Mockups.fig", size: "5.1 MB", user: "Anushka Aggarwal", time: "Today, 09:15 AM" },
    { name: "Demo Video.mp4", size: "45.2 MB", user: "Ankita", time: "Yesterday, 4:20 PM" },
    { name: "Research Data.pdf", size: "1.8 MB", user: "Priya Patel", time: "Yesterday, 2:10 PM" },
    { name: "API Documentation.pdf", size: "892 KB", user: "Rahul Kumar", time: "2 days ago" },
    { name: "Logo Assets.zip", size: "3.2 MB", user: "Anushka Aggarwal", time: "2 days ago" },
];

export default function FilesPage() {
    const [search, setSearch] = useState("");
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            alert(`File selected: ${file.name}`);
        }
    };


    return (
        <div className="min-h-screen bg-[#0a0f1a] text-white p-5 md:p-8">

            {/* HEADER */}
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6"
            >
                <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-100 to-purple-200 bg-clip-text text-transparent">
                    Files & Storage
                </h1>
                <p className="text-gray-400 text-sm md:text-base">
                    Manage your team's documents and resources
                </p>
            </motion.div>

            {/* UPLOAD + SEARCH */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                <>
                    <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileUpload}
                        className="hidden"
                    />

                    <button
                        onClick={() => fileInputRef.current?.click()}
                        className="flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:scale-[1.02] transition text-white px-5 py-2.5 rounded-xl font-medium"
                    >
                        <Upload size={18} /> Upload File
                    </button>
                </>


                <div className="flex items-center bg-[#111827] px-4 py-2.5 rounded-xl border border-white/10 flex-1">
                    <Search size={18} className="text-gray-400" />
                    <input
                        className="bg-transparent outline-none ml-3 w-full text-sm"
                        placeholder="Search files..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
            </div>

            {/* STATS GRID */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
                {[
                    { label: "Total Files", value: "24" },
                    { label: "Storage Used", value: "128 MB" },
                    { label: "Shared Today", value: "8" },
                    { label: "Team Members", value: "5" },
                    { label: "Folders", value: "12" },
                ].map((stat, i) => (
                    <div
                        key={i}
                        className="bg-[#111827] border border-white/10 p-4 rounded-xl"
                    >
                        <p className="text-xl sm:text-2xl font-bold text-white-400">{stat.value}</p>
                        <p className="text-xs sm:text-sm text-gray-400">{stat.label}</p>
                    </div>
                ))}
            </div>

            {/* FILE LIST */}
            <div className="space-y-3">
                {fileData
                    .filter((file) => file.name.toLowerCase().includes(search.toLowerCase()))
                    .map((file, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.05 }}
                            className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-[#111827] border border-white/10 hover:border-purple-500/40 transition p-4 rounded-xl gap-3"
                        >
                            {/* LEFT */}
                            <div className="flex items-center gap-3">
                                <FileText className="text-purple-400 w-7 h-7" />
                                <div>
                                    <p className="font-medium text-sm md:text-base">{file.name}</p>
                                    <p className="text-xs text-gray-400">{file.size}</p>
                                </div>
                            </div>

                            {/* RIGHT */}
                            <div className="flex items-center gap-6">
                                <div className="flex items-center gap-2">
                                    <User className="text-gray-400 w-4 h-4" />
                                    <p className="text-xs sm:text-sm text-gray-300">{file.user}</p>
                                </div>

                                <p className="text-xs sm:text-sm text-gray-500">{file.time}</p>
                            </div>
                        </motion.div>
                    ))}
            </div>
        </div>
    );
}
