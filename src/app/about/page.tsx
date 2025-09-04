"use client"
import Link from "next/link"
import { Truck, Users, Shield, Clock, Star, Heart, Award, Zap } from "lucide-react"

export default function About() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#FEFAE0]">
      {/* Video Background */}
      <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0">
        <source src="/videos/Hailuo_Video_generate me a very good video _416394436161486855.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-[#626F47]/85 via-[#626F47]/65 to-[#626F47]/95 z-10"></div>

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
        {/* Hero Section - Enhanced */}
        <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 bg-[#FFCF50]/25 rounded-full border border-[#FFCF50]/40 backdrop-blur-sm hover:bg-[#FFCF50]/30 transition-all duration-300">
              <Truck className="w-5 h-5 text-[#FFCF50] animate-pulse" />
              <span className="text-[#FFCF50] font-medium text-sm">Delivering Excellence Since 2020</span>
            </div>
            <h1 className="text-5xl font-extrabold tracking-tight text-[#FEFAE0] sm:text-7xl md:text-6xl animate-slide-in-left text-balance leading-tight">
              About Tad Xpress
            </h1>
            <p className="mt-8 text-xl leading-8 text-[#FEFAE0]/95 sm:text-2xl animate-slide-in-right animation-delay-200 max-w-3xl mx-auto text-pretty font-medium">
              Your trusted partner for fast, reliable, and secure delivery services across the city. We connect
              communities through seamless logistics and exceptional service.
            </p>
            <div className="mt-12 flex items-center justify-center gap-8 animate-slide-in-left animation-delay-400">
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold text-[#FFCF50] group-hover:text-[#FFCF50]/80 transition-colors">
                  50K+
                </div>
                <div className="text-sm text-[#FEFAE0]/85 font-medium">Deliveries</div>
              </div>
              <div className="w-px h-12 bg-[#FEFAE0]/40"></div>
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold text-[#FFCF50] group-hover:text-[#FFCF50]/80 transition-colors">
                  1000+
                </div>
                <div className="text-sm text-[#FEFAE0]/85 font-medium">Riders</div>
              </div>
              <div className="w-px h-12 bg-[#FEFAE0]/40"></div>
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold text-[#FFCF50] group-hover:text-[#FFCF50]/80 transition-colors">
                  4.9★
                </div>
                <div className="text-sm text-[#FEFAE0]/85 font-medium">Rating</div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Section - Redesigned */}
        <div className="bg-[#FEFAE0] py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#FEFAE0] via-[#A4B465]/10 to-[#FEFAE0]"></div>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFCF50]/10 rounded-full border border-[#FFCF50]/20 mb-6">
                <Heart className="w-5 h-5 text-[#FFCF50]" />
                <span className="text-[#FFCF50] font-medium text-sm">Our Purpose</span>
              </div>
              <h2 className="text-4xl font-extrabold text-[#626F47] mb-6 text-balance">Redefining Urban Delivery</h2>
              <p className="text-xl text-[#626F47]/80 max-w-4xl mx-auto leading-relaxed text-pretty">
                At Tad Xpress, we believe that every delivery is more than just moving packages from point A to point B.
                Its about connecting people, enabling businesses, and building stronger communities through reliable
                service and innovative technology.
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl shadow-[#eeeace] transition-all duration-300 border border-[#A4B465]/20 group hover:border-[#FFCF50]/30">
                <div className="w-12 h-12 bg-[#FFCF50]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#FFCF50]/20 transition-colors">
                  <Shield className="w-6 h-6 text-[#FFCF50]" />
                </div>
                <h3 className="text-xl font-semibold text-[#626F47] mb-4">Security First</h3>
                <p className="text-[#626F47]/70 leading-relaxed">
                  Every package is handled with the utmost care and security. Our advanced tracking and verification
                  systems ensure your items are always safe.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl shadow-[#eeeace] transition-all duration-300 border border-[#A4B465]/20 group hover:border-[#FFCF50]/30">
                <div className="w-12 h-12 bg-[#FFCF50]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#FFCF50]/20 transition-colors">
                  <Clock className="w-6 h-6 text-[#FFCF50]" />
                </div>
                <h3 className="text-xl font-semibold text-[#626F47] mb-4">Lightning Fast</h3>
                <p className="text-[#626F47]/70 leading-relaxed">
                  Time is precious. Our optimized routing and dedicated rider network ensures your deliveries arrive
                  exactly when you need them.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl shadow-[#eeeace] transition-all duration-300 border border-[#A4B465]/20 group hover:border-[#FFCF50]/30">
                <div className="w-12 h-12 bg-[#FFCF50]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#FFCF50]/20 transition-colors">
                  <Users className="w-6 h-6 text-[#FFCF50]" />
                </div>
                <h3 className="text-xl font-semibold text-[#626F47] mb-4">Community Driven</h3>
                <p className="text-[#626F47]/70 leading-relaxed">
                  We`re more than a delivery service - we`re part of your community, supporting local businesses and
                  connecting neighbors.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Story Timeline */}
        <div className="py-24 bg-[#A4B465]/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#626F47]/10 rounded-full border border-[#626F47]/20 mb-6">
                <Award className="w-5 h-5 text-[#FFCF50]" />
                <span className="text-[#FEFAE0] font-medium text-sm">Our Journey</span>
              </div>
              <h2 className="text-4xl font-extrabold text-[#FFCF50] mb-6 text-balance">Built on Innovation & Trust</h2>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-[#626F47] via-[#FFCF50] to-[#626F47]"></div>

              <div className="space-y-16">
                {/* Timeline item 1 */}
                <div className="relative flex items-center">
                  <div className="flex-1 pr-8 text-right">
                    <div className="bg-white p-6 rounded-xl shadow-lg border border-[#A4B465]/20">
                      <h3 className="text-xl font-semibold text-[#626F47] mb-2">2020 - The Beginning</h3>
                      <p className="text-[#626F47]/70">
                        Founded with a vision to revolutionize urban delivery through technology and exceptional
                        service.
                      </p>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-[#626F47] rounded-full border-4 border-[#FEFAE0] shadow-lg z-10"></div>
                  <div className="flex-1 pl-8"></div>
                </div>

                {/* Timeline item 2 */}
                <div className="relative flex items-center">
                  <div className="flex-1 pr-8"></div>
                  <div className="w-4 h-4 bg-[#FFCF50] rounded-full border-4 border-[#FEFAE0] shadow-lg z-10"></div>
                  <div className="flex-1 pl-8">
                    <div className="bg-white p-6 rounded-xl shadow-lg border border-[#A4B465]/20">
                      <h3 className="text-xl font-semibold text-[#626F47] mb-2">2022 - Rapid Growth</h3>
                      <p className="text-[#626F47]/70">
                        Expanded to serve 10+ cities with over 500 dedicated riders and 25,000+ successful deliveries.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Timeline item 3 */}
                <div className="relative flex items-center">
                  <div className="flex-1 pr-8 text-right">
                    <div className="bg-white p-6 rounded-xl shadow-lg border border-[#A4B465]/20">
                      <h3 className="text-xl font-semibold text-[#626F47] mb-2">2024 - Innovation Leader</h3>
                      <p className="text-[#626F47]/70">
                        Launched AI-powered routing and became the most trusted delivery platform with 4.9★ rating.
                      </p>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-[#626F47] rounded-full border-4 border-[#FEFAE0] shadow-lg z-10"></div>
                  <div className="flex-1 pl-8"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Features Section */}
        <div className="py-24 bg-[#FEFAE0] rounded-2xl">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFCF50]/10 rounded-full border border-[#FFCF50]/20 mb-6">
                <Zap className="w-5 h-5 text-[#FFCF50]" />
                <span className="text-[#FFCF50] font-medium text-sm">What We Offer</span>
              </div>
              <h2 className="text-4xl font-extrabold text-[#626F47] mb-6 text-balance">Two Ways to Connect</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-gradient-to-br from-white to-[#A4B465]/5 p-8 rounded-2xl shadow-xl border border-[#A4B465]/20 hover:shadow-2xl transition-all duration-300 group">
                <div className="w-16 h-16 bg-[#FFCF50]/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#FFCF50]/20 transition-colors animate-pulse-glow">
                  <Truck className="w-8 h-8 text-[#FFCF50]" />
                </div>
                <h3 className="text-2xl font-bold text-[#626F47] mb-4">Request a Rider</h3>
                <p className="text-[#626F47]/70 text-lg leading-relaxed mb-8">
                  Need to send a package? Our network of professional riders is ready to pick up and deliver your items
                  securely anywhere in the city. Real-time tracking, instant notifications, and guaranteed delivery
                  times.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#FFCF50] rounded-full"></div>
                    <span className="text-sm text-[#626F47]/70">Same-day delivery available</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#FFCF50] rounded-full"></div>
                    <span className="text-sm text-[#626F47]/70">Real-time GPS tracking</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#FFCF50] rounded-full"></div>
                    <span className="text-sm text-[#626F47]/70">Secure handling guarantee</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-white to-[#A4B465]/5 p-8 rounded-2xl shadow-xl border border-[#A4B465]/20 hover:shadow-2xl transition-all duration-300 group">
                <div className="w-16 h-16 bg-[#626F47]/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#626F47]/20 transition-colors animate-pulse-glow">
                  <Users className="w-8 h-8 text-[#626F47]" />
                </div>
                <h3 className="text-2xl font-bold text-[#626F47] mb-4">Join as a Rider</h3>
                <p className="text-[#626F47]/70 text-lg leading-relaxed mb-8">
                  Become part of the Tad Xpress family! Enjoy flexible working hours, competitive earnings, and be part
                  of a community that values your contribution. Start earning while making a difference in your city.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#626F47] rounded-full"></div>
                    <span className="text-sm text-[#626F47]/70">Flexible schedule</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#626F47] rounded-full"></div>
                    <span className="text-sm text-[#626F47]/70">Competitive pay rates</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#626F47] rounded-full"></div>
                    <span className="text-sm text-[#626F47]/70">Weekly payouts</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="py-24 bg-[#A4B465]/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFCF50]/10 rounded-full border border-[#FFCF50]/20 mb-6">
                <Star className="w-5 h-5 text-[#FFCF50]" />
                <span className="text-[#FFCF50] font-medium text-sm">Customer Love</span>
              </div>
              <h2 className="text-4xl font-extrabold text-[#ffcf50] mb-6 text-balance">What Our Community Says</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-[#A4B465]/20">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FFCF50] text-[#FFCF50]" />
                  ))}
                </div>
                <p className="text-[#626F47]/70 mb-4 italic">
                  Tad Xpress has been a game-changer for my business. Fast, reliable, and the customer service is
                  exceptional!
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#FFCF50]/20 rounded-full flex items-center justify-center">
                    <span className="text-[#FFCF50] font-semibold text-sm">SM</span>
                  </div>
                  <div>
                    <div className="font-semibold text-[#626F47] text-sm">Sarah Martinez</div>
                    <div className="text-[#626F47]/60 text-xs">Business Owner</div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-[#A4B465]/20">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FFCF50] text-[#FFCF50]" />
                  ))}
                </div>
                <p className="text-[#626F47]/70 mb-4 italic">
                  As a rider, I love the flexibility and the supportive community. Great way to earn extra income!
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#626F47]/20 rounded-full flex items-center justify-center">
                    <span className="text-[#626F47] font-semibold text-sm">MJ</span>
                  </div>
                  <div>
                    <div className="font-semibold text-[#626F47] text-sm">Mike Johnson</div>
                    <div className="text-[#626F47]/60 text-xs">Tad Xpress Rider</div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-[#A4B465]/20">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FFCF50] text-[#FFCF50]" />
                  ))}
                </div>
                <p className="text-[#626F47]/70 mb-4 italic">
                  Never had a delivery service this reliable. The app is intuitive and tracking is spot-on!
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#FFCF50]/20 rounded-full flex items-center justify-center">
                    <span className="text-[#FFCF50] font-semibold text-sm">AL</span>
                  </div>
                  <div>
                    <div className="font-semibold text-[#626F47] text-sm">Anna Lee</div>
                    <div className="text-[#626F47]/60 text-xs">Regular Customer</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Call to Action */}
        <div className="bg-gradient-to-r from-[#626F47] via-[#626F47]/90 to-[#626F47] py-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#FFCF50]/10 to-transparent"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,207,80,0.1),transparent_50%)]"></div>
          </div>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative">
            <h2 className="text-4xl font-extrabold text-[#FEFAE0] mb-6 text-balance leading-tight">
              Ready to Experience the Difference?
            </h2>
            <p className="text-xl text-[#FEFAE0]/95 max-w-3xl mx-auto mb-12 text-pretty font-medium leading-relaxed">
              Join thousands of satisfied customers and riders who trust Tad Xpress for their delivery needs. Start your
              journey with us today!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
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
  )
}