"use client";

export interface Ride {
  location: string;
  time: string;
}

export function getRides(): Ride[] {
  if (typeof window === "undefined") return [];
  const data = localStorage.getItem("rides");
  return data ? JSON.parse(data) : [];
}

export function saveRide(ride: Ride) {
  const rides = getRides();
  rides.push(ride);
  localStorage.setItem("rides", JSON.stringify(rides));
}
