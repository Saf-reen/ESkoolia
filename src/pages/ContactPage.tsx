import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import PageHeader from "@/components/layout/PageHeader";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="bg-slate-50 min-h-screen">
      <PageHeader
        title="Contact Us"
        breadcrumbs={[
          { label: "Pages" },
          { label: "Contact" },
          { label: "Contact Us" }
        ]}
      />

      <section className="py-20 -mt-10 relative z-20">
        <div className="container">
          <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">

            {/* Contact Info Card */}
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 flex flex-col justify-between h-full">
              <div>
                <h2 className="mb-6 font-display text-2xl font-bold text-[#483285]">Get in Touch</h2>
                <p className="text-slate-600 mb-8">Have questions about eSkooly Pro? Our team is here to help you get started.</p>

                <div className="space-y-6">
                  {[
                    { icon: Mail, title: "Email", value: "pro@eskooly.com", href: "mailto:pro@eskooly.com" },
                    { icon: Phone, title: "Phone", value: "+92 346 0204447", href: "tel:+923460204447" },
                    { icon: MapPin, title: "Address", value: "Dhaka, Bangladesh", href: "#" },
                  ].map((item) => (
                    <a href={item.href} key={item.title} className="flex items-start gap-4 group p-4 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#483285]/10 text-[#483285] group-hover:bg-[#483285] group-hover:text-white transition-colors">
                        <item.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-slate-800 mb-1">{item.title}</div>
                        <div className="text-sm text-slate-600 font-medium">{item.value}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="mt-10 p-6 bg-gradient-to-br from-[#483285] to-[#6a4bc2] rounded-2xl text-white">
                <h4 className="font-bold mb-2">Need immediate support?</h4>
                <p className="text-white/80 text-sm mb-4">Check our documentation or chat with our support team directly.</p>
                <div className="flex gap-3">
                  <Button variant="secondary" size="sm" className="w-full text-[#483285] font-bold" asChild>
                    <a href="https://wa.me/+923460204447" target="_blank" rel="noopener noreferrer">Live Chat</a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Contact Form Card */}
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
              <h2 className="mb-6 font-display text-2xl font-bold text-[#483285]">Send Message</h2>
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-5">
                {sent ? (
                  <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center flex flex-col items-center justify-center h-[400px]">
                    <div className="h-16 w-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                      <Mail className="h-8 w-8" />
                    </div>
                    <h3 className="mb-2 font-display text-xl font-bold text-slate-800">Message Sent!</h3>
                    <p className="text-slate-600 max-w-xs mx-auto">Thank you for contacting us. We'll get back to you within 24 hours.</p>
                    <Button onClick={() => setSent(false)} variant="outline" className="mt-6 border-green-200 text-green-700 hover:bg-green-100 hover:text-green-800">Send Another</Button>
                  </div>
                ) : (
                  <>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label className="text-slate-700 font-semibold">Name</Label>
                        <Input placeholder="Your name" className="bg-slate-50 border-slate-200 focus-visible:ring-[#483285]" />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-slate-700 font-semibold">Email</Label>
                        <Input type="email" placeholder="you@example.com" className="bg-slate-50 border-slate-200 focus-visible:ring-[#483285]" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label className="text-slate-700 font-semibold">Subject</Label>
                      <Input placeholder="How can we help?" className="bg-slate-50 border-slate-200 focus-visible:ring-[#483285]" />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-slate-700 font-semibold">Message</Label>
                      <Textarea placeholder="Tell us more..." rows={6} className="bg-slate-50 border-slate-200 focus-visible:ring-[#483285] resize-none" />
                    </div>
                    <Button className="w-full bg-[#483285] hover:bg-[#3a286e] text-white font-bold h-12 text-lg shadow-lg hover:shadow-xl transition-all" type="submit">Send Message</Button>
                  </>
                )}
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
