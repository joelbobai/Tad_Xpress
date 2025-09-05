"use client";

import { useEffect, useState } from "react";
import { getRides, Ride } from "@/lib/rides";

export default function UserDashboard() {
  const [rides, setRides] = useState<Ride[]>([]);

  useEffect(() => {
    setRides(getRides());
  }, []);

  return (
    <main className="max-w-2xl mx-auto p-4 space-y-4">
      <h1 className="text-2xl font-bold text-[#626F47]">Available Rides</h1>
      {rides.length === 0 && (
        <p className="text-center text-gray-500">No rides available.</p>
      )}
      {rides.map((ride, i) => (
        <div
          key={i}
          className="flex items-center justify-between rounded-lg bg-white p-4 shadow"
        >
          <div>
            <p className="font-medium">{ride.location}</p>
            <p className="text-sm text-gray-500">{ride.time}</p>
          </div>
          <a
            href="https://wa.me/08145765479"
            target="_blank"
            className="rounded bg-[#626F47] px-3 py-1 text-[#FEFAE0] hover:bg-[#FFCF50] hover:text-[#626F47]"
          >
            Book
          </a>
        </div>
      ))}
    </main>
  );
}
