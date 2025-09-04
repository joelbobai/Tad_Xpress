"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import {
  ArrowLeftOnRectangleIcon,
  BellIcon,
  CalendarDaysIcon,
  ChartBarSquareIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  EnvelopeIcon,
  FlagIcon,
  GlobeAltIcon,
  HomeIcon,
  MapIcon,
  QuestionMarkCircleIcon,
  TruckIcon,
} from "@heroicons/react/24/outline";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const mainLinks = [
    { href: "/dashboard", label: "Dashboard", icon: HomeIcon },
    { href: "#", label: "Trips", icon: MapIcon },
    { href: "#", label: "Schedule", icon: CalendarDaysIcon },
    { href: "#", label: "Messages", icon: EnvelopeIcon, badge: "2" },
    { href: "#", label: "Analytics", icon: ChartBarSquareIcon },
    { href: "#", label: "Vehicles", icon: TruckIcon },
    { href: "#", label: "Report", icon: FlagIcon },
    { href: "#", label: "Support", icon: QuestionMarkCircleIcon },
  ];

  const bottomLinks = [
    { href: "#", label: "Settings", icon: Cog6ToothIcon },
    { href: "#", label: "Log out", icon: ArrowLeftOnRectangleIcon },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="flex w-64 flex-col justify-between bg-white px-4 py-6 shadow-sm">
        <div>
          <div className="mb-8 flex items-center gap-2 px-2">
            <GlobeAltIcon className="h-6 w-6 text-blue-600" />
            <span className="text-lg font-bold text-gray-800">TadXpress</span>
          </div>
          <nav className="space-y-1">
            {mainLinks.map(({ href, label, icon: Icon, badge }) => (
              <Link
                key={href + label}
                href={href}
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium hover:bg-blue-50 ${
                  pathname === href
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-700"
                }`}
              >
                <Icon className="h-5 w-5" />
                <span className="flex-1">{label}</span>
                {badge && (
                  <span className="rounded bg-blue-600 px-1.5 py-0.5 text-xs font-semibold text-white">
                    {badge}
                  </span>
                )}
              </Link>
            ))}
          </nav>
        </div>
        <div className="space-y-1 border-t pt-4">
          {bottomLinks.map(({ href, label, icon: Icon }) => (
            <Link
              key={href + label}
              href={href}
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-blue-50"
            >
              <Icon className="h-5 w-5" />
              {label}
            </Link>
          ))}
        </div>
      </aside>

      <div className="flex flex-1 flex-col">
        <header className="flex items-center justify-between bg-white px-6 py-4 shadow-sm">
          <div className="flex flex-1 items-center gap-4">
            {/* <div className="flex items-center gap-2">
              <GlobeAltIcon className="h-6 w-6 text-blue-600" />
              <span className="text-lg font-semibold text-gray-800">
                GLOBALRIDEh
              </span>
            </div> */}
            <input
              type="text"
              placeholder="Search anything here..."
              className="ml-4 w-full max-w-md flex-1 rounded-full border bg-gray-50 px-4 py-2 text-sm focus:outline-none"
            />
          </div>
          <div className="ml-6 flex items-center gap-4">
            <BellIcon className="h-6 w-6 text-gray-500" />
            <div className="flex items-center gap-2 rounded-full bg-gray-100 p-1 pr-3">
              <Image
                src="/vercel.svg"
                alt="User"
                width={32}
                height={32}
                className="rounded-full"
              />
              <div className="text-left">
                <p className="text-sm font-medium leading-tight text-black">
                  Peter Gross
                </p>
                <p className="text-xs leading-tight text-gray-500">Driver</p>
              </div>
              <ChevronDownIcon className="h-4 w-4 text-gray-500" />
            </div>
          </div>
        </header>
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
