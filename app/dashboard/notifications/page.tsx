"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle,
  FileText,
  Zap,
  BellRing,
  UserPlus,
  Clock,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { io } from "socket.io-client";

type NotificationItem = {
  id: string;
  title: string;
  subtitle: string;
  time: string;
  type: "task" | "file" | "ai" | "deadline" | "join";
};

function IconByType({ type }: { type: NotificationItem["type"] }) {
  switch (type) {
    case "task": return <CheckCircle className="w-5 h-5 text-green-400" />;
    case "file": return <FileText className="w-5 h-5 text-indigo-400" />;
    case "ai": return <Zap className="w-5 h-5 text-purple-400" />;
    case "deadline": return <Clock className="w-5 h-5 text-yellow-400" />;
    case "join": return <UserPlus className="w-5 h-5 text-blue-300" />;
    default: return <BellRing className="w-5 h-5 text-gray-300" />;
  }
}

export default function NotificationsPage() {
  const API = process.env.NEXT_PUBLIC_API_URL;
  const [items, setItems] = useState<NotificationItem[]>([]);
  const teamId = typeof window !== "undefined" ? localStorage.getItem("teamId") : null;
  useEffect(() => {
    if (!teamId) return;

    const load = async () => {
      const token = localStorage.getItem("token");

      const res = await fetch(`${API}/api/notifications/${teamId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await res.json();

      const formatted = data.notifications.map((n: any) => ({
        id: n._id,
        title: n.title,
        subtitle: n.subtitle,
        type: n.type,
        time: new Date(n.createdAt).toLocaleString(),
      }));

      setItems(formatted);
    };

    load();
  }, [teamId]);

  // SOCKET REALTIME
  useEffect(() => {
    if (!teamId) return;

    const socket = io(API, { transports: ["websocket"] });
    socket.emit("join_team", teamId);

    socket.on("new_notification", (data: any) => {
      setItems((prev) => [
        {
          id: data.id,
          title: data.title,
          subtitle: data.subtitle,
          type: data.type,
          time: "Just now",
        },
        ...prev,
      ]);
    });

    return () => {
      socket.disconnect();
    };

  }, [teamId]);

  return (
    <div className="min-h-screen bg-[#0a0f1a] text-white p-6">
      <div className="max-w-5xl mx-auto">

        <div className="mb-6">
          <h1 className="text-3xl font-bold">Notifications</h1>
          <p className="text-gray-400">Your team updates appear here</p>
        </div>

        <div className="space-y-3">
          <AnimatePresence>
            {items.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex items-start gap-4 p-4 rounded-xl border border-white/10 bg-[#0f1220]/40"
              >
                <div className="w-11 h-11 bg-black/40 rounded-lg flex items-center justify-center border border-white/10">
                  <IconByType type={item.type} />
                </div>

                <div className="flex-1">
                  <div className="flex justify-between">
                    <h3 className="font-medium text-white">{item.title}</h3>
                    <span className="text-xs text-gray-400">{item.time}</span>
                  </div>
                  <p className="text-sm text-gray-300 mt-1">
                    {item.subtitle}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Empty state */}
          {items.length === 0 && (
            <div className="text-center py-12 bg-[#0f1523] rounded-xl border border-white/10">
              <BellRing className="mx-auto mb-3 text-gray-400 w-8 h-8" />
              <p className="text-gray-300">No notifications yet </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
