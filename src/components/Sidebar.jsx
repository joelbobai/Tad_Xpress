"use client";
import Link from "next/link";
import { useApp } from "@/context/AppContext";

export default function Sidebar({ role }) {
  const { logout } = useApp();
  const makeItem = (href, label, onClick) => (
    <li key={label}>
      {onClick ? (
        <button onClick={onClick} className="block w-full text-left p-2">
          {label}
        </button>
      ) : (
        <Link href={href} className="block p-2">
          {label}
        </Link>
      )}
    </li>
  );

  let items = [];
  if (role === "user") {
    items = [
      makeItem("/dashboard", "Overview"),
      makeItem("#", "Profile"),
      makeItem("#", "Edit Profile"),
      makeItem("#", "Change Password"),
      makeItem("/rides", "Book a Ride"),
      makeItem("#", "Logout", logout),
    ];
  } else if (role === "rider") {
    items = [
      makeItem("/dashboard/rider", "Overview"),
      makeItem("#", "Profile"),
      makeItem("#", "Edit Profile"),
      makeItem("#", "Change Password"),
      makeItem("/dashboard/rider", "Post a Ride"),
      makeItem("/dashboard/rider", "My Posted Rides"),
      makeItem("#", "Logout", logout),
    ];
  } else if (role === "admin") {
    items = [
      makeItem("/dashboard/admin", "Overview"),
      makeItem("/dashboard/admin#users", "Users"),
      makeItem("/dashboard/admin#riders", "Riders"),
      makeItem("/dashboard/admin#rides", "Rides"),
      makeItem("#", "Logout", logout),
    ];
  }

  return (
    <aside className="sidebar">
      <ul>{items}</ul>
    </aside>
  );
}
