"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, SendHorizonal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"; // (change to textarea if needed)
import { Card } from "@/components/ui/card";

export default function AITools() {
  const [pitchInput, setPitchInput] = useState("");
  const [messages, setMessages] = useState([
    {
      from: "ai",
      text: "Hello! I'm your AI assistant. I can help you with planning, tasks, and pitch writing. What would you like to do today?",
    },
  ]);
  const [userInput, setUserInput] = useState("");

  const sendMessage = () => {
    if (!userInput.trim()) return;

    setMessages([
      ...messages,
      { from: "user", text: userInput },
      {
        from: "ai",
        text: "Thanks! Once backend is connected, I’ll generate smart planning steps for you.",
      },
    ]);

    setUserInput("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#020617] via-[#0b0f26] to-[#1e1b4b] text-white p-6 flex flex-col">
      <h1 className="text-3xl font-bold mb-6 text-center">⚡ AI-Powered Tools</h1>
      <p className="text-center text-gray-300 mb-10">Supercharge your hackathon with intelligent assistance</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* AI Pitch Generator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="bg-[#0f1231]/70 backdrop-blur-xl shadow-xl border border-[#3b82f6]/20 p-6 rounded-2xl">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-purple-400" />
              AI Pitch Generator
            </h2>

            <Input
              placeholder="Enter key points about your project:
• Problem you're solving
• Your solution
• Key features
• Target audience"
              value={pitchInput}
              onChange={(e: any) => setPitchInput(e.target.value)}
              className="bg-black/30 border border-gray-700 text-white min-h-[180px]"
            />

            <Button className="mt-4 w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90">
              <Sparkles className="mr-2 h-4 w-4" /> Generate Pitch
            </Button>
          </Card>
        </motion.div>

        {/* AI Assistant Chat */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Card className="bg-[#0f1231]/70 backdrop-blur-xl shadow-xl border border-[#3b82f6]/20 p-6 rounded-2xl flex flex-col h-full">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-purple-400" />
              AI Assistant
            </h2>

            <div className="flex flex-col gap-3 overflow-y-auto h-[350px] pr-2 custom-scroll">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: msg.from === "user" ? 50 : -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  className={`p-3 rounded-lg max-w-[75%] ${
                    msg.from === "user"
                      ? "ml-auto bg-blue-600"
                      : "bg-black/40 border border-gray-700"
                  }`}
                >
                  {msg.text}
                </motion.div>
              ))}
            </div>

            <div className="flex gap-2 mt-4">
              <input
                type="text"
                placeholder="Ask me anything..."
                className="flex-1 bg-black/30 px-3 py-2 border border-gray-700 rounded-lg text-white focus:outline-none"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
              />
              <Button onClick={sendMessage} className="bg-purple-600 hover:bg-purple-500 p-2">
                <SendHorizonal className="w-5 h-5" />
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
