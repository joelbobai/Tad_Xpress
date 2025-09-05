"use client";
import { useState } from "react";
import { useApp } from "@/context/AppContext";
import Protected from "@/components/Protected";

export default function RiderDashboard() {
  const { addRide, currentUser, rides } = useApp();
  const [location, setLocation] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addRide({ location, time, postedById: currentUser?.id });
    setLocation("");
    setTime("");
    alert("Ride posted");
  };

  const myRides = rides.filter((r) => r.postedById === currentUser?.id);

  return (
    <Protected roles={["rider"]}>
      <div className="space-y-4">
        <h1 className="text-xl font-bold">Rider Dashboard</h1>
        <form onSubmit={handleSubmit} className="card space-y-2">
          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Location"
            className="border p-2 w-full"
            required
          />
          <input
            value={time}
            onChange={(e) => setTime(e.target.value)}
            placeholder="Time (optional)"
            className="border p-2 w-full"
          />
          <button className="btn" type="submit">
            Post Ride
          </button>
        </form>
        <div className="grid">
          {myRides.map((ride) => (
            <div key={ride.id} className="card space-y-1">
              <h2 className="font-semibold">{ride.location}</h2>
              {ride.time && <p className="text-sm">{ride.time}</p>}
            </div>
          ))}
        </div>
      </div>
    </Protected>
  );
}
