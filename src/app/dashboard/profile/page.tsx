"use client";

import { useState, type FormEvent } from "react";

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
    <div className="max-w-xl space-y-8">
      <div>
        <h1 className="mb-6 text-2xl font-bold text-[#626F47]">Profile</h1>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#626F47]">
              Name
            </label>
            <input
              type="text"
              value="Peter Gross"
              disabled
              className="mt-1 w-full rounded-md border border-gray-300 bg-gray-100 p-2 text-[#626F47]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#626F47]">
              Email
            </label>
            <input
              type="email"
              value="peter.gross@example.com"
              disabled
              className="mt-1 w-full rounded-md border border-gray-300 bg-gray-100 p-2 text-[#626F47]"
            />
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <h2 className="text-xl font-semibold text-[#626F47]">
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
          className="rounded-md bg-[#626F47] px-4 py-2 text-white"
        >
          Change Password
        </button>
      </form>
    </div>
  );
}

