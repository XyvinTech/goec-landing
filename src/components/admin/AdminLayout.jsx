"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Gauge, UploadCloud, LogOut } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Header from "./Header";

const AdminLayout = ({ children }) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const pathname = usePathname();

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const isActivePath = (path) => pathname === path;

  return (
    <div className="flex h-screen">
      <motion.div
        className="bg-primary flex flex-col"
        initial={{ width: isSidebarCollapsed ? "5%" : "16%" }}
        animate={{ width: isSidebarCollapsed ? "5%" : "16%" }}
        transition={{ duration: 0.3 }}
      >
        <div className="p-4">
          <img src="/images/logo.png" width={75} height={37} alt="Logo" />
        </div>

        <div className="flex flex-col space-y-2">
          <Link
            href="/add"
            className={`flex items-center gap-2 py-2 px-6 text-[#dadada] hover:bg-blue-600 ${
              isActivePath("/add") && "bg-white text-primary"
            }`}
          >
            <Plus
              size={20}
              color={isActivePath("/add") ? "#13F2AD" : "#dadada"}
            />
            {!isSidebarCollapsed && "Add stations"}
          </Link>

          <Link
            href="/stations"
            className={`flex items-center gap-2 py-2 px-6 text-[#dadada] hover:bg-blue-600 ${
              isActivePath("/stations") && "bg-white text-primary"
            }`}
          >
            <Gauge
              size={20}
              color={isActivePath("/stations") ? "#13F2AD" : "#dadada"}
            />
            {!isSidebarCollapsed && "Charging stations"}
          </Link>

          <Link
            href="/upload"
            className={`flex items-center gap-2 py-2 px-6 text-[#dadada] hover:bg-blue-600 ${
              isActivePath("/upload") && "bg-white text-primary"
            }`}
          >
            <UploadCloud
              size={20}
              color={isActivePath("/upload") ? "#13F2AD" : "#dadada"}
            />
            {!isSidebarCollapsed && "Bulk Upload"}
          </Link>

          <button
            onClick={() => console.log("Sign out")}
            className="flex items-center gap-2 py-2 px-6 text-[#dadada] hover:bg-blue-600"
          >
            <LogOut size={20} color="#dadada" />
            {!isSidebarCollapsed && "Sign Out"}
          </button>
        </div>
      </motion.div>
      <div className="flex-grow">
        <Header
          toggleSidebar={toggleSidebar}
          isSidebarCollapsed={isSidebarCollapsed}
        />

        <main className="p-8 bg-[#f5f5f5]">{children}</main>
      </div>
    </div>
  );
};

export default AdminLayout;
