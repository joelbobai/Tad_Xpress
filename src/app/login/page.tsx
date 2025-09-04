"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

import Link from "next/link";


export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/dashboard");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#FEFAE0] p-4">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
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
          Don&apos;t have an account? {" "}
          <Link href="/signup" className="text-[#FFCF50]">
            Sign Up
          </Link>
        </p>

      </div>
    </div>
  );
}
