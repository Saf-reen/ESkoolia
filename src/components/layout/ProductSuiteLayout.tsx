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
            <section className="py-24 lg:py-40 border-b border-gray-50">
                <div className="w-full px-8 md:px-16 lg:px-24 text-center">
                    <span className="text-orange-500 font-black tracking-[0.3em] uppercase text-xs mb-6 block">{subtitle}</span>
                    <h2 className="font-display text-5xl lg:text-8xl font-black text-[#581C87] mb-10 tracking-tight uppercase leading-[0.95] max-w-7xl mx-auto">{title}</h2>
                    <p className="text-[#581C87]/60 text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed font-medium mb-16">
                        {description}
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <Button size="lg" className="h-18 px-14 rounded-full bg-[#581C87] hover:bg-orange-500 text-white font-black text-xl shadow-2xl uppercase transition-all" asChild>
                            <a href="https://eskoolia.pro/register" target="_blank" rel="noopener noreferrer">{primaryCTA}</a>
                        </Button>
                        <Button size="lg" variant="outline" className="h-18 px-14 rounded-full border-2 border-[#581C87] text-[#581C87] hover:bg-[#581C87] hover:text-white font-black text-xl uppercase transition-all" asChild>
                            <Link to="/contact">{secondaryCTA}</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* What's Included */}
            <section className="py-24 lg:py-40 bg-gray-50">
                <div className="w-full px-8 md:px-16 lg:px-24">
                    <div className="text-left mb-20">
                        <span className="text-orange-500 font-black tracking-[0.3em] uppercase text-xs mb-4 block">Core Suite features</span>
                        <h2 className="font-display text-4xl lg:text-6xl font-black text-[#581C87] mb-4 uppercase tracking-tight">What's Included</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
                        {features.map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white p-12 rounded-[48px] border border-gray-50 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all group"
                            >
                                <div className="h-16 w-16 rounded-3xl bg-[#581C87]/5 text-[#581C87] flex items-center justify-center mb-8 group-hover:bg-[#581C87] group-hover:text-white transition-all duration-300">
                                    <CheckCircle2 className="h-8 w-8" />
                                </div>
                                <h3 className="text-2xl font-black text-[#581C87] mb-4 uppercase tracking-tight leading-tight">{feature.title}</h3>
                                <p className="text-[#581C87]/60 text-lg leading-relaxed font-medium">
                                    {feature.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-24 lg:py-40 bg-white">
                <div className="w-full px-8 md:px-16 lg:px-24">
                    <div className="text-center mb-24">
                        <h2 className="font-display text-4xl lg:text-7xl font-black text-[#581C87] mb-6 uppercase tracking-tight">The Ecosystem Deployment</h2>
                        <p className="text-[#581C87]/40 text-xl font-medium uppercase tracking-widest">Seamless integration in 3 steps</p>
                    </div>
                    <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-8 w-full">
                        {howItWorks.map((step, i) => (
                            <React.Fragment key={i}>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    className="flex flex-col items-center text-center gap-6 flex-1 text-wrap"
                                >
                                    <div className="h-24 w-24 rounded-full bg-[#581C87] text-white flex items-center justify-center text-4xl font-black shadow-2xl relative shrink-0">
                                        {i + 1}
                                        {i < howItWorks.length - 1 && (
                                            <div className="hidden lg:block absolute -right-[150%] top-1/2 -translate-y-1/2 w-full h-1 bg-gray-50 border-dashed border-t-2 opacity-30"></div>
                                        )}
                                    </div>
                                    <p className="text-2xl font-black text-[#581C87] uppercase tracking-tighter max-w-[250px] leading-tight">
                                        {step}
                                    </p>
                                </motion.div>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-24 lg:py-40 bg-[#581C87]/5">
                <div className="w-full px-8 md:px-16 lg:px-24">
                    <div className="grid lg:grid-cols-2 gap-24 items-center w-full">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-orange-500 font-black tracking-[0.3em] uppercase text-xs mb-6 block">Why Choose Eskoolia</span>
                            <h2 className="font-display text-5xl lg:text-7xl font-black text-[#581C87] mb-10 uppercase tracking-tight leading-[1]">Deliver Real Results.</h2>
                            <div className="space-y-8">
                                {benefits.map((benefit, i) => (
                                    <div key={i} className="flex gap-6 items-start">
                                        <div className="mt-1 h-8 w-8 rounded-full bg-orange-500 text-white flex items-center justify-center shrink-0 shadow-lg shadow-orange-500/30">
                                            <CheckCircle2 className="h-5 w-5" />
                                        </div>
                                        <p className="text-2xl font-black text-[#581C87] uppercase tracking-tight">{benefit}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-16 rounded-[64px] shadow-2xl border border-gray-50 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-40 h-40 bg-orange-500/10 rounded-bl-full"></div>
                            <h3 className="text-3xl font-black text-[#581C87] mb-8 uppercase tracking-tight">Drive Business Outcomes</h3>
                            <p className="text-xl text-[#581C87]/60 font-medium leading-relaxed mb-12">
                                Experience a measurable increase in engagement and efficiency within the first 30 days of implementation.
                            </p>
                            <Button className="h-18 px-14 rounded-full bg-orange-500 hover:bg-[#581C87] text-white font-black text-xl shadow-2xl shadow-orange-500/20 uppercase transition-all" asChild>
                                <Link to="/pricing">View Pricing Plans</Link>
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 bg-[#581C87] relative overflow-hidden text-center text-white">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(194,65,12,0.1),transparent)]"></div>
                <div className="w-full px-8 md:px-16 lg:px-24 relative z-10">
                    <h2 className="font-display text-4xl md:text-7xl font-black mb-12 max-w-6xl mx-auto leading-tight uppercase tracking-tight">Take control of your school <br /><span className="text-orange-500">Join Eskoolia TODAY.</span></h2>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <Button size="lg" className="h-18 px-14 rounded-full bg-orange-500 hover:bg-white hover:text-[#581C87] text-white font-black text-xl border-none shadow-2xl" asChild>
                            <Link to="/register">JOIN NOW FREE</Link>
                        </Button>
                        <Button size="lg" variant="outline" className="h-18 px-14 rounded-full border-2 border-white/30 bg-white/5 hover:bg-white hover:text-[#581C87] text-white font-black text-xl backdrop-blur-md shadow-2xl" asChild>
                            <Link to="/contact">CONTACT SALES</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProductSuiteLayout;
