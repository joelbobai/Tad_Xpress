"use client";
import { useApp } from "@/context/AppContext";

export default function RidesPage() {
  const { rides, whatsappHref } = useApp();
  return (
    <div className="container">
      <h1 className="mb-4 text-xl font-bold">Available Rides</h1>
      <div className="grid">
        {rides.map((ride) => (
          <div key={ride.id} className="card space-y-2">
            <h2 className="text-lg font-semibold">{ride.location}</h2>
            <span className="badge">{ride.available}</span>
            {ride.time && <p className="text-sm">{ride.time}</p>}
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Book via WhatsApp
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
