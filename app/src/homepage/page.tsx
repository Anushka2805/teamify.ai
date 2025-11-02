"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Zap, Users, Sparkles, Trophy, ArrowRight } from "lucide-react";
import Navbar from "../commonComponents/NavBar";

export default function Landing() {
    return (
        <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#020617] via-[#0a0f2c] to-[#001a3a] text-white">
            {/* Background animated glow */}
            <Navbar />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.2),transparent_60%),radial-gradient(circle_at_80%_80%,rgba(99,102,241,0.2),transparent_60%)] animate-pulse" />

            {/* Hero Section */}
            <section className="relative z-10 container mx-auto px-6 py-24 text-center flex flex-col items-center justify-center">
                <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
                    Win Hackathons with
                    <span className="block bg-gradient-to-r from-sky-400 via-indigo-400 to-sky-400 bg-clip-text text-transparent animate-pulse mt-2">
                        AI-Powered Teams
                    </span>
                </h1>

                <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10">
                    Collaborate seamlessly, manage tasks efficiently, and leverage AI to
                    generate pitches, summarize discussions, and guide your team to
                    victory.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/auth">
                        <Button
                            size="lg"
                            className="bg-gradient-to-r from-sky-500 to-indigo-500 hover:scale-105 transition-all duration-300 text-white font-semibold shadow-lg shadow-sky-500/30"
                        >
                            Get Started
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </Link>
                    <Button
                        size="lg"
                        variant="outline"
                        className="border-slate-500 text-slate-300 hover:bg-slate-800/50 transition-all duration-300 bg-black/30"
                    >
                        Watch Demo
                    </Button>
                </div>
            </section>

            {/* Features Section */}
            <section className="relative z-10 container mx-auto px-6 pb-24 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <FeatureCard
                    icon={<Users className="w-10 h-10 text-sky-400" />}
                    title="Smart Team Management"
                    description="Create teams, assign roles, and track progress with intuitive dashboards and real-time updates."
                />
                <FeatureCard
                    icon={<Sparkles className="w-10 h-10 text-indigo-400" />}
                    title="AI-Powered Tools"
                    description="Generate pitches, summarize chats, and get intelligent guidance for hackathon success."
                />
                <FeatureCard
                    icon={<Trophy className="w-10 h-10 text-sky-400" />}
                    title="Win Together"
                    description="Collaborate in real-time with chat, file sharing, and task tracking — all in one platform."
                />
            </section>

            {/* Footer */}
            <footer className="relative z-10 border-t border-slate-800 py-6 text-center text-slate-500 text-sm">
                © {new Date().getFullYear()} HackCollab. Built for creators & innovators.
            </footer>
        </div>
    );
}

function FeatureCard({
    icon,
    title,
    description,
}: {
    icon: React.ReactNode;
    title: string;
    description: string;
}) {
    return (
        <div className="glass group p-8 rounded-2xl bg-slate-900/40 border border-slate-800 hover:bg-slate-800/70 transition-all duration-300 cursor-pointer text-center">
            <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-gradient-to-br from-sky-500/20 to-indigo-500/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                {icon}
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
            <p className="text-slate-400">{description}</p>
        </div>
    );
}
