"use client";
import Link from "next/link";
import {
  Truck,
  Package,
  Clock,
  Shield,
  MapPin,
  Smartphone,
  Star,
  Zap,
  Users,
  Heart,
  CheckCircle,
  ArrowRight,
  Globe,
  Award,
  Headphones,
  TrendingUp,
} from "lucide-react"

export default function Services() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#FEFAE0]">
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

      <div className="absolute inset-0 bg-gradient-to-b from-[#626F47]/85 via-[#626F47]/65 to-[#626F47]/95 z-10"></div>

      {/* Floating particles */}
      <div className="absolute inset-0 z-15">
        <div className="absolute top-20 left-10 w-2 h-2 bg-[#FFCF50] rounded-full animate-float opacity-70"></div>
        <div
          className="absolute top-32 right-32 w-1 h-1 bg-[#A4B465] rounded-full animate-float opacity-50"
          style={{ animationDelay: "0.8s" }}
        ></div>
        <div
          className="absolute top-40 right-20 w-3 h-3 bg-[#A4B465] rounded-full animate-float opacity-45"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-60 left-32 w-1 h-1 bg-[#FFCF50] rounded-full animate-float opacity-60"
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div
          className="absolute bottom-40 left-20 w-2 h-2 bg-[#FFCF50] rounded-full animate-float opacity-55"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-60 right-10 w-3 h-3 bg-[#A4B465] rounded-full animate-float opacity-35"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute bottom-32 right-40 w-1 h-1 bg-[#FFCF50] rounded-full animate-float opacity-65"
          style={{ animationDelay: "2.5s" }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative isolate px-6 pt-14 lg:px-8 z-20">
        {/* Hero Section */}
        <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 bg-[#FFCF50]/25 rounded-full border border-[#FFCF50]/40 backdrop-blur-sm hover:bg-[#FFCF50]/30 transition-all duration-300">
              <Package className="w-5 h-5 text-[#FFCF50] animate-pulse" />
              <span className="text-[#FFCF50] font-medium text-sm">
                Complete Delivery Solutions
              </span>
            </div>
            <h1 className="text-5xl font-extrabold tracking-tight text-[#FEFAE0] sm:text-7xl md:text-6xl animate-slide-in-left text-balance leading-tight">
              Our Services
            </h1>
            <p className="mt-8 text-xl leading-8 text-[#FEFAE0]/95 sm:text-2xl animate-slide-in-right animation-delay-200 max-w-3xl mx-auto text-pretty font-medium">
              From same-day delivery to enterprise logistics solutions, we
              provide comprehensive services tailored to meet every delivery
              need in your city.
            </p>
            <div className="mt-12 flex items-center justify-center gap-8 animate-slide-in-left animation-delay-400">
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold text-[#FFCF50] group-hover:text-[#FFCF50]/80 transition-colors">
                  24/7
                </div>
                <div className="text-sm text-[#FEFAE0]/85 font-medium">
                  Available
                </div>
              </div>
              <div className="w-px h-12 bg-[#FEFAE0]/40"></div>
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold text-[#FFCF50] group-hover:text-[#FFCF50]/80 transition-colors">
                  30min
                </div>
                <div className="text-sm text-[#FEFAE0]/85 font-medium">
                  Avg Pickup
                </div>
              </div>
              <div className="w-px h-12 bg-[#FEFAE0]/40"></div>
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold text-[#FFCF50] group-hover:text-[#FFCF50]/80 transition-colors">
                  99.8%
                </div>
                <div className="text-sm text-[#FEFAE0]/85 font-medium">
                  Success Rate
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Services Grid */}
<div className="bg-[#FEFAE0] py-24 relative rounded-2xl overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-r from-[#FEFAE0] via-[#A4B465]/10 to-[#FEFAE0] rounded-2xl"></div>
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
    <div className="text-center mb-16">
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFCF50]/10 rounded-full border border-[#FFCF50]/20 mb-6">
        <Zap className="w-5 h-5 text-[#FFCF50]" />
        <span className="text-[#FFCF50] font-medium text-sm">
          Service Categories
        </span>
      </div>
      <h2 className="text-4xl font-extrabold text-[#626F47] mb-6 text-balance">
        Delivery Solutions for Everyone
      </h2>
      <p className="text-xl text-[#626F47]/80 max-w-4xl mx-auto leading-relaxed text-pretty">
        Whether you`re an individual, small business, or enterprise, we
        have the perfect delivery solution to meet your unique needs.
      </p>
    </div>

    <div className="max-w-2xl mx-auto mb-16">
      <div className="bg-gradient-to-br from-white to-[#A4B465]/5 p-8 rounded-2xl shadow-xl border border-[#A4B465]/20 hover:shadow-2xl transition-all duration-300 group">
        <div className="w-16 h-16 bg-[#FFCF50]/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#FFCF50]/20 transition-colors">
          <Package className="w-8 h-8 text-[#FFCF50]" />
        </div>
        <h3 className="text-2xl font-bold text-[#626F47] mb-4">
          Personal Delivery
        </h3>
        <p className="text-[#626F47]/70 text-lg leading-relaxed mb-6">
          Send packages, documents, gifts, or personal items anywhere in
          the city with our reliable personal delivery service.
        </p>
        <div className="space-y-3 mb-8">
          <div className="flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-[#FFCF50]" />
            <span className="text-sm text-[#626F47]/70">
              Same-day & next-day delivery
            </span>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-[#FFCF50]" />
            <span className="text-sm text-[#626F47]/70">
              Secure handling & insurance
            </span>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-[#FFCF50]" />
            <span className="text-sm text-[#626F47]/70">
              Flexible pickup & delivery times
            </span>
          </div>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[#A4B465]/20 group hover:border-[#FFCF50]/30">
        <div className="w-12 h-12 bg-[#FFCF50]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#FFCF50]/20 transition-colors">
          <Clock className="w-6 h-6 text-[#FFCF50]" />
        </div>
        <h3 className="text-xl font-semibold text-[#626F47] mb-4">
          Express Delivery
        </h3>
        <p className="text-[#626F47]/70 leading-relaxed">
          Need it fast? Our express service guarantees delivery within 2
          hours anywhere in the city with priority handling.
        </p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[#A4B465]/20 group hover:border-[#FFCF50]/30">
        <div className="w-12 h-12 bg-[#FFCF50]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#FFCF50]/20 transition-colors">
          <Shield className="w-6 h-6 text-[#FFCF50]" />
        </div>
        <h3 className="text-xl font-semibold text-[#626F47] mb-4">
          Secure Transport
        </h3>
        <p className="text-[#626F47]/70 leading-relaxed">
          High-value items, documents, and fragile packages receive
          special handling with full insurance coverage.
        </p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[#A4B465]/20 group hover:border-[#FFCF50]/30">
        <div className="w-12 h-12 bg-[#FFCF50]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#FFCF50]/20 transition-colors">
          <MapPin className="w-6 h-6 text-[#FFCF50]" />
        </div>
        <h3 className="text-xl font-semibold text-[#626F47] mb-4">
          Wide Coverage
        </h3>
        <p className="text-[#626F47]/70 leading-relaxed">
          We deliver across all major areas in the city with expanding
          coverage to suburban and rural locations.
        </p>
      </div>
    </div>
  </div>
</div>

        {/* Specialized Services */}
        <div className="py-24 bg-[#A4B465]/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#626F47]/10 rounded-full border border-[#626F47]/20 mb-6">
                <Star className="w-5 h-5 text-[#FEFAE0] " />
                <span className="text-[#FEFAE0]  font-medium text-sm">
                  Specialized Services
                </span>
              </div>
              <h2 className="text-4xl font-extrabold text-[#FFCF50] mb-6 text-balance">
                Beyond Standard Delivery
              </h2>
              <p className="text-xl text-[#FEFAE0]  max-w-4xl mx-auto leading-relaxed text-pretty">
                We offer specialized services for unique delivery requirements
                and industry-specific needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-[#A4B465]/20 hover:shadow-xl transition-all duration-300 group">
                <div className="w-12 h-12 bg-[#FFCF50]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#FFCF50]/20 transition-colors">
                  <Heart className="w-6 h-6 text-[#FFCF50]" />
                </div>
                <h3 className="text-lg font-semibold text-[#626F47] mb-3">
                  Medical Delivery
                </h3>
                <p className="text-[#626F47]/70 text-sm leading-relaxed">
                  Temperature-controlled transport for medications, lab samples,
                  and medical supplies with certified handling.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-[#A4B465]/20 hover:shadow-xl transition-all duration-300 group">
                <div className="w-12 h-12 bg-[#626F47]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#626F47]/20 transition-colors">
                  <Truck className="w-6 h-6 text-[#626F47]" />
                </div>
                <h3 className="text-lg font-semibold text-[#626F47] mb-3">
                  Food Delivery
                </h3>
                <p className="text-[#626F47]/70 text-sm leading-relaxed">
                  Hot food delivery with insulated bags and temperature
                  monitoring to ensure freshness and quality.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-[#A4B465]/20 hover:shadow-xl transition-all duration-300 group">
                <div className="w-12 h-12 bg-[#FFCF50]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#FFCF50]/20 transition-colors">
                  <Globe className="w-6 h-6 text-[#FFCF50]" />
                </div>
                <h3 className="text-lg font-semibold text-[#626F47] mb-3">
                  International
                </h3>
                <p className="text-[#626F47]/70 text-sm leading-relaxed">
                  Cross-border delivery services with customs handling and
                  international shipping partnerships.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-[#A4B465]/20 hover:shadow-xl transition-all duration-300 group">
                <div className="w-12 h-12 bg-[#626F47]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#626F47]/20 transition-colors">
                  <Smartphone className="w-6 h-6 text-[#626F47]" />
                </div>
                <h3 className="text-lg font-semibold text-[#626F47] mb-3">
                  Tech Support
                </h3>
                <p className="text-[#626F47]/70 text-sm leading-relaxed">
                  Device pickup and delivery for repairs, installations, and
                  tech support services with expert handling.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="py-24 bg-[#FEFAE0] rounded-2xl">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFCF50]/10 rounded-full border border-[#FFCF50]/20 mb-6">
                <Zap className="w-5 h-5 text-[#FFCF50]" />
                <span className="text-[#FFCF50] font-medium text-sm">
                  Simple Process
                </span>
              </div>
              <h2 className="text-4xl font-extrabold text-[#626F47] mb-6 text-balance">
                How Tad Xpress Works
              </h2>
              <p className="text-xl text-[#626F47]/80 max-w-4xl mx-auto leading-relaxed text-pretty">
                Getting your items delivered is as easy as 1-2-3. Our
                streamlined process ensures quick, reliable service every time.
              </p>
            </div>

            <div className="relative">
              {/* Process line */}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* <div className="text-center relative">
                  <div className="w-16 h-16 bg-[#FFCF50] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg relative z-10">
                    <span className="text-2xl font-bold text-[#626F47]">1</span>
                  </div>
                  <h3 className="text-xl font-semibold text-[#626F47] mb-4">Book Online</h3>
                  <p className="text-[#626F47]/70 leading-relaxed">
                    Use our app or website to schedule a pickup. Enter pickup and delivery addresses, select service
                    type, and choose your preferred time slot.
                  </p>
                </div> */}

                <div className="text-center relative">
                  <div className="w-16 h-16 bg-[#626F47] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg relative z-10">
                    <span className="text-2xl font-bold text-[#FEFAE0]">1</span>
                  </div>
                  <h3 className="text-xl font-semibold text-[#626F47] mb-4">
                    We Pickup
                  </h3>
                  <p className="text-[#626F47]/70 leading-relaxed">
                    Our professional rider arrives at your location, securely
                    packages your items, and provides you with a tracking number
                    for real-time updates.
                  </p>
                </div>

                <div className="text-center relative">
                  <div className="w-16 h-16 bg-[#A4B465] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg relative z-10">
                    <span className="text-2xl font-bold text-[#FEFAE0]">2</span>
                  </div>
                  <h3 className="text-xl font-semibold text-[#626F47] mb-4">
                    Fast Delivery
                  </h3>
                  <p className="text-[#626F47]/70 leading-relaxed">
                    Track your package in real-time as our rider delivers it
                    safely to the destination. Get instant notifications upon
                    successful delivery.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="py-24 bg-[#A4B465]/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#626F47]/10 rounded-full border border-[#626F47]/20 mb-6">
                <Award className="w-5 h-5 text-[#FEFAE0]" />
                <span className="text-[#FEFAE0]  font-medium text-sm">
                  Why Choose Us
                </span>
              </div>
              <h2 className="text-4xl font-extrabold text-[#FFCF50] mb-6 text-balance">
                The Tad Xpress Advantage
              </h2>
              <p className="text-xl text-[#FEFAE0] max-w-4xl mx-auto leading-relaxed text-pretty">
                Experience the difference with our commitment to excellence,
                innovation, and customer satisfaction.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg border border-[#A4B465]/20 hover:shadow-xl transition-all duration-300 group">
                <div className="w-12 h-12 bg-[#FFCF50]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#FFCF50]/20 transition-colors">
                  <TrendingUp className="w-6 h-6 text-[#FFCF50]" />
                </div>
                <h3 className="text-xl font-semibold text-[#626F47] mb-4">
                  99.8% Success Rate
                </h3>
                <p className="text-[#626F47]/70 leading-relaxed">
                  Our exceptional track record speaks for itself. We deliver on
                  our promises with industry-leading reliability and
                  consistency.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border border-[#A4B465]/20 hover:shadow-xl transition-all duration-300 group">
                <div className="w-12 h-12 bg-[#626F47]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#626F47]/20 transition-colors">
                  <Headphones className="w-6 h-6 text-[#626F47]" />
                </div>
                <h3 className="text-xl font-semibold text-[#626F47] mb-4">
                  24/7 Customer Support
                </h3>
                <p className="text-[#626F47]/70 leading-relaxed">
                  Our dedicated support team is always available to assist you,
                  ensuring smooth operations around the clock.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border border-[#A4B465]/20 hover:shadow-xl transition-all duration-300 group">
                <div className="w-12 h-12 bg-[#FFCF50]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#FFCF50]/20 transition-colors">
                  <Shield className="w-6 h-6 text-[#FFCF50]" />
                </div>
                <h3 className="text-xl font-semibold text-[#626F47] mb-4">
                  Fully Insured & Secure
                </h3>
                <p className="text-[#626F47]/70 leading-relaxed">
                  Every delivery is fully insured with comprehensive coverage,
                  giving you complete peace of mind for your valuable items.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-[#626F47] via-[#626F47]/90 to-[#626F47] py-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#FFCF50]/10 to-transparent"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,207,80,0.1),transparent_50%)]"></div>
          </div>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative">
            <h2 className="text-4xl font-extrabold text-[#FEFAE0] mb-6 text-balance leading-tight">
              Ready to Experience Premium Delivery?
            </h2>
            <p className="text-xl text-[#FEFAE0]/95 max-w-3xl mx-auto mb-12 text-pretty font-medium leading-relaxed">
              Join thousands of satisfied customers who trust Tad Xpress for
              their delivery needs. Fast, reliable, and secure - every time.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href="/book-delivery"
                className="group relative px-8 py-4 bg-[#FFCF50] text-[#626F47] font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:bg-[#FFCF50]/90 min-w-[200px] border border-[#FFCF50]/20 hover:border-[#FFCF50]/40"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Package className="w-5 h-5" />
                  Book Delivery
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#FFCF50]/80 to-[#FFCF50] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              </Link>
              <Link
                href="/become-rider"
                className="group relative px-8 py-4 bg-[#FEFAE0] text-[#626F47] font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 border-[#FEFAE0] hover:bg-transparent hover:text-[#FEFAE0] min-w-[200px]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Join as Rider
                </span>
              </Link>
            </div>

            <div className="mt-16 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-[#FEFAE0]/80">
              <div className="flex items-center gap-2 hover:text-[#FEFAE0] transition-colors duration-300 group">
                <Shield className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm font-medium">Fully Insured</span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-[#FEFAE0]/30"></div>
              <div className="flex items-center gap-2 hover:text-[#FEFAE0] transition-colors duration-300 group">
                <Clock className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm font-medium">24/7 Support</span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-[#FEFAE0]/30"></div>
              <div className="flex items-center gap-2 hover:text-[#FEFAE0] transition-colors duration-300 group">
                <Star className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm font-medium">4.9★ Rated</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
