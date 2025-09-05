"use client";

import { useState, type FormEvent } from "react";


interface ReadOnlyFieldProps {
  label: string;
  value: string;
  type?: string;
  className?: string;
}

function ReadOnlyField({
  label,
  value,
  type = "text",
  className = "",
}: ReadOnlyFieldProps) {
  return (
    <div className={`space-y-1 ${className}`}>
      <label className="block text-sm font-medium text-[#626F47]">
        {label}
      </label>
      <input
        type={type}
        value={value}
        disabled
        className="w-full rounded-md border border-gray-300 bg-gray-100 p-2 text-[#626F47]"
      />
    </div>
  );
}


export default function ProfilePage() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Placeholder for password reset logic
    alert("Password reset successful");
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  return (

    <div className="mx-auto max-w-2xl space-y-8">
      <div className="rounded-lg bg-white p-6 shadow">
        <h1 className="mb-6 text-3xl font-bold text-[#626F47]">Profile</h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <ReadOnlyField label="Full name" value="Peter Anthony Gross" />
          <ReadOnlyField label="First name" value="Peter" />
          <ReadOnlyField label="Middle name" value="Anthony" />
          <ReadOnlyField
            label="Email"
            value="peter.gross@example.com"
            type="email"
            className="md:col-span-2"
          />
          <ReadOnlyField
            label="Address"
            value="123 Main St, Springfield"
            className="md:col-span-2"
          />
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 rounded-lg bg-white p-6 shadow"
      >
        <h2 className="text-2xl font-semibold text-[#626F47]">

          Reset Password
        </h2>
        <div>
          <label className="block text-sm font-medium text-[#626F47]">
            Current password
          </label>
          <input
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            className="mt-1 w-full rounded-md border border-gray-300 p-2 text-[#626F47]"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#626F47]">
            New password
          </label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="mt-1 w-full rounded-md border border-gray-300 p-2 text-[#626F47]"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#626F47]">
            Confirm new password
          </label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="mt-1 w-full rounded-md border border-gray-300 p-2 text-[#626F47]"
            required
          />
        </div>
        <button
          type="submit"

          className="rounded-md bg-[#626F47] px-4 py-2 font-medium text-white hover:bg-[#525d43]"

        >
          Change Password
        </button>
      </form>
    </div>
  );
}

