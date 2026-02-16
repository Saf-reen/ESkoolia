import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div>
      <section className="bg-subtle-grid py-16">
        <div className="container text-center">
          <h1 className="mb-4 font-display text-4xl font-extrabold text-foreground">Contact Us</h1>
          <p className="text-muted-foreground">Have questions? We'd love to hear from you.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="mx-auto grid max-w-4xl gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 font-display text-xl font-bold text-foreground">Get in Touch</h2>
              <div className="space-y-6">
                {[
                  { icon: Mail, title: "Email", value: "hello@eskoolia.com" },
                  { icon: Phone, title: "Phone", value: "+1 (555) 123-4567" },
                  { icon: MapPin, title: "Address", value: "123 Education Street, Tech City" },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-foreground">{item.title}</div>
                      <div className="text-sm text-muted-foreground">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-4">
              {sent ? (
                <div className="rounded-lg border border-primary/20 bg-primary/5 p-8 text-center">
                  <h3 className="mb-2 font-display font-semibold text-foreground">Message Sent!</h3>
                  <p className="text-sm text-muted-foreground">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <Label>Name</Label>
                      <Input placeholder="Your name" />
                    </div>
                    <div>
                      <Label>Email</Label>
                      <Input type="email" placeholder="you@example.com" />
                    </div>
                  </div>
                  <div>
                    <Label>Subject</Label>
                    <Input placeholder="How can we help?" />
                  </div>
                  <div>
                    <Label>Message</Label>
                    <Textarea placeholder="Tell us more..." rows={5} />
                  </div>
                  <Button variant="hero" type="submit">Send Message</Button>
                </>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
