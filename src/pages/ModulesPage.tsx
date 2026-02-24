import { Button } from "@/components/ui/button";
import { Video, BookOpen, UserPlus, CreditCard, Users, Link as LinkIcon, Building2, Fingerprint, Globe, MessageSquare, FileBadge, ShoppingCart } from "lucide-react";
import PageHeader from "@/components/layout/PageHeader";
import { Link } from "react-router-dom";

const modules = [
    {
        icon: Video,
        title: "ZOOM",
        desc: "This is Zoom module for live virtual class and meeting in eSkoolia.",
        color: "blue",
        gradient: "from-blue-500 to-blue-700"
    },
    {
        icon: BookOpen,
        title: "Online Exam",
        desc: "This is OnlineExam module for eSkoolia to take online exam.",
        color: "emerald",
        gradient: "from-emerald-500 to-teal-600"
    },
    {
        icon: UserPlus,
        title: "Registration",
        desc: "This is online Parent Registration module for eSkoolia.",
        color: "orange",
        gradient: "from-orange-500 to-red-600"
    },
    {
        icon: CreditCard,
        title: "RazorPay",
        desc: "This is the Razor Pay module for eSkoolia for Online payment.",
        color: "indigo",
        gradient: "from-indigo-500 to-blue-600"
    },
    {
        icon: Users,
        title: "BigBlueButton",
        desc: "This is BigBlueButton module for live virtual class and meeting in eSkoolia.",
        color: "sky",
        gradient: "from-sky-500 to-blue-700"
    },
    {
        icon: LinkIcon,
        title: "Jitsi",
        desc: "This is Jitsi module for live virtual classes and meetings in eSkoolia.",
        color: "fuchsia",
        gradient: "from-fuchsia-500 to-purple-600"
    },
    {
        icon: Building2,
        title: "SaaS",
        desc: "This is Saas module for manage multiple school or institutes.",
        color: "violet",
        gradient: "from-violet-500 to-purple-800"
    },
    {
        icon: Fingerprint,
        title: "Biometrics",
        desc: "This is the Biometric Attendance module for eSkoolia.",
        color: "rose",
        gradient: "from-rose-500 to-pink-600"
    },
    {
        icon: Globe,
        title: "Google Meet",
        desc: "This is Google meet module for live virtual class and meeting in eSkoolia.",
        color: "green",
        gradient: "from-green-500 to-emerald-600"
    },
    {
        icon: MessageSquare,
        title: "WhatsApp",
        desc: "This is WhatsApp Support module. Send messages via WhatsApp in eSkoolia.",
        color: "emerald",
        gradient: "from-emerald-400 to-green-600"
    },
    {
        icon: FileBadge,
        title: "Certificate Pro",
        desc: "This is the module to generate Certificates for students and employees.",
        color: "amber",
        gradient: "from-amber-400 to-orange-600"
    }
];

export default function ModulesPage() {
    return (
        <div className="bg-white min-h-screen">
            <PageHeader title="Add-on Modules" />

            {/* Hero Intro */}
            <section className="py-16 lg:py-20 border-b border-slate-50 text-center">
                <div className="w-full px-6">
                    <span className="text-orange-500 font-bold tracking-widest uppercase text-xs mb-3 block">An Exhaustive list of Amazing Add-ons</span>
                    <h2 className="text-4xl lg:text-5xl font-black text-[#483285] mb-4 uppercase tracking-tight">
                        Get extra modules to enhance the features of eSkoolia!
                    </h2>
                    <p className="text-slate-500 text-lg max-w-4xl mx-auto leading-relaxed font-medium">
                        Every Single Module You Want That Are Available, Curiosity Is Future Of New Discover. Explore All Our Single Modules That Will help you to extend our software features!
                    </p>
                </div>
            </section>

            {/* Modules Grid */}
            <section className="py-16 bg-[#fcfdfe]">
                <div className="w-full px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {modules.map((mod, i) => (
                            <div
                                key={i}
                                className="group relative bg-white p-8 rounded-[40px] shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden flex flex-col h-full"
                            >
                                {/* Background Accent */}
                                <div className={`absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br ${mod.gradient} opacity-[0.03] group-hover:opacity-10 transition-opacity rounded-full`}></div>

                                {/* Icon Container */}
                                <div className="relative mb-8">
                                    <div className={`h-20 w-20 rounded-3xl bg-gradient-to-br ${mod.gradient} p-0.5 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                                        <div className="w-full h-full bg-white rounded-[22px] flex items-center justify-center text-[#483285] group-hover:bg-transparent group-hover:text-white transition-colors duration-500">
                                            <mod.icon className="h-10 w-10" />
                                        </div>
                                    </div>
                                    {/* Floating Dot */}
                                    <div className={`absolute -bottom-1 -left-1 w-4 h-4 bg-white rounded-full border-4 border-slate-50 shadow-sm`}></div>
                                </div>

                                {/* Content */}
                                <div className="flex-1 space-y-3 relative z-10">
                                    <h3 className="text-2xl font-black text-[#483285] uppercase tracking-tight">{mod.title}</h3>
                                    <p className="text-slate-500 font-medium leading-relaxed text-sm">
                                        {mod.desc}
                                    </p>
                                </div>

                                {/* Buy Button */}
                                <div className="mt-8 pt-6 border-t border-slate-50">
                                    <Button className={`w-full h-12 rounded-2xl font-black uppercase text-sm tracking-wider transition-all duration-300 bg-[#483285] hover:bg-orange-500 text-white shadow-md hover:shadow-orange-500/20 flex items-center justify-center gap-2`} asChild>
                                        <a href="https://wa.me/+923460204447" target="_blank" rel="noopener noreferrer">
                                            <ShoppingCart className="w-4 h-4" /> Buy Now
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing CTA */}
            <section className="py-20 bg-[#483285] relative overflow-hidden text-center text-white">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent)]"></div>
                <div className="w-full px-6 relative z-10">
                    <h2 className="text-4xl md:text-5xl font-black mb-8 uppercase tracking-tight">Need a customized solution?</h2>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <Button size="lg" className="h-14 px-10 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-black text-lg border-none shadow-xl" asChild>
                            <Link to="/contact">CONTACT US</Link>
                        </Button>
                        <Button size="lg" variant="outline" className="h-14 px-10 rounded-full border-2 border-white/30 bg-white/10 hover:bg-white/20 text-white font-black text-lg backdrop-blur-md" asChild>
                            <Link to="/pricing">VIEW ALL PRICING</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
