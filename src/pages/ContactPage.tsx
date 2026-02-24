import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, HelpCircle, MessageSquare, Send } from "lucide-react";
import PageHeader from "@/components/layout/PageHeader";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="bg-white min-h-screen">
      <PageHeader
        title="Contact"
      />

      {/* Hero Intro */}
      <section className="py-12 lg:py-16 border-b border-slate-50 text-center">
        <div className="w-full px-6">
          <h2 className="text-4xl lg:text-5xl font-black text-[#483285] mb-4 uppercase tracking-tight">Contact eSkooly</h2>
          <p className="text-slate-500 text-lg max-w-4xl mx-auto leading-relaxed font-medium">
            Whether you're looking for a demo, have a support question or a commercial query get in touch.
          </p>
        </div>
      </section>

      {/* Contact Cards Grid */}
      <section className="py-12 bg-[#fcfdfe] border-b border-slate-100">
        <div className="w-full px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* FAQ Card */}
            <div className="bg-white p-8 rounded-[32px] shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-slate-100 hover:shadow-2xl hover:-translate-y-1 transition-all group flex flex-col items-center text-center">
              <div className="h-20 w-20 rounded-full bg-orange-50 text-orange-500 flex items-center justify-center mb-6 border-4 border-white shadow-sm transition-all group-hover:scale-110">
                <HelpCircle className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-black text-[#483285] mb-2 uppercase tracking-tight">Have questions?</h3>
              <p className="text-sm text-slate-500 font-medium mb-6">Have questions about payments or price plans? We have answers!</p>
              <Button variant="outline" className="rounded-full border-2 border-orange-500 text-orange-600 font-bold hover:bg-orange-500 hover:text-white px-8" asChild>
                <Link to="/faq">Read F.A.Q</Link>
              </Button>
            </div>

            {/* Email Card */}
            <div className="bg-white p-8 rounded-[32px] shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-slate-100 hover:shadow-2xl hover:-translate-y-1 transition-all group flex flex-col items-center text-center">
              <div className="h-20 w-20 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-6 border-4 border-white shadow-sm transition-all group-hover:scale-110">
                <Mail className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-black text-[#483285] mb-2 uppercase tracking-tight">Email Us</h3>
              <a href="mailto:support@eskooly.com" className="text-xl font-black text-blue-600 hover:text-[#483285] transition-colors tracking-tight">support@eskooly.com</a>
              <div className="mt-4 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-widest">Available 24/7</div>
            </div>

            {/* Call Card */}
            <div className="bg-white p-8 rounded-[32px] shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-slate-100 hover:shadow-2xl hover:-translate-y-1 transition-all group flex flex-col items-center text-center">
              <div className="h-20 w-20 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center mb-6 border-4 border-white shadow-sm transition-all group-hover:scale-110">
                <Phone className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-black text-[#483285] mb-2 uppercase tracking-tight">Call Us</h3>
              <div className="flex flex-col gap-1">
                <a href="tel:+923460204447" className="text-lg font-black text-slate-700 hover:text-purple-600 tracking-tight">+92 (346) 020-44-47</a>
                <a href="tel:+447404074252" className="text-lg font-black text-slate-700 hover:text-purple-600 tracking-tight">+44 (740) 407-42-52</a>
              </div>
            </div>

            {/* Visit Card */}
            <div className="bg-white p-8 rounded-[32px] shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-slate-100 hover:shadow-2xl hover:-translate-y-1 transition-all group flex flex-col items-center text-center">
              <div className="h-20 w-20 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6 border-4 border-white shadow-sm transition-all group-hover:scale-110">
                <MapPin className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-black text-[#483285] mb-2 uppercase tracking-tight">Visit Us</h3>
              <p className="text-sm text-slate-600 font-bold leading-relaxed max-w-[200px]">
                1092 Chester road, Stretford, Manchester, UK M32 0HL
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="py-20 bg-white">
        <div className="w-full px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left Graphics/Info */}
            <div className="space-y-8">
              <div className="p-2 inline-block rounded-lg bg-indigo-50 text-indigo-600 font-bold text-xs uppercase tracking-widest border border-indigo-100">
                Let's Connect
              </div>
              <h2 className="text-5xl lg:text-6xl font-black text-[#483285] leading-[1.1] uppercase">
                Send us a <span className="text-orange-500">Message</span>
              </h2>
              <p className="text-lg text-slate-500 font-medium leading-relaxed max-w-xl">
                Have questions about eSkoolia? We're here to help you get started on your journey to school management excellence.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-center gap-5 p-6 rounded-3xl bg-slate-50 border border-slate-100 group hover:bg-white hover:shadow-xl transition-all">
                  <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center text-blue-500 shadow-sm transition-all group-hover:bg-blue-500 group-hover:text-white">
                    <MessageSquare className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-black text-[#483285] uppercase text-sm">Live Chatting</h4>
                    <p className="text-xs text-slate-500">Response in 1 hour</p>
                  </div>
                </div>
                <div className="flex items-center gap-5 p-6 rounded-3xl bg-slate-50 border border-slate-100 group hover:bg-white hover:shadow-xl transition-all">
                  <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center text-orange-500 shadow-sm transition-all group-hover:bg-orange-500 group-hover:text-white">
                    <HelpCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-black text-[#483285] uppercase text-sm">Help Center</h4>
                    <p className="text-xs text-slate-500">Docs & Tutorials</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form Card */}
            <div className="relative">
              {/* Decorative blobs */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-100 rounded-full blur-3xl opacity-50"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-100 rounded-full blur-3xl opacity-50"></div>

              <div className="relative bg-white p-10 md:p-12 rounded-[48px] border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
                <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-6">
                  {sent ? (
                    <div className="py-12 text-center flex flex-col items-center justify-center">
                      <div className="h-24 w-24 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-8 border-4 border-white shadow-lg">
                        <Send className="h-10 w-10 animate-bounce" />
                      </div>
                      <h3 className="text-3xl font-black text-[#483285] uppercase mb-4">Message Sent!</h3>
                      <p className="text-slate-500 text-lg mb-8 max-w-sm">Thank you for contacting us. We'll get back to you within 24 hours.</p>
                      <Button onClick={() => setSent(false)} className="rounded-full px-10 h-14 bg-[#483285] hover:bg-orange-500 font-black text-white text-lg transition-all shadow-lg">
                        Send Another
                      </Button>
                    </div>
                  ) : (
                    <>
                      <div className="grid gap-6 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label className="text-base text-slate-800 font-black uppercase tracking-wider ml-1">Your Name</Label>
                          <Input placeholder="Enter your full name" className="bg-slate-50 border-slate-100 focus-visible:ring-orange-500 h-14 rounded-2xl text-base px-6 shadow-inner" />
                        </div>
                        <div className="space-y-2">
                          <Label className="text-base text-slate-800 font-black uppercase tracking-wider ml-1">Email Address</Label>
                          <Input type="email" placeholder="example@mail.com" className="bg-slate-50 border-slate-100 focus-visible:ring-orange-500 h-14 rounded-2xl text-base px-6 shadow-inner" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label className="text-base text-slate-800 font-black uppercase tracking-wider ml-1">Subject</Label>
                        <Input placeholder="How can we help you?" className="bg-slate-50 border-slate-100 focus-visible:ring-orange-500 h-14 rounded-2xl text-base px-6 shadow-inner" />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-base text-slate-800 font-black uppercase tracking-wider ml-1">Your Message</Label>
                        <Textarea placeholder="Write your message here..." rows={5} className="bg-slate-50 border-slate-100 focus-visible:ring-orange-500 rounded-2xl text-base px-6 py-4 shadow-inner resize-none" />
                      </div>
                      <Button className="w-full bg-gradient-to-r from-[#483285] to-[#6a4bc2] hover:from-orange-500 hover:to-orange-600 text-white font-black h-16 rounded-2xl text-xl shadow-[0_10px_20px_rgba(72,50,133,0.2)] hover:shadow-[0_15px_30px_rgba(249,115,22,0.3)] transition-all uppercase tracking-tight flex items-center justify-center gap-3" type="submit">
                        Submit Your Message <Send className="w-5 h-5" />
                      </Button>
                    </>
                  )}
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-[#483285] text-white text-center">
        <div className="w-full px-6">
          <h2 className="text-3xl md:text-4xl font-black mb-6 uppercase tracking-tight">Ready to transform your institution?</h2>
          <Button size="lg" className="rounded-full h-14 px-12 bg-orange-500 hover:bg-orange-600 text-white font-black text-lg shadow-xl" asChild>
            <a href="/pricing">GET STARTED NOW</a>
          </Button>
        </div>
      </section>
    </div>
  );
}
