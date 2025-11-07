"use client";

import { useState } from "react";
import { User, Bell, Shield } from "lucide-react";
import Image from "next/image";

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-[#0A0F1A] text-white p-6 flex flex-col gap-10">

      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-gray-400 mt-1">Manage your account settings and preferences</p>
      </div>

      {/* ▓▓▓ PROFILE SECTION ▓▓▓ */}
      <div className="bg-[#0F1523] rounded-xl border border-white/10 p-6 space-y-5">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <User size={18} /> Profile Information
        </h2>

        <div className="flex items-center gap-6">
          <Image
            src="https://ui-avatars.com/api/?name=Anushka+Aggarwal&background=random&color=fff&rounded=true&size=128"
            width={80}
            height={80}
            alt="Profile avatar"
            unoptimized
            className="rounded-full"
          />
          <button className="border border-white/20 px-4 py-2 rounded-lg hover:bg-white/10 transition text-sm">
            Upload New Photo
          </button>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className="text-sm text-gray-300">First Name</label>
            <input className="bg-[#0C111C] border border-white/10 text-sm px-4 py-2 rounded-lg outline-none w-full mt-1" placeholder="John"/>
          </div>

          <div>
            <label className="text-sm text-gray-300">Last Name</label>
            <input className="bg-[#0C111C] border border-white/10 text-sm px-4 py-2 rounded-lg outline-none w-full mt-1" placeholder="Doe"/>
          </div>
        </div>

        <div>
          <label className="text-sm text-gray-300">Email</label>
          <input className="bg-[#0C111C] border border-white/10 text-sm px-4 py-2 rounded-lg outline-none w-full mt-1" placeholder="john@example.com"/>
        </div>

        <div>
          <label className="text-sm text-gray-300">Bio</label>
          <textarea className="bg-[#0C111C] border border-white/10 text-sm px-4 py-2 rounded-lg outline-none w-full mt-1 min-h-[100px]" placeholder="Write about yourself..." />
        </div>

        <button className="bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-2 rounded-lg font-medium hover:scale-[1.03] transition">
          Save Changes
        </button>
      </div>

      {/* ▓▓▓ NOTIFICATIONS SECTION ▓▓▓ */}
      <div className="bg-[#0F1523] rounded-xl border border-white/10 p-6 space-y-5">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <Bell size={18} /> Notification Preferences
        </h2>

        {["Email Notifications", "Push Notifications", "Team Updates", "AI Suggestions"].map((item) => (
          <ToggleRow key={item} title={item} />
        ))}

        <button className="bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-2 rounded-lg font-medium hover:scale-[1.03] transition">
          Save Preferences
        </button>
      </div>

      {/* ▓▓▓ SECURITY SECTION ▓▓▓ */}
      <div className="bg-[#0F1523] rounded-xl border border-white/10 p-6 space-y-5">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <Shield size={18} /> Security Settings
        </h2>

        <div>
          <label className="text-sm text-gray-300">Current Password</label>
          <input type="password" className="bg-[#0C111C] border border-white/10 text-sm px-4 py-2 rounded-lg outline-none w-full mt-1"/>
        </div>

        <div>
          <label className="text-sm text-gray-300">New Password</label>
          <input type="password" className="bg-[#0C111C] border border-white/10 text-sm px-4 py-2 rounded-lg outline-none w-full mt-1"/>
        </div>

        <div>
          <label className="text-sm text-gray-300">Confirm New Password</label>
          <input type="password" className="bg-[#0C111C] border border-white/10 text-sm px-4 py-2 rounded-lg outline-none w-full mt-1"/>
        </div>

        <button className="bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-2 rounded-lg font-medium hover:scale-[1.03] transition">
          Update Password
        </button>
      </div>

    </div>
  );
}

/* Toggle Component */
function ToggleRow({ title }: { title: string }) {
  const [enabled, setEnabled] = useState(true);

  return (
    <div className="flex justify-between items-center border-b border-white/10 pb-3">
      <p>{title}</p>
      <button
        onClick={() => setEnabled(!enabled)}
        className={`w-12 h-6 flex items-center rounded-full transition ${enabled ? "bg-blue-600" : "bg-gray-600"}`}
      >
        <div className={`bg-white w-5 h-5 rounded-full transform transition ${enabled ? "translate-x-6" : "translate-x-1"}`} />
      </button>
    </div>
  );
}
