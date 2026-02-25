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
                { title: "Custom School Website", desc: "Professionally designed website with custom domain and school branding." },
                { title: "Digital Marketing", desc: "Integrated social media campaigns and online growth strategies tailored for schools." },
                // { title: "Enquiry Management", desc: "Efficiently capture school enquiries and track contact details in a centralized system." },
                { title: "Official Email Setup", desc: "Microsoft-based custom domain email setup for professional school communication." },
                { title: "Admission Funnel", desc: "A structured enquiry-to-admission workflow to maximize student conversion." },
                { title: "E-learning Model", desc: "Optional school LLM integration and digital learning environment setup." }
            ]}
            howItWorks={[
                "Initial Setup & Branding",
                "Digital Presence Launch",
                // "Enquiry Capture & Conversion"
            ]}
            benefits={[
                "Increase student enquiries",
                "Improve school branding",
                "Structured admissions process",
                "Better online market reach"
            ]}
            finalCTATitle="Ready to revolutionize your school's online presence?"
        />
    );
};

export default DigitalFrontgatePage;
