"use client"
import Link from "next/link"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  Send,
  Headphones,
  Shield,
  Star,
  Building,
  Calendar,
  HelpCircle,
} from "lucide-react"

export default function Contact() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#FEFAE0]">
      {/* Video Background */}
      <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0">
        <source src="/videos/Hailuo_Video_generate me a very good video _416394436161486855.mp4" type="video/mp4" />
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
              <MessageSquare className="w-5 h-5 text-[#FFCF50] animate-pulse" />
              <span className="text-[#FFCF50] font-medium text-sm">We`re Here to Help</span>
            </div>
            <h1 className="text-5xl font-extrabold tracking-tight text-[#FEFAE0] sm:text-7xl md:text-6xl animate-slide-in-left text-balance leading-tight">
              Contact Us
            </h1>
            <p className="mt-8 text-xl leading-8 text-[#FEFAE0]/95 sm:text-2xl animate-slide-in-right animation-delay-200 max-w-3xl mx-auto text-pretty font-medium">
              Have questions about our delivery services? Need support with an existing order? We`re here to help you
              24/7.
            </p>
            <div className="mt-12 flex items-center justify-center gap-8 animate-slide-in-left animation-delay-400">
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold text-[#FFCF50] group-hover:text-[#FFCF50]/80 transition-colors">
                  24/7
                </div>
                <div className="text-sm text-[#FEFAE0]/85 font-medium">Support</div>
              </div>
              <div className="w-px h-12 bg-[#FEFAE0]/40"></div>
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold text-[#FFCF50] group-hover:text-[#FFCF50]/80 transition-colors">
                  &lt;5min
                </div>
                <div className="text-sm text-[#FEFAE0]/85 font-medium">Response</div>
              </div>
              <div className="w-px h-12 bg-[#FEFAE0]/40"></div>
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold text-[#FFCF50] group-hover:text-[#FFCF50]/80 transition-colors">
                  100%
                </div>
                <div className="text-sm text-[#FEFAE0]/85 font-medium">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Methods */}
        <div className="bg-[#FEFAE0] py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#FEFAE0] via-[#A4B465]/10 to-[#FEFAE0]"></div>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFCF50]/10 rounded-full border border-[#FFCF50]/20 mb-6">
                <Phone className="w-5 h-5 text-[#FFCF50]" />
                <span className="text-[#FFCF50] font-medium text-sm">Get in Touch</span>
              </div>
              <h2 className="text-4xl font-extrabold text-[#626F47] mb-6 text-balance">Multiple Ways to Reach Us</h2>
              <p className="text-xl text-[#626F47]/80 max-w-4xl mx-auto leading-relaxed text-pretty">
                Choose the contact method that works best for you. Our dedicated support team is ready to assist with
                any questions or concerns.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-[#A4B465]/20 hover:shadow-xl transition-all duration-300 group text-center">
                <div className="w-12 h-12 bg-[#FFCF50]/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-[#FFCF50]/20 transition-colors">
                  <Phone className="w-6 h-6 text-[#FFCF50]" />
                </div>
                <h3 className="text-lg font-semibold text-[#626F47] mb-2">Call Us</h3>
                <p className="text-[#626F47]/70 text-sm mb-3">Speak directly with our support team</p>
                <a
                  href="tel:+1234567890"
                  className="text-[#626F47] font-semibold hover:text-[#FFCF50] transition-colors"
                >
                  +1 (234) 567-8900
                </a>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-[#A4B465]/20 hover:shadow-xl transition-all duration-300 group text-center">
                <div className="w-12 h-12 bg-[#626F47]/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-[#626F47]/20 transition-colors">
                  <Mail className="w-6 h-6 text-[#626F47]" />
                </div>
                <h3 className="text-lg font-semibold text-[#626F47] mb-2">Email Us</h3>
                <p className="text-[#626F47]/70 text-sm mb-3">Send us a detailed message</p>
                <a
                  href="mailto:support@tadxpress.com"
                  className="text-[#626F47] font-semibold hover:text-[#FFCF50] transition-colors"
                >
                  support@tadxpress.com
                </a>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-[#A4B465]/20 hover:shadow-xl transition-all duration-300 group text-center">
                <div className="w-12 h-12 bg-[#FFCF50]/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-[#FFCF50]/20 transition-colors">
                  <MessageSquare className="w-6 h-6 text-[#FFCF50]" />
                </div>
                <h3 className="text-lg font-semibold text-[#626F47] mb-2">Live Chat</h3>
                <p className="text-[#626F47]/70 text-sm mb-3">Get instant help online</p>
                <button className="text-[#626F47] font-semibold hover:text-[#FFCF50] transition-colors">
                  Start Chat
                </button>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-[#A4B465]/20 hover:shadow-xl transition-all duration-300 group text-center">
                <div className="w-12 h-12 bg-[#626F47]/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-[#626F47]/20 transition-colors">
                  <MapPin className="w-6 h-6 text-[#626F47]" />
                </div>
                <h3 className="text-lg font-semibold text-[#626F47] mb-2">Visit Us</h3>
                <p className="text-[#626F47]/70 text-sm mb-3">Come to our office</p>
                <span className="text-[#626F47] font-semibold">Downtown Plaza</span>
              </div>
            </div>

            {/* Contact Form */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-white to-[#A4B465]/5 p-8 rounded-2xl shadow-xl border border-[#A4B465]/20">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-[#626F47] mb-4">Send Us a Message</h3>
                  <p className="text-[#626F47]/70 leading-relaxed">
                    Fill out the form below and we`ll get back to you within 24 hours.
                  </p>
                </div>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-[#626F47] mb-2">Full Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-[#A4B465]/30 rounded-lg focus:ring-2 focus:ring-[#FFCF50] focus:border-[#FFCF50] transition-colors"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#626F47] mb-2">Email Address</label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 border border-[#A4B465]/30 rounded-lg focus:ring-2 focus:ring-[#FFCF50] focus:border-[#FFCF50] transition-colors"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-[#626F47] mb-2">Phone Number</label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 border border-[#A4B465]/30 rounded-lg focus:ring-2 focus:ring-[#FFCF50] focus:border-[#FFCF50] transition-colors"
                        placeholder="+1 (234) 567-8900"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#626F47] mb-2">Subject</label>
                      <select className="w-full px-4 py-3 border border-[#A4B465]/30 rounded-lg focus:ring-2 focus:ring-[#FFCF50] focus:border-[#FFCF50] transition-colors">
                        <option>General Inquiry</option>
                        <option>Delivery Support</option>
                        <option>Billing Question</option>
                        <option>Partnership</option>
                        <option>Technical Issue</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#626F47] mb-2">Message</label>
                    <textarea
                      rows={5}
                      className="w-full px-4 py-3 border border-[#A4B465]/30 rounded-lg focus:ring-2 focus:ring-[#FFCF50] focus:border-[#FFCF50] transition-colors resize-none"
                      placeholder="Tell us how we can help you..."
                    ></textarea>
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-8 py-4 bg-[#FFCF50] text-[#626F47] font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:bg-[#FFCF50]/90"
                    >
                      <Send className="w-5 h-5" />
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Office Locations */}
        <div className="py-24 bg-[#A4B465]/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#626F47]/10 rounded-full border border-[#626F47]/20 mb-6">
                <Building className="w-5 h-5 text-[#FEFAE0]" />
                <span className="text-[#FEFAE0] font-medium text-sm">Our Locations</span>
              </div>
              <h2 className="text-4xl font-extrabold text-[#FFCF50] mb-6 text-balance">Visit Our Offices</h2>
              <p className="text-xl text-[#FEFAE0] max-w-4xl mx-auto leading-relaxed text-pretty">
                Find us at convenient locations across the city. Our friendly staff is ready to assist you in person.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg border border-[#A4B465]/20 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-[#FFCF50]/10 rounded-lg flex items-center justify-center mb-6">
                  <MapPin className="w-6 h-6 text-[#FFCF50]" />
                </div>
                <h3 className="text-xl font-semibold text-[#626F47] mb-4">Downtown Office</h3>
                <div className="space-y-3 text-[#626F47]/70">
                  <p>123 Business Plaza, Suite 456</p>
                  <p>Downtown District, City 12345</p>
                  <div className="flex items-center gap-2 pt-2">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">Mon-Fri: 8AM-6PM</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border border-[#A4B465]/20 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-[#626F47]/10 rounded-lg flex items-center justify-center mb-6">
                  <MapPin className="w-6 h-6 text-[#626F47]" />
                </div>
                <h3 className="text-xl font-semibold text-[#626F47] mb-4">North Branch</h3>
                <div className="space-y-3 text-[#626F47]/70">
                  <p>789 Commerce Street</p>
                  <p>North District, City 12346</p>
                  <div className="flex items-center gap-2 pt-2">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">Mon-Sat: 9AM-5PM</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border border-[#A4B465]/20 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-[#FFCF50]/10 rounded-lg flex items-center justify-center mb-6">
                  <MapPin className="w-6 h-6 text-[#FFCF50]" />
                </div>
                <h3 className="text-xl font-semibold text-[#626F47] mb-4">South Hub</h3>
                <div className="space-y-3 text-[#626F47]/70">
                  <p>321 Logistics Avenue</p>
                  <p>South District, City 12347</p>
                  <div className="flex items-center gap-2 pt-2">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">24/7 Operations</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="py-24 bg-[#FEFAE0]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFCF50]/10 rounded-full border border-[#FFCF50]/20 mb-6">
                <HelpCircle className="w-5 h-5 text-[#FFCF50]" />
                <span className="text-[#FFCF50] font-medium text-sm">Frequently Asked</span>
              </div>
              <h2 className="text-4xl font-extrabold text-[#626F47] mb-6 text-balance">Common Questions</h2>
              <p className="text-xl text-[#626F47]/80 max-w-4xl mx-auto leading-relaxed text-pretty">
                Find quick answers to the most common questions about our delivery services and policies.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-[#A4B465]/20">
                <h3 className="text-lg font-semibold text-[#626F47] mb-3">How fast can you deliver my package?</h3>
                <p className="text-[#626F47]/70 leading-relaxed">
                  Our standard delivery is same-day within 4-6 hours. For urgent deliveries, we offer express service
                  with pickup within 30 minutes and delivery within 2 hours.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-[#A4B465]/20">
                <h3 className="text-lg font-semibold text-[#626F47] mb-3">What areas do you cover?</h3>
                <p className="text-[#626F47]/70 leading-relaxed">
                  We currently serve all major districts within the city limits, with expanding coverage to suburban
                  areas. Check our coverage map or contact us to confirm delivery to your location.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-[#A4B465]/20">
                <h3 className="text-lg font-semibold text-[#626F47] mb-3">Are my packages insured?</h3>
                <p className="text-[#626F47]/70 leading-relaxed">
                  Yes, all deliveries include basic insurance coverage up to $100. For higher-value items, we offer
                  additional insurance options during booking.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-[#A4B465]/20">
                <h3 className="text-lg font-semibold text-[#626F47] mb-3">Can I track my delivery in real-time?</h3>
                <p className="text-[#626F47]/70 leading-relaxed">
                  Once your package is picked up, you`ll receive a tracking link with live GPS updates, estimated
                  delivery time, and notifications at each step.
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
              Still Have Questions?
            </h2>
            <p className="text-xl text-[#FEFAE0]/95 max-w-3xl mx-auto mb-12 text-pretty font-medium leading-relaxed">
              Our support team is standing by to help you with any questions or concerns. Get in touch today and
              experience our exceptional customer service.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="tel:+1234567890"
                className="group relative px-8 py-4 bg-[#FFCF50] text-[#626F47] font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:bg-[#FFCF50]/90 min-w-[200px] border border-[#FFCF50]/20 hover:border-[#FFCF50]/40"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call Now
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#FFCF50]/80 to-[#FFCF50] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              </a>
              <Link
                href="/book-delivery"
                className="group relative px-8 py-4 bg-[#FEFAE0] text-[#626F47] font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 border-[#FEFAE0] hover:bg-transparent hover:text-[#FEFAE0] min-w-[200px]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Book Delivery
                </span>
              </Link>
            </div>

            <div className="mt-16 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-[#FEFAE0]/80">
              <div className="flex items-center gap-2 hover:text-[#FEFAE0] transition-colors duration-300 group">
                <Headphones className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm font-medium">24/7 Support</span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-[#FEFAE0]/30"></div>
              <div className="flex items-center gap-2 hover:text-[#FEFAE0] transition-colors duration-300 group">
                <Shield className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm font-medium">Secure & Reliable</span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-[#FEFAE0]/30"></div>
              <div className="flex items-center gap-2 hover:text-[#FEFAE0] transition-colors duration-300 group">
                <Star className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm font-medium">5★ Customer Service</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
