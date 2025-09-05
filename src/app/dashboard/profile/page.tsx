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

interface EditableFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  className?: string;
}

function EditableField({
  label,
  value,
  onChange,
  type = "text",
  className = "",
}: EditableFieldProps) {
  return (
    <div className={`space-y-1 ${className}`}>
      <label className="block text-sm font-medium text-[#626F47]">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-md border border-gray-300 p-2 text-[#626F47]"
      />
    </div>
  );
}


export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [fullName, setFullName] = useState("Peter Anthony Gross");
  const [firstName, setFirstName] = useState("Peter");
  const [middleName, setMiddleName] = useState("Anthony");
  const [email, setEmail] = useState("peter.gross@example.com");
  const [address, setAddress] = useState("123 Main St, Springfield");

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleProfileSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsEditing(false);
    // Placeholder for profile update logic
    alert("Profile updated");
  };

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
      <form onSubmit={handleProfileSubmit} className="rounded-lg bg-white p-6 shadow">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-[#626F47]">Profile</h1>
          {!isEditing ? (
            <button
              type="button"
              onClick={() => setIsEditing(true)}
              className="rounded-md bg-[#626F47] px-4 py-2 font-medium text-white hover:bg-[#525d43]"
            >
              Edit
            </button>
          ) : (
            <button
              type="submit"
              className="rounded-md bg-[#626F47] px-4 py-2 font-medium text-white hover:bg-[#525d43]"
            >
              Save
            </button>
          )}
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {isEditing ? (
            <>
              <EditableField label="Full name" value={fullName} onChange={setFullName} />
              <EditableField label="First name" value={firstName} onChange={setFirstName} />
              <EditableField label="Middle name" value={middleName} onChange={setMiddleName} />
              <EditableField
                label="Email"
                value={email}
                onChange={setEmail}
                type="email"
                className="md:col-span-2"
              />
              <EditableField
                label="Address"
                value={address}
                onChange={setAddress}
                className="md:col-span-2"
              />
            </>
          ) : (
            <>
              <ReadOnlyField label="Full name" value={fullName} />
              <ReadOnlyField label="First name" value={firstName} />
              <ReadOnlyField label="Middle name" value={middleName} />
              <ReadOnlyField
                label="Email"
                value={email}
                type="email"
                className="md:col-span-2"
              />
              <ReadOnlyField
                label="Address"
                value={address}
                className="md:col-span-2"
              />
            </>
          )}
        </div>
      </form>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 rounded-lg bg-white p-6 shadow"
      >
        <h2 className="text-2xl font-semibold text-[#626F47]">Reset Password</h2>
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

