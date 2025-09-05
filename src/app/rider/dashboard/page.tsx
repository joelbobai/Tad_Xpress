"use client";

import { useState, useEffect } from "react";
import { getRides, saveRide, Ride } from "@/lib/rides";

export default function RiderDashboard() {
  const [location, setLocation] = useState("");
  const [time, setTime] = useState("");
  const [rides, setRides] = useState<Ride[]>([]);

  useEffect(() => {
    setRides(getRides());
  }, []);

  const addRide = (e: React.FormEvent) => {
    e.preventDefault();
    if (!location || !time) return;
    saveRide({ location, time });
    setRides(getRides());
    setLocation("");
    setTime("");
  };

  return (
    <main className="max-w-2xl mx-auto p-4 space-y-6">
      <h1 className="text-2xl font-bold text-[#626F47]">Rider Dashboard</h1>
      <form onSubmit={addRide} className="space-y-2">
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full rounded-md border px-4 py-2"
        />
        <input
          type="text"
          placeholder="Time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="w-full rounded-md border px-4 py-2"
        />
        <button
          type="submit"
          className="rounded bg-[#626F47] px-4 py-2 text-[#FEFAE0] hover:bg-[#FFCF50] hover:text-[#626F47]"
        >
          Add Ride
        </button>
      </form>
      <div className="space-y-2">
        {rides.map((ride, i) => (
          <div key={i} className="rounded-lg bg-white p-4 shadow">
            <p className="font-medium">{ride.location}</p>
            <p className="text-sm text-gray-500">{ride.time}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
