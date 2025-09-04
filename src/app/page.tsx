
"use client";
import Link from "next/link";
import { Truck, Users } from "lucide-react"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source
          src="/videos/Hailuo_Video_generate me a very good video _416394436161486855.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Colored overlay to cover watermark at the bottom with faded top */}
      <div
        className="absolute bottom-0 left-0 w-full h-[15%] z-10"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, #626F47 60%)",
        }}
      ></div>

      {/* Existing overlay for the rest of the video */}
      <div className="absolute inset-0 bg-[#626F47] opacity-60 z-10"></div>

      {/* Content */}
      <div className="relative isolate px-6 pt-14 lg:px-8 z-20">
        <div className="mx-auto max-w-3xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-[#FEFAE0] sm:text-6xl md:text-4xl animate-fade-in-up">
              Fast and Reliable Delivery with Tad Xpress
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-200 sm:text-xl animate-fade-in-up animation-delay-200">
              Request a rider to pick up and deliver your items securely
              anywhere in the city. Join as a rider or get started with
              deliveries today!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 my-6">
              <Link
                href="/become-rider"
                className="group relative px-8 py-4 bg-[#FFCF50] text-[#626F47] font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:bg-[#FFCF50]/90 min-w-[200px] border border-[#FFCF50]/20 hover:border-[#FFCF50]/40"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Become a Rider
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#FFCF50]/80 to-[#FFCF50] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              </Link>
              <Link
                href="/get-rider"
                className="group relative px-8 py-4 bg-[#FEFAE0] text-[#626F47] font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 border-[#FEFAE0] hover:bg-transparent hover:text-[#FEFAE0] min-w-[200px]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Truck className="w-5 h-5" />
                  Get a Rider
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx global>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
      `}</style>
    </main>
  );
}
