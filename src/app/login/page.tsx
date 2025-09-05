"use client";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { useApp } from "@/context/AppContext";

export default function Login() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const role = searchParams.get("role") || "user";
  const { loginUser } = useApp();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ok = loginUser(email, password, role);
    if (ok) {
      const dash = role === "user" ? "/dashboard" : `/dashboard/${role}`;
      router.push(dash);
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#FEFAE0] p-4">
      <div className="grid w-full max-w-4xl grid-cols-1 overflow-hidden rounded-xl bg-white shadow-lg md:grid-cols-2">
        <div className="relative hidden md:block">
          <img
            src="https://images.unsplash.com/photo-1619741982598-7cb8a7959476?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dg"
            alt="Background"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/60 px-8 text-center backdrop-blur-md">
            <h2 className="text-4xl font-bold text-[#626F47]">Welcome Back</h2>
            <p className="mt-2 text-sm text-[#626F47]">
              Sign in to continue your journey.
            </p>
          </div>
        </div>
        <div className="p-8">
          <h1 className="mb-6 text-center text-2xl font-bold text-[#626F47]">
            Login to TadXpress
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-md border border-[#626F47] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#FFCF50]"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-md border border-[#626F47] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#FFCF50]"
              required
            />
            <button
              type="submit"
              className="w-full rounded-md bg-[#626F47] py-2 font-semibold text-[#FEFAE0] transition hover:bg-[#FFCF50] hover:text-[#626F47]"
            >
              Login
            </button>
          </form>
          <p className="mt-4 text-center text-sm text-[#626F47]">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-[#FFCF50]">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
