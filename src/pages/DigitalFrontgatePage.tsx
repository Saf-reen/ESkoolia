import React from 'react';
import ProductSuiteLayout from '@/components/layout/ProductSuiteLayout';

const DigitalFrontgatePage = () => {
    return (
        <ProductSuiteLayout
            title="Digital Frontgate"
            subtitle="Your Complete Digital Growth & Admissions Engine"
            description="Digital Frontgate helps schools build a strong online presence, attract enquiries, and convert admissions seamlessly through integrated digital systems."
            primaryCTA="Start Growing Digitally"
            secondaryCTA="Book a Demo"
            features={[
                { title: "Professional SEO-Optimized Website", desc: "A modern, mobile-friendly website designed to rank on Google when parents search for schools in your area." },
                { title: "Admissions Landing Page", desc: "A dedicated enquiry page that captures parent interest anytime, even outside office hours." },
                { title: "Social Media Content", desc: "12 months of ready-to-post content for Facebook and Instagram to ensure consistent engagement." },
                { title: "Admissions Landing Page", desc: "A 24/7 online enquiry form for parents to capture leads even outside office hours." },
                { title: "Microsoft 365 Integration", desc: "Professional @schoolname.com email & Free Microsoft 365 Education setup for your institution." }
            ]}
            howItWorks={[
                "Initial Setup & Branding",
                "Digital Presence Launch",
                "Enquiry Capture & Conversion"
            ]}
            benefits={[
                "Increase student enquiries",
                "Improve school branding",
                "Structured admissions process",
                "Better online market reach"
            ]}
            finalCTATitle="Modernize Your School's Digital Presence for 2026."
        />
    );
};

export default DigitalFrontgatePage;
