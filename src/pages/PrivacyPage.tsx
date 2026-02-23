import PageHeader from "@/components/layout/PageHeader";
import { Shield, Lock, Eye, CheckCircle, Database, Server, Menu } from "lucide-react";
import { useState, useEffect } from "react";

export default function PrivacyPage() {
  const [activeSection, setActiveSection] = useState("collect");

  const sections = [
    {
      id: "collect",
      title: "Information We Collect",
      icon: Database,
      content: "When you sign up for eSkoolia, we may collect personal information such as your name, email address, contact details, and billing information. We also automatically collect usage data about your interaction with our software, including your IP address, browser type, pages visited, and timestamps."
    },
    {
      id: "use",
      title: "How We Use Your Information",
      icon: Server,
      content: "We use your information to deliver, maintain, and enhance our software, as well as to communicate with you about updates and support. Additionally, we may personalize your experience and tailor our services to your preferences. Your information is also used for billing purposes and account management."
    },
    {
      id: "security",
      title: "Data Security",
      icon: Lock,
      content: "We prioritize the security of your information and implement industry-standard measures to protect against unauthorized access, disclosure, alteration, or destruction. However, we cannot guarantee absolute security due to the inherent risks of transmitting data over the internet."
    },
    {
      id: "sharing",
      title: "Sharing of Information",
      icon: Eye,
      content: "We do not sell, trade, or rent your personal information to third parties. However, we may share your information with trusted third-party service providers who assist us in delivering our services, provided they agree to keep your information confidential."
    },
    {
      id: "retention",
      title: "Data Retention",
      icon: CheckCircle,
      content: "We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy unless a longer retention period is required or permitted by law."
    },
    {
      id: "rights",
      title: "Your Rights",
      icon: Shield,
      content: "You have the right to access, correct, or delete your personal information. You can manage your account settings or contact us directly to exercise these rights. Additionally, you can opt-out of receiving marketing communications from us at any time."
    },
    {
      id: "changes",
      title: "Changes to this Privacy Policy",
      icon: Shield,
      content: "We reserve the right to update or modify this Privacy Policy at any time. Any changes will be effective immediately upon posting on our website. We encourage you to review this Privacy Policy periodically for any updates."
    }
  ];

  // Optional: Highlight active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Offset for header

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(section.id);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      <PageHeader
        title="Privacy Policy"
        category="Legal"
      />

      <div className="container mx-auto px-4 py-16">

        {/* Intro Text */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <p className="text-slate-600 leading-relaxed text-lg">
            At <span className="font-bold text-[#483285]">eSkoolia</span>, we are committed to safeguarding your privacy. This Privacy Policy outlines how we collect, use, and protect your personal information when you use our cloud-based education management software.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 max-w-6xl mx-auto items-start">

          {/* Left Sidebar - Sticky Navigation */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 hidden lg:block">
            <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden">
              <div className="bg-[#483285] p-4 text-white">
                <h3 className="font-bold text-lg flex items-center gap-2">
                  <Menu className="h-5 w-5" /> Contents
                </h3>
              </div>
              <nav className="p-2">
                <ul className="space-y-1">
                  {sections.map((section) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${activeSection === section.id
                          ? "bg-slate-100 text-[#483285] font-bold shadow-sm translate-x-1"
                          : "text-slate-600 hover:bg-slate-50 hover:text-[#483285]"
                          }`}
                        onClick={(e) => {
                          e.preventDefault();
                          document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                          setActiveSection(section.id);
                        }}
                      >
                        {section.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-16">
            {sections.map((section) => (
              <div key={section.id} id={section.id} className="scroll-mt-32 group">
                <div className="flex items-start gap-5">
                  <div className="shrink-0 p-3 rounded-xl bg-white text-[#483285] group-hover:bg-[#483285] group-hover:text-white transition-colors duration-300 shadow-sm border border-slate-200">
                    <section.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-800 mb-4 font-display group-hover:text-[#483285] transition-colors">{section.title}</h2>
                    <div className="text-slate-600 leading-relaxed text-lg">{section.content}</div>
                  </div>
                </div>
                <hr className="mt-12 border-slate-200 last:hidden" />
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
