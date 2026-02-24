import PageHeader from "@/components/layout/PageHeader";
import { Shield, Lock, FileText, CheckCircle, Database, Gavel, UserCheck, XCircle, Menu, Copyright, Scale } from "lucide-react";
import { useState, useEffect } from "react";

export default function TermsPage() {
  const [activeSection, setActiveSection] = useState("use-of-service");

  const sections = [
    {
      id: "use-of-service",
      title: "Use of Service",
      icon: UserCheck,
      content: "You must be at least 18 years old or have the legal capacity to enter into a contract to use eSkoolia Pro. You are responsible for maintaining the confidentiality of your account and password and for restricting access to your account. You agree to accept responsibility for all activities that occur under your account."
    },
    {
      id: "intellectual-property",
      title: "Intellectual Property",
      icon: Copyright,
      content: "eSkoolia Pro and its content, including but not limited to software, logos, trademarks, and designs, are the intellectual property of eSkoolia Inc. and are protected by copyright, trademark, and other laws."
    },
    {
      id: "data-ownership",
      title: "Data Ownership",
      icon: Database,
      content: "You retain ownership of any data or content you upload, input, or submit to eSkoolia Pro. By using our service, you grant eSkoolia Inc. a non-exclusive, worldwide, royalty-free license to use, reproduce, and distribute your data solely for the purpose of providing and improving our service."
    },
    {
      id: "acceptable-use",
      title: "Acceptable Use",
      icon: Shield,
      content: "You agree not to use eSkoolia Pro for any unlawful or unauthorized purpose. You may not violate any applicable laws or regulations in your jurisdiction. You may not upload, post, or transmit any content that is defamatory, obscene, offensive, or infringes upon the rights of others."
    },
    {
      id: "limitation-of-liability",
      title: "Limitation of Liability",
      icon: Scale,
      content: "In no event shall eSkoolia Inc. be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or in connection with your use of eSkoolia Pro. eSkoolia Inc. shall not be liable for any interruption or cessation of service, loss of data, or unauthorized access to your account."
    },
    {
      id: "termination",
      title: "Termination",
      icon: XCircle,
      content: "eSkoolia Inc. reserves the right to suspend or terminate your access to eSkoolia Pro at any time for any reason without prior notice. Upon termination, your right to use eSkoolia Pro will cease, and you must cease all use of the service and destroy any copies of eSkoolia Pro in your possession."
    },
    {
      id: "governing-law",
      title: "Governing Law",
      icon: Gavel,
      content: "These Terms and Conditions shall be governed by and construed in accordance with the laws of United Kingdom, without regard to its conflict of law provisions."
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

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
        title="Terms and Conditions"
        category="Legal"
      />

      <div className="container mx-auto px-4 py-16">

        {/* Intro Text */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <p className="text-slate-600 leading-relaxed text-lg">
            Please read these Terms and Conditions carefully before using <span className="font-bold text-[#483285]">eSkoolia Pro</span>. Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms.
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
