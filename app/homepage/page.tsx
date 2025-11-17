"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Zap, Users, Sparkles, Trophy, ArrowRight } from "lucide-react";
import Navbar from "../commonComponents/NavBar";
import { motion } from "framer-motion";

export default function Landing() {
    return (
        <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#020617] via-[#0a0f2c] to-[#001a3a] text-white">
            {/* Background animated glow */}
            <Navbar />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.2),transparent_60%),radial-gradient(circle_at_80%_80%,rgba(99,102,241,0.2),transparent_60%)] animate-pulse" />

            {/* Hero Section */}
            <section className="relative z-10 flex flex-col items-center text-center px-6 pt-28 pb-32 md:pt-40 md:pb-40">

                <div className="absolute top-[10%] left-[20%] w-[450px] h-[450px] bg-blue-600/20 blur-[160px] rounded-full"></div>
                <div className="absolute top-[30%] right-[15%] w-[350px] h-[350px] bg-sky-500/20 blur-[150px] rounded-full"></div>

                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative z-10 px-6 py-2 rounded-full border border-blue-500/40 bg-blue-500/10 text-blue-300 text-sm md:text-base mb-6"
                >
                    AI-Powered Collaboration Platform
                </motion.div>

                {/* Main Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative z-10 text-4xl md:text-7xl font-extrabold leading-tight mb-6"
                >
                    <span className="text-4xl md:text-6xl font-extrabold">
                        Where Hackathon Teams  </span> <br />
                    <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
                        Build to Win
                    </span>
                </motion.h1>

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="relative z-10 text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10"
                >
                    The ultimate platform for hackathon teams. Collaborate in real-time,
                    leverage AI tools and manage your project from idea to pitch.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <Link href="/signup">
                        <Button
                            size="lg"
                            className="bg-gradient-to-r from-sky-500 to-blue-600 hover:scale-105 transition-all duration-300 text-white font-semibold shadow-lg px-8"
                        >
                            Get Started
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </Link>
                    <Button
                        size="lg"
                        variant="outline"
                        className="border-slate-500 text-slate-300 hover:bg-slate-800/50 transition-all duration-300 bg-black/20 px-8"
                    >
                        Learn More
                    </Button>
                </motion.div>
            </section>

            {/* Features Section */}
            <section className="relative z-10 container mx-auto px-6 pb-24 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <FeatureCard
                    icon={<Users className="w-10 h-10 text-sky-400" />}
                    title="Smart Team Management"
                    description="Create teams, assign roles and track progress with intuitive dashboards and real-time updates."
                />
                <FeatureCard
                    icon={<Sparkles className="w-10 h-10 text-indigo-400" />}
                    title="AI-Powered Tools"
                    description="Generate pitches, summarize chats and get intelligent guidance for hackathon success."
                />
                <FeatureCard
                    icon={<Trophy className="w-10 h-10 text-sky-400" />}
                    title="Win Together"
                    description="Collaborate in real-time with chat, file sharing and task tracking - all in one platform."
                />
            </section>
            {/* Simple Yet Powerful Section */}
            <section className="relative z-10 container mx-auto px-6 pt-4 pb-10 flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-3">
                        Simple Yet Powerful.
                    </h2>
                    <p className="text-slate-400 text-3xl">Get started in minutes</p>
                </motion.div>

                <div className="flex flex-col gap-14 w-full max-w-3xl">
                    {[
                        {
                            step: "01",
                            title: "Create or Join a Team",
                            desc: "Start by creating your hackathon team or join an existing one using an invite code.",
                        },
                        {
                            step: "02",
                            title: "Set Up Your Project",
                            desc: "Define your project goals, assign roles and set your hackathon deadline.",
                        },
                        {
                            step: "03",
                            title: "Collaborate & Build",
                            desc: "Use real-time chat, task boards and file sharing to work together seamlessly.",
                        },
                        {
                            step: "04",
                            title: "Leverage AI Tools",
                            desc: "Generate pitches, get AI guidance and summarize discussions to stay focused.",
                        },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            viewport={{ once: true }}
                            className="flex items-start justify-between gap-6"
                        >
                            {/* Step Number */}
                            <h3 className="text-4xl md:text-5xl font-extrabold text-slate-600 w-20 text-left">
                                {item.step}
                            </h3>

                            {/* Text */}
                            <div className="flex-1">
                                <h4 className="text-xl md:text-2xl font-semibold text-white mb-2">
                                    {item.title}
                                </h4>
                                <p className="text-slate-400 leading-relaxed max-w-xl text-lg">
                                    {item.desc}
                                </p>
                            </div>

                            {/* Tick Icon */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: 0.3 }}
                                className="w-7 h-7 rounded-full border border-green-400 text-green-400 flex items-center justify-center text-sm"
                            >
                                ✓
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <footer className="relative z-10 border-t border-slate-800 py-6 text-center text-slate-500 text-sm">
                © {new Date().getFullYear()} Teamify.AI . Built for innovators & developers .
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
