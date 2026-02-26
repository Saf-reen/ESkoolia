import PageHeader from "@/components/layout/PageHeader";
import { Headphones, Shield, Cpu, MessageSquare, Terminal, Users, LifeBuoy, Menu, Mail } from "lucide-react";
import { useState, useEffect } from "react";

export default function SupportPolicyPage() {
    const [activeSection, setActiveSection] = useState("standard-premium");

    const sections = [
        {
            id: "standard-premium",
            title: "Standard and Premium Packages",
            icon: Shield,
            content: (
                <div className="space-y-4">
                    <p>For customers subscribing to our Standard and Premium packages, we offer one year of comprehensive technical support. This support encompasses a range of services, including:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Assistance with product installation and activation.</li>
                        <li>Training sessions to familiarize users with the features and functionalities of eSkoolia Pro.</li>
                        <li>Guidance and troubleshooting to resolve any software-related issues or errors.</li>
                    </ul>
                    <p>Our technical support team is available during regular business hours to address your inquiries and ensure your experience with our software is smooth and efficient.</p>
                </div>
            )
        },
        {
            id: "business-package",
            title: "Business Package",
            icon: Cpu,
            content: (
                <div className="space-y-4">
                    <p>For customers opting for our Business package, we provide an extended five-year technical support plan designed to meet the unique needs of larger institutions and enterprises. This comprehensive support package includes:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Five years of uninterrupted technical assistance, starting from the initial installation and activation of the product.</li>
                        <li>Customization support to tailor eSkoolia Pro according to your organization's specific requirements.</li>
                        <li>Integration assistance for adding additional modules and features as per your demand.</li>
                        <li>24/7 live support to address any urgent issues or concerns that may arise.</li>
                    </ul>
                    <p>Furthermore, our support team is committed to providing personalized assistance, including training sessions and online conferences, to ensure your team maximizes the benefits of our software solution.</p>
                </div>
            )
        },
        {
            id: "expectations",
            title: "Knowledge Expectations",
            icon: Terminal,
            content: "It is important to note that while we offer extensive technical support, customers are expected to have a basic understanding of computer software operation. We do not provide training on fundamental concepts related to ERP software usage."
        },
        {
            id: "contact-us",
            title: "Contact Us",
            icon: Mail,
            content: (
                <div className="space-y-4">
                    <p>If you require technical support or have any questions regarding our technical support policy, please do not hesitate to reach out to our dedicated support team at <a href="mailto:support@eskoolia.com" className="text-[#581C87] font-bold hover:underline">support@eskoolia.com</a>.</p>
                    <p>We are committed to ensuring your experience with eSkoolia Pro is seamless and productive.</p>
                </div>
            )
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
                title="Technical Support Policy"
                category="Legal"
            />

            <div className="container mx-auto px-4 py-16">

                {/* Intro Text */}
                <div className="max-w-4xl mx-auto mb-16 text-center">
                    <p className="text-[#581C87]/70 leading-relaxed text-lg">
                        Our commitment at <span className="font-bold text-[#581C87]">eSkoolia</span> is to provide exceptional service and reliable technical assistance to help your institution succeed.
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
