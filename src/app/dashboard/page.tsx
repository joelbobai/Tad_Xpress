"use client";
import Image from "next/image";
import { Package, Truck, CheckCircle2, Star } from "lucide-react";
import StatCard from "./components/StatCard";

export default function Dashboard() {
  const stats = [
    { title: "Total shipments", value: "120", icon: <Package className="h-6 w-6" /> },
    { title: "In transit", value: "80", icon: <Truck className="h-6 w-6" /> },
    { title: "Delivered", value: "40", icon: <CheckCircle2 className="h-6 w-6" /> },
  ];

  return (
    <div className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <div className="rounded-xl bg-white p-4 shadow">
            <h2 className="mb-4 text-lg font-semibold text-brand-primary-dark">Calendar</h2>
            <div className="grid grid-cols-7 gap-2 text-center text-sm">
              {Array.from({ length: 28 }).map((_, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-lg bg-brand-primary-light"
                ></div>
              ))}
            </div>
          </div>
          <div className="rounded-xl bg-white p-4 shadow">
            <h2 className="mb-4 text-lg font-semibold text-brand-primary-dark">Schedule of shipments</h2>
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="text-gray-500">
                  <th className="p-2">Shipment</th>
                  <th className="p-2">Destination</th>
                  <th className="p-2">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-2">PX-01</td>
                  <td className="p-2">Berlin</td>
                  <td className="p-2 text-brand-primary">Delivered</td>
                </tr>
                <tr className="border-t">
                  <td className="p-2">PX-02</td>
                  <td className="p-2">Munich</td>
                  <td className="p-2 text-brand-accent-dark">In transit</td>
                </tr>
                <tr className="border-t">
                  <td className="p-2">PX-03</td>
                  <td className="p-2">Hamburg</td>
                  <td className="p-2 text-brand-secondary">Pending</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-xl bg-white p-4 shadow">
            <h2 className="mb-4 text-lg font-semibold text-brand-primary-dark">Rating</h2>
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${i < 4 ? "text-brand-accent" : "text-gray-300"}`}
                  fill={i < 4 ? "currentColor" : "none"}
                />
              ))}
              <span className="ml-2 text-sm text-gray-600">4.0</span>
            </div>
          </div>
          <div className="rounded-xl bg-white p-4 shadow">
            <h2 className="mb-4 text-lg font-semibold text-brand-primary-dark">Current shipment</h2>
            <div className="flex h-40 items-center justify-center rounded-lg bg-gray-100 text-gray-500">
              Map placeholder
            </div>
          </div>
          <div className="rounded-xl bg-white p-4 shadow">
            <h2 className="mb-4 text-lg font-semibold text-brand-primary-dark">Current vehicle</h2>
            <div className="flex flex-col items-center">
              <Image
                src="/globe.svg"
                alt="Vehicle"
                width={160}
                height={80}
                className="mb-2"
              />
              <p className="text-sm text-gray-600">Volvo FH16</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
