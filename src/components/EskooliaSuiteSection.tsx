import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const EskooliaSuiteSection = () => {
    return (
        <section className="relative py-24 pb-32 overflow-hidden bg-gradient-to-b from-[#f5f2fa] to-[#ffffff] lg:py-32">
            <div className="px-8 md:px-16 lg:px-24 w-full relative z-10">
                {/* Section Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center mb-16 lg:mb-20"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#483285] tracking-[0.02em] leading-[1.2] mb-6">
                        Explore the Eskoolia Suite — <br className="hidden md:block" /> Built for Next-Gen Schools
                    </h2>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: 60 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-1 bg-[#483285] mx-auto rounded-full"
                    />
                </motion.div>

                {/* Side-by-Side Unified Layout */}
                <div className="grid lg:grid-cols-2 gap-20 items-center w-full">

                    {/* Left Column: Animated Suite Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative"
                    >
                        <motion.div
                            animate={{
                                y: [0, -15, 0],
                            }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="relative z-10"
                        >
                            {/* Glowing background blob specific to image */}
                            <div className="absolute inset-0 bg-[#483285]/10 rounded-full blur-[80px] -z-10" />

                            <img
                                src="/suite.png"
                                alt="Eskoolia Suite Architecture"
                                className="w-full h-auto drop-shadow-[0_20px_50px_rgba(72,50,133,0.15)] rounded-[32px] transition-all duration-500 hover:scale-[1.02]"
                            />
                        </motion.div>
                    </motion.div>

                    {/* Right Column: Content Architecture */}
                    <div className="flex flex-col gap-10">
                        {/* Main Paragraph Block */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#483285]/5 text-[#483285] font-bold text-sm mb-6 uppercase tracking-wider">
                                <div className="w-2 h-2 rounded-full bg-[#483285] animate-pulse" />
                                Unified Ecosystem
                            </div>
                            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-medium">
                                "The Eskoolia Suite is a unified digital ecosystem designed to help schools manage admissions, operations, and communication — all in one powerful platform."
                            </p>
                        </motion.div>

                        {/* Vertical Module Blocks */}
                        <div className="flex flex-col gap-8">
                            {[
                                {
                                    title: "Digital Frontgate",
                                    desc: "Attract and enroll students seamlessly with a modern online presence.",
                                    href: "/digital-frontgate"
                                },
                                {
                                    title: "Eskoolia ERP",
                                    desc: "Streamline academic and administrative operations efficiently.",
                                    href: "/eskoolia-erp"
                                },
                                {
                                    title: "AI Assistant",
                                    desc: "24/7 WhatsApp helpdesk for instant responses.",
                                    href: "/ai-assistant"
                                }
                            ].map((block, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.4 + (i * 0.1) }}
                                >
                                    <Link to={block.href} className="flex gap-6 group cursor-pointer">
                                        <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#483285]/10 text-[#483285] group-hover:bg-[#483285] group-hover:text-white transition-all duration-300">
                                            <span className="font-bold">{i + 1}</span>
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="text-[#483285] font-bold text-xl mb-1 tracking-tight inline-block relative">
                                                {block.title}
                                                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#483285] transition-all duration-300 group-hover:w-full"></span>
                                            </h4>
                                            <p className="text-gray-500 text-lg leading-relaxed">
                                                {block.desc}
                                            </p>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>

                        {/* CTA or Secondary reinforcement info can go here */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.8 }}
                            className="pt-4"
                        >
                            <p className="text-gray-500 italic text-base">
                                Improve efficiency and enhance the overall school experience.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-40 -left-20 w-80 h-80 bg-[#483285]/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-20 -right-20 w-96 h-96 bg-[#483285]/8 rounded-full blur-[120px]" />
                {/* Subtle dot pattern */}
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#483285 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
            </div>
        </section>
    );
};

export default EskooliaSuiteSection;
