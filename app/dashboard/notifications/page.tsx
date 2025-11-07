"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle,
  FileText,
  Zap,
  BellRing,
  UserPlus,
  Clock,
  Check,
} from "lucide-react";
import { cn } from "@/lib/utils";

type NotificationItem = {
  id: string;
  title: string;
  subtitle: string;
  time: string;
  type: "task" | "file" | "ai" | "deadline" | "join";
  unread?: boolean;
};

const initialNotifications: NotificationItem[] = [
  {
    id: "n1",
    title: "Task Completed",
    subtitle: "Rahul Kumar completed 'API Integration' task",
    time: "2 minutes ago",
    type: "task",
    unread: true,
  },
  {
    id: "n2",
    title: "New File Uploaded",
    subtitle: "Anushka Sharma uploaded 'Design Mockups.fig'",
    time: "15 minutes ago",
    type: "file",
    unread: true,
  },
  {
    id: "n3",
    title: "AI Pitch Ready",
    subtitle: "Your AI-generated pitch is ready for review",
    time: "1 hour ago",
    type: "ai",
    unread: false,
  },
  {
    id: "n4",
    title: "Deadline Approaching",
    subtitle: "Hackathon submission deadline in 2 hours!",
    time: "2 hours ago",
    type: "deadline",
    unread: true,
  },
  {
    id: "n5",
    title: "Team Member Joined",
    subtitle: "Priya Patel joined your team",
    time: "Yesterday",
    type: "join",
    unread: false,
  },
];

function IconByType({ type }: { type: NotificationItem["type"] }) {
  switch (type) {
    case "task":
      return <CheckCircle className="w-5 h-5 text-green-400" />;
    case "file":
      return <FileText className="w-5 h-5 text-indigo-400" />;
    case "ai":
      return <Zap className="w-5 h-5 text-purple-400" />;
    case "deadline":
      return <Clock className="w-5 h-5 text-yellow-400" />;
    case "join":
      return <UserPlus className="w-5 h-5 text-blue-300" />;
    default:
      return <BellRing className="w-5 h-5 text-gray-300" />;
  }
}

export default function NotificationsPage() {
  const [items, setItems] = useState<NotificationItem[]>(initialNotifications);

  const markAllRead = () => {
    setItems((prev) => prev.map((it) => ({ ...it, unread: false })));
  };

  const toggleRead = (id: string) => {
    setItems((prev) =>
      prev.map((it) => (it.id === id ? { ...it, unread: false } : it))
    );
  };

  const unreadCount = items.filter((i) => i.unread).length;

  return (
    <div className="min-h-screen bg-[#0a0f1a] text-white p-4 sm:p-6 md:p-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">Notifications</h1>
            <p className="text-gray-400 mt-1">Stay updated with your team's activities</p>
          </div>

          <div className="flex items-center gap-3">
            <div className="inline-flex items-center gap-2 bg-[#0f1523] px-4 py-2 rounded-xl border border-white/10">
              <span className="text-sm text-gray-300">{unreadCount} unread</span>
            </div>

            <button
              onClick={markAllRead}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-2 rounded-xl text-sm font-medium hover:scale-[1.02] transition"
            >
              <Check className="w-4 h-4" />
              Mark all as read
            </button>
          </div>
        </div>

        {/* Notifications List */}
        <div className="space-y-3">
          <AnimatePresence>
            {items.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.18 }}
                className={cn(
                  "flex items-start gap-4 p-4 rounded-xl border border-white/6",
                  item.unread ? "bg-gradient-to-r from-[#0f1220]/60 to-[#0c1020]/40 shadow-lg" : "bg-[#0f1220]/40"
                )}
                onClick={() => toggleRead(item.id)}
                role="button"
              >
                {/* Icon / Avatar */}
                <div className="flex-shrink-0 w-11 h-11 rounded-lg flex items-center justify-center bg-black/40 border border-white/6">
                  <IconByType type={item.type} />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <h3 className={cn("font-medium truncate", item.unread ? "text-white" : "text-gray-200")}>
                        {item.title}
                      </h3>
                      {item.unread && (
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs bg-purple-700/40 text-purple-200">
                          New
                        </span>
                      )}
                    </div>

                    <span className="text-xs text-gray-400 whitespace-nowrap">{item.time}</span>
                  </div>

                  <p className="text-sm text-gray-300 mt-1 truncate">{item.subtitle}</p>
                </div>

                {/* Action icon (small) */}
                <div className="flex-shrink-0">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setItems((prev) => prev.filter((it) => it.id !== item.id));
                    }}
                    className="text-xs text-gray-400 hover:text-white px-2 py-1 rounded-md"
                    aria-label="Dismiss"
                  >
                    Dismiss
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Empty state */}
          {items.length === 0 && (
            <div className="text-center py-12 bg-[#0f1523] rounded-xl border border-white/6">
              <BellRing className="mx-auto mb-3 text-gray-400 w-8 h-8" />
              <p className="text-gray-300">No notifications — you’re all caught up 🎉</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
 