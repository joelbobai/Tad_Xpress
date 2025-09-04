"use client";
import { Calendar as CalendarIcon, Clock, MapPin, Star, TrendingUp, Bus } from "lucide-react";

export default function Dashboard() {
  return (
    <main className="space-y-6">
      {/* Section 1: stats */}
      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Total trips */}
        <div className="rounded-xl bg-white p-4 shadow">
          <div className="flex items-start justify-between">
            <div>
              <div className="mb-1 flex items-center gap-2 text-sm text-gray-500">
                <Bus className="h-5 w-5 text-brand-primary" />
                <span>Total trips</span>
              </div>
              <p className="text-2xl font-semibold text-gray-900">84</p>
              <p className="mt-1 flex items-center gap-1 text-xs text-green-600">
                <TrendingUp className="h-3 w-3" /> 4.2% this month
              </p>
            </div>
          </div>
        </div>

        {/* Distance driven */}
        <div className="rounded-xl bg-white p-4 shadow">
          <div className="flex items-start justify-between">
            <div>
              <div className="mb-1 flex items-center gap-2 text-sm text-gray-500">
                <MapPin className="h-5 w-5 text-brand-primary" />
                <span>Distance driven</span>
              </div>
              <p className="text-2xl font-semibold text-gray-900">1628 km</p>
            </div>
            <div className="flex items-end gap-1 self-end">
              {[
                "h-6", "h-8", "h-10", "h-7", "h-9",
              ].map((h, i) => (
                <div key={i} className={`${h} w-2 rounded bg-brand-primary-light`}></div>
              ))}
            </div>
          </div>
          <div className="mt-1 flex justify-between text-[10px] text-gray-400">
            {['Dec', 'Jan', 'Feb', 'Mar', 'Apr'].map(m => (
              <span key={m}>{m}</span>
            ))}
          </div>
        </div>

        {/* Driving hours */}
        <div className="flex items-center justify-between rounded-xl bg-white p-4 shadow">
          <div>
            <div className="mb-1 flex items-center gap-2 text-sm text-gray-500">
              <Clock className="h-5 w-5 text-brand-primary" />
              <span>Driving hours</span>
            </div>
            <p className="text-2xl font-semibold text-gray-900">16 hr 12 m</p>
          </div>
          <div className="relative h-14 w-14">
            <div className="absolute inset-0 rounded-full bg-[conic-gradient(#1e3a8a_0_65%,#e5e7eb_65%)]"></div>
            <div className="absolute inset-3 rounded-full bg-white"></div>
          </div>
        </div>
      </section>

      {/* Section 2: calendar, current trip, map, rating */}
      <section className="grid gap-6 lg:grid-cols-3">
        <div className="space-y-6">
          {/* Calendar */}
          <div className="rounded-xl bg-white p-4 shadow">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-brand-primary-dark">Calendar</h2>
              <CalendarIcon className="h-4 w-4 text-brand-primary" />
            </div>
            <div className="grid grid-cols-7 gap-2 text-center text-sm">
              {Array.from({ length: 28 }).map((_, i) => (
                <div
                  key={i}
                  className={`aspect-square rounded-lg ${
                    [2, 6, 9, 12, 16, 20].includes(i)
                      ? "bg-brand-primary"
                      : "bg-brand-primary-light"
                  }`}
                ></div>
              ))}
            </div>
          </div>

          {/* Rating */}
          <div className="rounded-xl bg-white p-4 shadow">
            <h2 className="mb-1 text-lg font-semibold text-brand-primary-dark">Rating</h2>
            <p className="mb-2 text-xs text-gray-500">Based on 60 reviews</p>
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${i < 4 ? "text-brand-accent" : "text-gray-300"}`}
                  fill={i < 4 ? "currentColor" : "none"}
                />
              ))}
              <span className="ml-2 text-sm text-gray-600">4.8</span>
            </div>
          </div>
        </div>

          {/* Current trip */}
          <div className="rounded-xl bg-white p-4 shadow">
            <h2 className="mb-4 text-lg font-semibold text-brand-primary-dark">Current trip</h2>
            <ol className="relative border-l border-blue-200">
              <li className="relative mb-6 ml-6">
                <span className="absolute -left-1.5 top-2 h-3 w-3 rounded-full bg-blue-600 ring-4 ring-white" />
                <p className="text-gray-500">Departure</p>
                <div className="flex items-center justify-between">
                  <p className="font-medium">Poznan, Bus Station</p>
                  <span className="text-xs text-gray-400">12:45 AM</span>
                </div>
              </li>
              <li className="relative mb-6 ml-6">
                <MapPin className="absolute -left-2 top-1 h-4 w-4 text-blue-600" />
                <p className="text-gray-500">Stop</p>
                <div className="flex items-center justify-between">
                  <p className="font-medium">Berlin Airport BER, T 1/2</p>
                  <span className="text-xs text-gray-400">4:05 AM</span>
                </div>
              </li>
              <li className="relative ml-6">
                <MapPin className="absolute -left-2 top-1 h-4 w-4 text-blue-600" />
                <p className="text-gray-500">Arrival</p>
                <div className="flex items-center justify-between">
                  <p className="font-medium">Berlin Südkreuz</p>
                  <span className="text-xs text-gray-400">4:30 AM</span>
                </div>
              </li>
            </ol>
            <div className="mt-6 flex items-center justify-center rounded-lg bg-blue-50 py-2 text-sm text-blue-700">
              <Clock className="mr-2 h-4 w-4" />
              Duration: 3 hours 45 min
            </div>
          </div>

        {/* Map */}
        <div className="rounded-xl bg-white p-4 shadow">
          <h2 className="mb-4 text-lg font-semibold text-brand-primary-dark">Map</h2>
          <div className="flex h-56 items-center justify-center rounded-lg bg-gray-100 text-gray-500">
            Map placeholder
          </div>
        </div>
      </section>

      {/* Section 3: schedule and vehicle */}
      <section className="grid gap-6 lg:grid-cols-3">
        {/* Schedule of trips */}
        <div className="rounded-xl bg-white p-4 shadow lg:col-span-2">
          <h2 className="mb-4 text-lg font-semibold text-brand-primary-dark">
            Schedule of trips
          </h2>
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="text-gray-500">
                <th className="p-2">From</th>
                <th className="p-2">To</th>
                <th className="p-2">Duration</th>
                <th className="p-2">Departure</th>
                <th className="p-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  from: "Poznan",
                  to: "Berlin",
                  duration: "3 hr 45 m",
                  departure: "05/12/2025, 8:51 AM",
                  status: "Completed",
                  color: "bg-green-100 text-green-700",
                },
                {
                  from: "Poznan",
                  to: "Berlin",
                  duration: "3 hr 45 m",
                  departure: "05/12/2025, 8:51 AM",
                  status: "En route",
                  color: "bg-blue-100 text-blue-700",
                },
                {
                  from: "Poznan",
                  to: "Berlin",
                  duration: "3 hr 45 m",
                  departure: "05/12/2025, 8:51 AM",
                  status: "Planned",
                  color: "bg-yellow-100 text-yellow-700",
                },
                {
                  from: "Poznan",
                  to: "Berlin",
                  duration: "3 hr 45 m",
                  departure: "05/12/2025, 8:51 AM",
                  status: "Canceled",
                  color: "bg-gray-200 text-gray-700",
                },
              ].map((trip, i) => (
                <tr key={i} className="border-t">
                  <td className="p-2">{trip.from}</td>
                  <td className="p-2">{trip.to}</td>
                  <td className="p-2">{trip.duration}</td>
                  <td className="p-2">{trip.departure}</td>
                  <td className="p-2">
                    <span
                      className={`rounded-full px-2 py-1 text-xs font-medium ${trip.color}`}
                    >
                      {trip.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Current vehicle */}
        <div className="rounded-xl bg-white p-4 shadow">
          <h2 className="mb-4 text-lg font-semibold text-brand-primary-dark">
            Current vehicle
          </h2>
          <div className="mb-4 flex justify-center">
            <Bus className="h-20 w-32 text-brand-primary" />
          </div>
          <ul className="space-y-1 text-sm">
            <li>
              <span className="text-gray-500">Fuel type:</span> Diesel 8l/100km
            </li>
            <li>
              <span className="text-gray-500">Length:</span> 12.5 meters
            </li>
            <li>
              <span className="text-gray-500">License plate:</span> WA-12345-AB
            </li>
            <li>
              <span className="text-gray-500">Service due:</span> 09/15/2025
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
