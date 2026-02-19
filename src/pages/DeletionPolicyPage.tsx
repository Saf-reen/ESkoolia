import PageHeader from "@/components/layout/PageHeader";
import { Shield, Trash2, Database, Menu, LifeBuoy } from "lucide-react";
import { useState, useEffect } from "react";

export default function DeletionPolicyPage() {
    const [activeSection, setActiveSection] = useState("overview");

    const sections = [
        {
            id: "overview",
            title: "Overview",
            icon: Shield,
            content: "eSkoolia respects your right to control your personal data. We provide a straightforward process for users to request the permanent deletion of their account and associated information, adhering to global data privacy standards."
        },
        {
            id: "steps",
            title: "How to Request Deletion",
            icon: Trash2,
            content: (
                <div className="space-y-4">
                    <p>To initiate an account deletion request, please follow these steps:</p>

                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                        <ul className="list-decimal pl-5 space-y-3 text-base marker:font-bold marker:text-[#483285]">
                            <li>Compose an email to our support team at <a href="mailto:support@eskooly.com" className="text-[#483285] font-bold hover:underline">support@eskooly.com</a></li>
                            <li>Use the subject line: <span className="font-bold text-slate-900 bg-slate-200 px-2 py-0.5 rounded">"Account Deletion Request"</span></li>
                            <li>In the email body, please strictly include:
                                <ul className="list-disc pl-5 mt-2 space-y-1 text-slate-600">
                                    <li>Your <span className="font-semibold text-slate-800">Registered Email Address</span> or <span className="font-semibold text-slate-800">Phone Number</span></li>
                                    <li>Your <span className="font-semibold text-slate-800">User Role</span> (e.g., School Admin, Teacher, Student, Parent)</li>
                                    <li>Looking School Name/ID (Optional, but helps speed up the process)</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: "timeline",
            title: "Processing Timeline",
            icon: LifeBuoy,
            content: "Once we receive your valid request, our support team will verify your identity to prevent unauthorized deletion. The deletion process typically takes 5-7 working days. You will receive a confirmation email once the deletion is complete."
        },
        {
            id: "impact",
            title: "Impact of Deletion",
            icon: Database,
            content: (
                <div className="space-y-4">
                    <p>Understanding what happens when your account is deleted is crucial. Here is a breakdown of data handling:</p>

                    <div className="grid md:grid-cols-2 gap-6 mt-4">
                        <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
                            <h4 className="font-bold text-red-700 mb-4 text-lg flex items-center gap-2">
                                <Trash2 className="h-5 w-5" /> Permanently Deleted
                            </h4>
                            <ul className="space-y-2 text-sm text-red-800/80 font-medium">
                                <li className="flex items-start gap-2"><span className="text-red-400">•</span> Personal Profile Information (Name, DOB, etc.)</li>
                                <li className="flex items-start gap-2"><span className="text-red-400">•</span> Academic Records & Transcripts</li>
                                <li className="flex items-start gap-2"><span className="text-red-400">•</span> Attendance History</li>
                                <li className="flex items-start gap-2"><span className="text-red-400">•</span> Homework, Assignments & Exams</li>
                                <li className="flex items-start gap-2"><span className="text-red-400">•</span> Fee & Billing Records (non-auditable)</li>
                                <li className="flex items-start gap-2"><span className="text-red-400">•</span> Login Credentials & Auth Tokens</li>
                            </ul>
                        </div>

                        <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 h-fit">
                            <h4 className="font-bold text-blue-700 mb-4 text-lg flex items-center gap-2">
                                <Database className="h-5 w-5" /> Temporarily Retained
                            </h4>
                            <p className="text-sm text-blue-800/80 mb-4 leading-relaxed">
                                Certain financial transaction records (e.g., invoices, payment proofs) may be retained for up to <strong>90 days</strong> strictly for legal, tax, and auditing purposes.
                            </p>
                            <div className="text-xs text-blue-600 bg-blue-100/50 p-3 rounded-lg border border-blue-200">
                                <strong>Final Erasure:</strong> After this retention period, no trace of your data will remain on our active servers or backups.
                            </div>
                        </div>
                    </div>
                </div>
            )
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
                title="Account Deletion Policy"
                breadcrumbs={[
                    { label: "Pages" },
                    { label: "Deletion Policy" }
                ]}
            />

            <div className="container mx-auto px-4 py-16">

                {/* Intro Text */}
                <div className="max-w-4xl mx-auto mb-16 text-center">
                    <p className="text-slate-600 leading-relaxed text-lg">
                        At <span className="font-bold text-[#483285]">eSkoolia</span>, transparency is our core value. This policy outlines how you can request the permanent removal of your account and personal data from our systems.
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
                                    <div className="w-full">
                                        <h2 className="text-2xl font-bold text-slate-800 mb-4 font-display group-hover:text-[#483285] transition-colors">{section.title}</h2>
                                        <div className="text-slate-600 leading-relaxed text-lg w-full">{section.content}</div>
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
