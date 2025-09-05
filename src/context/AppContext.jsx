"use client";
import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

const defaultState = {
  users: [
    {
      id: 1,
      name: "Demo User",
      email: "user@example.com",
      password: "password",
    },
  ],
  riders: [
    {
      id: 1,
      name: "Demo Rider",
      email: "rider@example.com",
      password: "password",
      phone: "",
    },
  ],
  admin: { email: "admin@example.com", password: "admin123" },
  rides: [
    {
      id: 1,
      location: "Garki, Abuja",
      available: "24/7",
      time: null,
      postedById: null,
    },
  ],
};

export function AppProvider({ children }) {
  const [state, setState] = useState(defaultState);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("app-state");
    const storedUser = localStorage.getItem("current-user");
    if (stored) setState(JSON.parse(stored));
    if (storedUser) setCurrentUser(JSON.parse(storedUser));
  }, []);

  useEffect(() => {
    localStorage.setItem("app-state", JSON.stringify(state));
  }, [state]);

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem("current-user", JSON.stringify(currentUser));
    } else {
      localStorage.removeItem("current-user");
    }
  }, [currentUser]);

  const loginUser = (email, password, role) => {
    if (role === "admin") {
      if (
        email === state.admin.email &&
        password === state.admin.password
      ) {
        setCurrentUser({ role: "admin", email });
        return true;
      }
      return false;
    }
    const list = role === "rider" ? state.riders : state.users;
    const found = list.find(
      (u) => u.email === email && u.password === password
    );
    if (found) {
      setCurrentUser({ ...found, role });
      return true;
    }
    return false;
  };

  const logout = () => setCurrentUser(null);

  const signupRider = ({ name, email, password, phone }) => {
    const newRider = {
      id: Date.now(),
      name,
      email,
      password,
      phone,
    };
    setState((s) => ({ ...s, riders: [...s.riders, newRider] }));
  };

  const addRide = ({ location, time, postedById }) => {
    const ride = {
      id: Date.now(),
      location,
      time: time || null,
      available: time ? "Scheduled" : "24/7",
      postedById: postedById || null,
    };
    setState((s) => ({ ...s, rides: [ride, ...s.rides] }));
  };

  const removeRide = (id) => {
    setState((s) => ({ ...s, rides: s.rides.filter((r) => r.id !== id) }));
  };

  const updateProfile = (role, idOrEmail, patch) => {
    const key = role === "rider" ? "riders" : "users";
    setState((s) => ({
      ...s,
      [key]: s[key].map((u) => {
        if (u.id === idOrEmail || u.email === idOrEmail) {
          const updated = { ...u, ...patch };
          if (currentUser && currentUser.id === u.id) {
            setCurrentUser({ ...currentUser, ...patch });
          }
          return updated;
        }
        return u;
      }),
    }));
  };

  const whatsappHref = () => "https://wa.me/2348145765479";

  const value = {
    ...state,
    currentUser,
    loginUser,
    logout,
    signupRider,
    addRide,
    removeRide,
    updateProfile,
    whatsappHref,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export const useApp = () => useContext(AppContext);
