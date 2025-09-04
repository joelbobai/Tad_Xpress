"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const links = [
    { href: "/dashboard", label: "Overview" },
    { href: "/dashboard/track", label: "Track Package" },
    { href: "/dashboard/history", label: "Shipment History" },
    { href: "/dashboard/profile", label: "Profile" },
  ];

  return (
    <div className="min-h-screen flex bg-[#FEFAE0]">
      <aside className="w-64 bg-[#626F47] text-[#FEFAE0]">
        <div className="p-4 text-2xl font-bold">TadXpress</div>
        <nav className="flex flex-col">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-2 hover:bg-[#FFCF50] hover:text-[#626F47] ${
                pathname === link.href ? "bg-[#FFCF50] text-[#626F47]" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </aside>
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
