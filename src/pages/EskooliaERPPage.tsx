import React from 'react';
import ProductSuiteLayout from '@/components/layout/ProductSuiteLayout';

const EskooliaERPPage = () => {
    return (
        <ProductSuiteLayout
            title="Eskoolia ERP"
            subtitle="Complete School Management Operating System"
            description="Eskoolia ERP streamlines academic and administrative operations into one centralized, secure, and scalable platform."
            primaryCTA="Digitize Your School Operations"
            secondaryCTA="Request a Demo"
            features={[
                { title: "School Management", desc: "Digital student records, staff management, and automated attendance tracking." },
                { title: "Academic Operations", desc: "Centralized timetable and examination management with automated result generation." },
                { title: "Administration Module", desc: "Automated fees management, expense tracking, and real-time reports & analytics." },
                { title: "Mobile Application", desc: "Native Android application for instant parent, student, and staff access." },
                { title: "Centralized Dashboard", desc: "Real-time overview of all school departments on a single interactive screen." },
                { title: "Inventory & Assets", desc: "Efficiently manage school supplies, inventory items, and institutional assets." }
            ]}
            howItWorks={[
                "Database Migration",
                "Staff & Admin Training",
                "Full System Deployment"
            ]}
            benefits={[
                "Unmatched operational efficiency",
                "Reduced paperwork & manual errors",
                "Centralized administrative control",
                "Real-time actionable insights"
            ]}
            finalCTATitle="The ultimate operating system for modern schools."
        />
    );
};

export default EskooliaERPPage;
