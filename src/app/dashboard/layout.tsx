"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import {
  HomeIcon,
  MagnifyingGlassIcon,
  ClockIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const links = [
    { href: "/dashboard", label: "Dashboard", icon: HomeIcon },
    { href: "/dashboard/track", label: "Track", icon: MagnifyingGlassIcon },
    { href: "/dashboard/history", label: "History", icon: ClockIcon },
    { href: "/dashboard/profile", label: "Profile", icon: UserIcon },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="flex w-64 flex-col bg-white p-6 shadow-sm">
        <div className="mb-8 text-2xl font-bold text-brand-primary">TadXpress</div>
        <nav className="space-y-2">
          {links.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium hover:bg-brand-primary-light ${
                pathname === href
                  ? "bg-brand-primary-light text-brand-primary-dark"
                  : "text-gray-700"
              }`}
            >
              <Icon className="h-5 w-5" />
              {label}
            </Link>
          ))}
        </nav>
      </aside>
      <div className="flex flex-1 flex-col">
        <header className="flex items-center justify-between border-b bg-white p-4">
          <input
            type="text"
            placeholder="Search anything here..."
            className="w-full max-w-md rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
          />
          <div className="ml-4 flex items-center gap-3">
            <Image
              src="/vercel.svg"
              alt="User"
              width={32}
              height={32}
              className="rounded-full"
            />
            <span className="text-sm font-medium">Peter Gross</span>
          </div>
        </header>
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
