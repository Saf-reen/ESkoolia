import { ChevronRight, Home } from "lucide-react";
import { Link } from "react-router-dom";

interface PageHeaderProps {
    title: string;
    breadcrumbs: { label: string; href?: string }[];
}

export default function PageHeader({ title, breadcrumbs }: PageHeaderProps) {
    return (
        <div className="relative bg-[#483285] text-white py-16 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
            <div className="absolute top-0 right-0 p-12 opacity-10">
                <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#FFFFFF" d="M45.7,-70.5C58.9,-62.5,69.3,-49.4,75.9,-34.7C82.5,-20,85.4,-3.7,82.4,11.5C79.4,26.7,70.6,40.8,59.6,52.2C48.6,63.6,35.4,72.3,21.2,76.6C7,81,-8.2,81,-22.4,76.1C-36.6,71.2,-49.8,61.4,-60.3,49.2C-70.8,37,-78.6,22.4,-80.6,6.9C-82.6,-8.6,-78.8,-25,-69.5,-38.6C-60.2,-52.2,-45.4,-63,-30.7,-70.1C-16,-77.2,-1.4,-80.6,14.2,-78.6C29.8,-76.6,45.4,-77,45.7,-70.5Z" transform="translate(100 100)" />
                </svg>
            </div>

            <div className="container relative z-10 text-center">
                <h1 className="text-4xl md:text-5xl font-bold font-display mb-4 tracking-tight">{title}</h1>

                {/* Breadcrumbs */}
                <nav className="flex justify-center items-center gap-2 text-sm text-white/80">
                    <Link to="/" className="hover:text-white transition-colors flex items-center gap-1">
                        <Home className="w-4 h-4" /> Home
                    </Link>
                    {breadcrumbs.map((crumb, index) => (
                        <div key={index} className="flex items-center gap-2">
                            <ChevronRight className="w-4 h-4 opacity-50" />
                            {crumb.href ? (
                                <Link to={crumb.href} className="hover:text-white transition-colors">
                                    {crumb.label}
                                </Link>
                            ) : (
                                <span className="text-white font-medium">{crumb.label}</span>
                            )}
                        </div>
                    ))}
                </nav>
            </div>
        </div>
    );
}
