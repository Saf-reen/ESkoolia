import { useState, useEffect } from "react";
import PageHeader from "@/components/layout/PageHeader";
import {
    CreditCard,
    Package as PackageIcon,
    CheckCircle2,
    HelpCircle as HelpIcon,
    Clock as ClockIcon,
    XCircle as XIcon,
    Mail as MailIcon,
    Menu,
    DollarSign
} from "lucide-react";

export default function RefundPolicyPage() {
    const [activeSection, setActiveSection] = useState("standard-premium");

    const sections = [
        {
            id: "standard-premium",
            title: "Standard and Premium Packages",
            icon: PackageIcon,
            content: "We offer a 14-day refund policy for our Standard and Premium packages. If you are not satisfied with the Standard or Premium package within 14 days of purchase, you may request a refund."
        },
        {
            id: "business-package",
            title: "Business Package",
            icon: DollarSign,
            content: "Due to the nature of the Business package, which is tailored for larger institutions and enterprises, we do not offer refunds for the Business package."
        },
        {
            id: "eligibility",
            title: "Eligibility",
            icon: CheckCircle2,
            content: "To be eligible for a refund, you must submit a refund request within the specified refund period. Refunds are applicable only to the Standard and Premium packages and not to the Business package."
        },
        {
            id: "how-to-request",
            title: "How to Request a Refund",
            icon: MailIcon,
            content: "To request a refund for the Standard or Premium package, please contact our customer support team at support@eskoolia.com within 14 days of your purchase. Refund requests must include your order details and the reason for the refund."
        },
        {
            id: "processing-time",
            title: "Processing Time",
            icon: ClockIcon,
            content: "Once your refund request is received and approved, we will process the refund within 10-12 working days. Refunds will be issued to the original payment method used for the purchase."
        },
        {
            id: "cancellation",
            title: "Cancellation of Services",
            icon: XIcon,
            content: "If a refund is issued for the Standard or Premium package, your access to eSkoolia Pro will be terminated, and you will no longer be able to use the software."
        },
        {
            id: "contact-us",
            title: "Contact Us",
            icon: HelpIcon,
            content: "If you have any questions about our refund policy or need assistance with your refund request, please contact us at support@eskoolia.com."
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
        <div className="min-h-screen bg-white">
            <PageHeader
                title="Refund Policy"
                category="Legal"
            />

            <div className="container mx-auto px-4 py-16">

                {/* Intro Text */}
                <div className="max-w-4xl mx-auto mb-16 text-center">
                    <p className="text-[#581C87]/70 leading-relaxed text-lg">
                        At <span className="font-bold text-[#581C87]">eSkoolia</span>, we want you to be completely satisfied with our software. This Refund Policy outlines the terms and conditions for requesting a refund.
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-10 max-w-6xl mx-auto items-start">

                    {/* Left Sidebar - Sticky Navigation */}
                    <div className="lg:col-span-4 lg:sticky lg:top-24 hidden lg:block">
                        <div className="bg-white rounded-2xl shadow-lg border border-gray-50 overflow-hidden">
                            <div className="bg-[#581C87] p-4 text-white">
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
                                                    ? "bg-gray-50 text-[#581C87] font-bold shadow-sm translate-x-1"
                                                    : "text-[#581C87]/70 hover:bg-[#581C87]/5/50 hover:text-[#581C87]"
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
                                    <div className="shrink-0 p-3 rounded-xl bg-white text-[#581C87] group-hover:bg-[#581C87] group-hover:text-white transition-colors duration-300 shadow-sm border border-gray-50">
                                        <section.icon className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-[#581C87] mb-4 font-display group-hover:text-orange-500 transition-colors">{section.title}</h2>
                                        <div className="text-[#581C87]/70 leading-relaxed text-lg">{section.content}</div>
                                    </div>
                                </div>
                                <hr className="mt-12 border-gray-50 last:hidden" />
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
}
