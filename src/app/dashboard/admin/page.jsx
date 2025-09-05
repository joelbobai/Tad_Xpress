"use client";
import { useApp } from "@/context/AppContext";
import Protected from "@/components/Protected";

export default function AdminDashboard() {
  const { users, riders, rides, removeRide } = useApp();
  return (
    <Protected roles={["admin"]}>
      <div className="space-y-6">
        <h1 className="text-xl font-bold">Admin Dashboard</h1>
        <section id="users" className="space-y-2">
          <h2 className="font-semibold">Users</h2>
          <ul className="card space-y-1">
            {users.map((u) => (
              <li key={u.id || u.email}>{u.name} - {u.email}</li>
            ))}
          </ul>
        </section>
        <section id="riders" className="space-y-2">
          <h2 className="font-semibold">Riders</h2>
          <ul className="card space-y-1">
            {riders.map((r) => (
              <li key={r.id}>{r.name} - {r.email}</li>
            ))}
          </ul>
        </section>
        <section id="rides" className="space-y-2">
          <h2 className="font-semibold">Rides</h2>
          <ul className="space-y-2">
            {rides.map((ride) => (
              <li key={ride.id} className="card flex items-center justify-between">
                <div>
                  <p>{ride.location}</p>
                  {ride.time && <p className="text-sm">{ride.time}</p>}
                </div>
                <button
                  onClick={() => removeRide(ride.id)}
                  className="btn"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </Protected>
  );
}
