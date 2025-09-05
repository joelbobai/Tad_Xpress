"use client";
import { Clock, MapPin, Star, TrendingUp, Bus, ArrowUpRight } from "lucide-react";

export default function Dashboard() {
  const blueDays = [2, 10, 23, 29];
  const greenDays = [4, 15, 32];
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
              <h2 className="text-lg font-semibold text-[#111827]">Calendar</h2>
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#EEF2FF]">
                <ArrowUpRight className="h-4 w-4 text-[#5D5FEF]" />
              </div>
            </div>
            <div className="mb-2 grid grid-cols-7 gap-2 text-center text-xs text-[#9CA3AF]">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                <span key={day}>{day}</span>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-2">
              {Array.from({ length: 35 }).map((_, i) => (
                <div
                  key={i}
                  className={`aspect-square rounded-md ${
                    blueDays.includes(i)
                      ? 'bg-[#5D5FEF]'
                      : greenDays.includes(i)
                        ? 'bg-[#7AC74F]'
                        : 'bg-[#E5E7EB]'
                  }`}
                ></div>
              ))}
            </div>
          </div>

        {/* Rating */}
        <div className="rounded-xl bg-white p-4 shadow">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-sm font-medium text-[#111827]">Rating</h2>
              <p className="text-xs text-[#6B7280]">Based on 68 reviews</p>
            </div>
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#EEF2FF]">
              <ArrowUpRight className="h-4 w-4 text-[#5D5FEF]" />
            </div>
          </div>
          <div className="mt-2 flex items-center gap-2">
            <span className="text-4xl font-semibold text-[#111827]">4.8</span>
            <Star className="h-6 w-6 text-[#7AC74F]" fill="currentColor" />
          </div>
        </div>
        </div>


        {/* Current trip */}
        <div className="rounded-xl bg-white p-4 shadow">

          <h2 className="mb-4 text-lg font-semibold text-[#4A5535]">Current trip</h2>
          <ul className="relative ml-4 space-y-6 text-sm before:absolute before:left-0 before:top-0 before:h-full before:w-0.5 before:bg-[#8B9A6B] before:content-['']">
            <li className="relative pl-6">
              <span className="absolute -left-1.5 top-1 h-3 w-3 rounded-full bg-[#626F47]"></span>
              <div className="flex justify-between gap-4">

                <div className="max-w-[70%]">
                  <p className="text-gray-500">Departure</p>
                  <p className="font-medium">Poznan, Bus Station</p>
                </div>
                <p className="text-xs text-gray-400">12:45 AM</p>

              </div>
            </li>
            <li className="relative pl-6">
              <span className="absolute -left-1.5 top-1 h-3 w-3 rounded-full bg-[#FFCF50]"></span>
              <div className="flex justify-between gap-4">

                <div className="max-w-[70%]">
                  <p className="text-gray-500">Stop</p>
                  <p className="font-medium">Berlin Airport BER, T 1/2</p>
                </div>
                <p className="text-xs text-gray-400">4:05 AM</p>

              </div>
            </li>
            <li className="relative pl-6">
              <span className="absolute -left-1.5 top-1 h-3 w-3 rounded-full bg-[#4A5535]"></span>
              <div className="flex justify-between gap-4">

                <div className="max-w-[70%]">
                  <p className="text-gray-500">Arrival</p>
                  <p className="font-medium">Berlin Südkreuz</p>
                </div>
                <p className="text-xs text-gray-400">4:30 AM</p>

              </div>
            </li>
          </ul>
          <button className="mt-6 w-full rounded-lg bg-[#8B9A6B] py-2 text-sm font-medium text-[#626F47]">

            Duration: 3 hours 45 min
          </button>

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
