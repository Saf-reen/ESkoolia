import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface PageHeaderProps {
    title: string;
    category?: string;
    breadcrumbs?: { label: string; href?: string }[];
}

export default function PageHeader({ title, category = "Pages" }: PageHeaderProps) {
    return (
        <section
            className="relative pt-48 pb-60 text-white bg-[#581C87] overflow-hidden"
        >

            <div className="container relative z-10 text-center">
                <h1 className="text-6xl md:text-8xl font-black font-display mb-6 tracking-tight drop-shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-700">
                    {title}
                </h1>

                {/* Breadcrumbs matching the screenshot style */}
                <nav className="flex justify-center items-center gap-2 text-lg font-bold tracking-tight text-white/90">
                    <Link to="/" className="hover:text-white transition-colors">Home</Link>
                    <ChevronRight className="w-5 h-5 opacity-60" />
                    <span className="opacity-60">{category}</span>
                    <ChevronRight className="w-5 h-5 opacity-60" />
                    <span className="text-white">{title}</span>
                </nav>
            </div>

            {/* Floating Decorative Shapes removed for clean look */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] opacity-50"></div>
            </div>

            {/* White Arched Bottom Transition for seamless content merge */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
                <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[120px] text-white fill-current">
                    <path d="M0,120 C300,0 900,0 1200,120 L1200,120 L0,120 Z"></path>
                </svg>
            </div>
        </section>
    );
}
