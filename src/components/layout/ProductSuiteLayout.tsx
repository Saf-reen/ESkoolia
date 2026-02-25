import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";
import PageHeader from "@/components/layout/PageHeader";

interface Feature {
    title: string;
    desc: string;
}

interface ProductSuiteLayoutProps {
    title: string;
    subtitle: string;
    description: string;
    primaryCTA: string;
    secondaryCTA: string;
    features: Feature[];
    howItWorks: string[];
    benefits: string[];
    finalCTATitle: string;
}

const ProductSuiteLayout: React.FC<ProductSuiteLayoutProps> = ({
    title,
    subtitle,
    description,
    primaryCTA,
    secondaryCTA,
    features,
    howItWorks,
    benefits,
    finalCTATitle
}) => {
    return (
        <div className="bg-white min-h-screen">
            <PageHeader title={title} category="Suites" />

            {/* Hero Intro - Matching existing pages */}
            <section className="py-16 lg:py-24 border-b border-slate-50">
                <div className="w-full px-6 text-center">
                    <span className="text-orange-500 font-bold tracking-widest uppercase text-xs mb-3 block">{subtitle}</span>
                    <h2 className="text-4xl lg:text-6xl font-black text-[#483285] mb-6 tracking-tight uppercase leading-[1.1]">{title}</h2>
                    <p className="text-slate-500 text-xl max-w-4xl mx-auto leading-relaxed font-medium mb-10">
                        {description}
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button size="lg" className="h-14 px-10 rounded-full bg-[#483285] hover:bg-orange-600 text-white font-black text-lg shadow-xl uppercase transition-all" asChild>
                            <a href="https://eskoolia.pro/register" target="_blank" rel="noopener noreferrer">{primaryCTA}</a>
                        </Button>
                        <Button size="lg" variant="outline" className="h-14 px-10 rounded-full border-2 border-[#483285] text-[#483285] hover:bg-[#483285] hover:text-white font-black text-lg uppercase transition-all" asChild>
                            <Link to="/contact">{secondaryCTA}</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* What's Included */}
            <section className="py-20 lg:py-32 bg-[#fcfdfe]">
                <div className="w-full px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-black text-[#483285] mb-4 uppercase tracking-tight">What's Included</h2>
                        <div className="h-1.5 w-20 bg-orange-500 mx-auto rounded-full"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                        {features.map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group"
                            >
                                <div className="h-14 w-14 rounded-2xl bg-[#483285]/5 text-[#483285] flex items-center justify-center mb-6 group-hover:bg-[#483285] group-hover:text-white transition-all duration-300">
                                    <CheckCircle2 className="h-7 w-7" />
                                </div>
                                <h3 className="text-2xl font-black text-[#483285] mb-3 uppercase tracking-tight">{feature.title}</h3>
                                <p className="text-slate-500 text-lg leading-relaxed font-medium">
                                    {feature.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-20 lg:py-32 bg-white">
                <div className="w-full px-8 md:px-16 lg:px-24">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl lg:text-5xl font-black text-[#483285] mb-4 uppercase tracking-tight">How It Works</h2>
                        <div className="h-1.5 w-20 bg-orange-500 mx-auto rounded-full"></div>
                    </div>
                    <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-8 w-full">
                        {howItWorks.map((step, i) => (
                            <React.Fragment key={i}>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    className="flex flex-col items-center text-center gap-4 flex-1 text-wrap"
                                >
                                    <div className="h-20 w-20 rounded-full bg-[#483285] text-white flex items-center justify-center text-3xl font-black shadow-lg relative shrink-0">
                                        {i + 1}
                                        {i < howItWorks.length - 1 && (
                                            <div className="hidden lg:block absolute -right-32 top-1/2 -translate-y-1/2 w-24 h-0.5 bg-slate-200 border-dashed border-t-2"></div>
                                        )}
                                    </div>
                                    <p className="text-xl font-bold text-[#483285] uppercase tracking-tight max-w-[200px]">
                                        {step}
                                    </p>
                                </motion.div>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 lg:py-32 bg-[#483285]/5">
                <div className="w-full px-8 md:px-16 lg:px-24">
                    <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl lg:text-6xl font-black text-[#483285] mb-8 uppercase tracking-tight leading-tight">Key Benefits for Your School</h2>
                            <div className="space-y-6">
                                {benefits.map((benefit, i) => (
                                    <div key={i} className="flex gap-4 items-start">
                                        <div className="mt-1.5 h-6 w-6 rounded-full bg-orange-500 text-white flex items-center justify-center shrink-0">
                                            <CheckCircle2 className="h-4 w-4" />
                                        </div>
                                        <p className="text-xl font-bold text-slate-700">{benefit}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-12 rounded-[48px] shadow-2xl border border-slate-100 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-bl-full"></div>
                            <h3 className="text-3xl font-black text-[#483285] mb-6 uppercase tracking-tight">Drive Business Outcomes</h3>
                            <p className="text-lg text-slate-500 font-medium leading-relaxed mb-8">
                                Experience a measurable increase in engagement and efficiency within the first 30 days of implementation.
                            </p>
                            <Button className="h-14 px-10 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-black text-lg shadow-lg uppercase" asChild>
                                <Link to="/pricing">View Pricing Plans</Link>
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-[#483285] relative overflow-hidden text-center text-white">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent)]"></div>
                <div className="w-full px-6 relative z-10">
                <h2 className="text-3xl md:text-4xl font-black mb-6 max-w-4xl mx-auto leading-tight">Take control of your school today with Eskoolia.</h2>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Button size="lg" className="h-12 px-8 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-black text-base border-none shadow-[0_10px_30px_rgba(249,115,22,0.3)]" asChild>
                    <Link to="/register">JOIN NOW FREE</Link>
                    </Button>
                    <Button size="lg" variant="outline" className="h-12 px-8 rounded-full border-2 border-white/30 bg-white/5 hover:bg-white hover:text-[#483285] text-white font-black text-base backdrop-blur-sm shadow-xl" asChild>
                    <Link to="/contact">CONTACT SALES</Link>
                    </Button>
                </div>
                </div>
            </section>
        </div>
    );
};

export default ProductSuiteLayout;
