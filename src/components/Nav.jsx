"use client";
import Link from "next/link";
import { useApp } from "@/context/AppContext";

export default function Nav() {
  const { currentUser, logout } = useApp();
  const dashboardHref = currentUser
    ? currentUser.role === "user"
      ? "/dashboard"
      : `/dashboard/${currentUser.role}`
    : "/";
  return (
    <nav className="nav">
      <Link href="/" className="font-bold">
        Ride Booking
      </Link>
      <div className="space-x-4">
        <Link href="/rides">Rides</Link>
        {currentUser ? (
          <>
            <Link href={dashboardHref}>Dashboard</Link>
            <button onClick={logout} className="btn">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link href="/login?role=user">Login User</Link>
            <Link href="/login?role=rider">Login Rider</Link>
            <Link href="/login?role=admin">Login Admin</Link>
            <Link href="/signup/rider">Signup Rider</Link>
          </>
        )}
      </div>
    </nav>
  );
}
