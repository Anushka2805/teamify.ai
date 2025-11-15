"use client";

import Sidebar from "@/app/commonComponents/SideBar";
import { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function DashboardLayout({ children }: { children: ReactNode }) {

  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/signin?required=true");
    }
  }, [router]);

  return (
    <div className="flex">
      {/* Sidebar stays fixed */}
      <Sidebar />

      {/* Page changes here */}
      <div className="flex-1 ml-0 md:ml-64">
        {children}
      </div>
    </div>
  );
}
