"use client";
import { useApp } from "@/context/AppContext";
import Protected from "@/components/Protected";
import Sidebar from "@/components/Sidebar";

export default function DashboardLayout({ children }) {
  const { currentUser } = useApp();
  return (
    <Protected roles={["user", "rider", "admin"]}>
      <div className="flex min-h-screen">
        <Sidebar role={currentUser?.role} />
        <main className="flex-1 p-4">{children}</main>
      </div>
    </Protected>
  );
}
