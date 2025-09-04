
"use client";
import { useState } from "react";

export default function Dashboard() {
  const [trackingId, setTrackingId] = useState("");
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("In transit");
  };

  return (
    <div className="min-h-screen bg-[#FEFAE0] p-6">
      <div className="mx-auto max-w-2xl rounded-lg bg-white p-8 shadow">
        <h1 className="mb-6 text-2xl font-bold text-[#626F47]">Dashboard</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Enter tracking number"
            value={trackingId}
            onChange={(e) => setTrackingId(e.target.value)}
            className="w-full rounded-md border border-[#626F47] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#FFCF50]"
            required
          />
          <button
            type="submit"
            className="rounded-md bg-[#626F47] px-4 py-2 font-semibold text-[#FEFAE0] transition hover:bg-[#FFCF50] hover:text-[#626F47]"
          >
            Track Package
          </button>
        </form>
        {status && (
          <div className="mt-6 rounded-md bg-[#FFCF50]/20 p-4 text-[#626F47]">
            <p className="font-medium">Tracking ID: {trackingId}</p>
            <p>Status: {status}</p>
          </div>
        )}
      </div>

  );
}
