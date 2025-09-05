"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useApp } from "@/context/AppContext";

export default function Protected({ children, roles }) {
  const { currentUser } = useApp();
  const router = useRouter();

  useEffect(() => {
    if (!currentUser || (roles && !roles.includes(currentUser.role))) {
      router.replace("/");
    }
  }, [currentUser, roles, router]);

  if (!currentUser || (roles && !roles.includes(currentUser.role))) {
    return null;
  }
  return children;
}
