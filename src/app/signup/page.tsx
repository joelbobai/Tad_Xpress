"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function SignUp() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) return;
    router.push("/dashboard");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#FEFAE0] p-4">
      <div className="grid w-full max-w-4xl grid-cols-1 overflow-hidden rounded-xl bg-white shadow-lg md:grid-cols-2">
        <div className="relative hidden md:block">
          <Image
            src="/abstract-geometric-pattern.png"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/60 px-8 text-center backdrop-blur-md">
            <h2 className="text-4xl font-bold text-[#626F47]">Sign Up</h2>
            <p className="mt-2 text-sm text-[#626F47]">
              Join us to unlock an exciting experience with our services.
            </p>
          </div>
        </div>
        <div className="p-8">
          <h1 className="mb-6 text-center text-2xl font-bold text-[#626F47]">
            Create an Account
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-md border border-[#626F47] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#FFCF50]"
              required
            />
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
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full rounded-md border border-[#626F47] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#FFCF50]"
              required
            />
            <p className="text-center text-xs text-[#626F47]">
              By continuing you agree to our{" "}
              <Link href="#" className="text-[#FFCF50]">
                Terms & Conditions
              </Link>{" "}
              and{" "}
              <Link href="#" className="text-[#FFCF50]">
                Privacy Policy
              </Link>
            </p>
            <button
              type="submit"
              className="w-full rounded-md bg-[#626F47] py-2 font-semibold text-[#FEFAE0] transition hover:bg-[#FFCF50] hover:text-[#626F47]"
            >
              Create Account
            </button>
          </form>
          <p className="mt-4 text-center text-sm text-[#626F47]">
            Already have an account?{" "}
            <Link href="/login" className="text-[#FFCF50]">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
