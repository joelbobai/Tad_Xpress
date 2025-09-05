"use client";

interface Person {
  name: string;
  email: string;
}

const users: Person[] = [
  { name: "Jane Passenger", email: "jane@example.com" },
  { name: "John Passenger", email: "john@example.com" },
];

const riders: Person[] = [
  { name: "Rider One", email: "rider1@example.com" },
  { name: "Rider Two", email: "rider2@example.com" },
];

export default function AdminDashboard() {
  return (
    <main className="mx-auto max-w-2xl space-y-8 p-4">
      <h1 className="text-2xl font-bold text-[#626F47]">Admin Dashboard</h1>

      <section>
        <h2 className="mb-2 text-xl font-semibold text-[#626F47]">Users</h2>
        <ul className="space-y-2">
          {users.map((u, i) => (
            <li
              key={i}
              className="flex justify-between rounded-lg bg-white p-4 shadow"
            >
              <span>{u.name}</span>
              <span className="text-sm text-gray-500">{u.email}</span>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="mb-2 text-xl font-semibold text-[#626F47]">Riders</h2>
        <ul className="space-y-2">
          {riders.map((r, i) => (
            <li
              key={i}
              className="flex justify-between rounded-lg bg-white p-4 shadow"
            >
              <span>{r.name}</span>
              <span className="text-sm text-gray-500">{r.email}</span>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
