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
                { title: "Fee Management", desc: "Automated collection, digital receipts, and comprehensive defaulter reports." },
                { title: "Staff & Payroll", desc: "HR management and monthly school payroll generation in just one click." },
                { title: "Academics", desc: "Exam marks entry, automated report cards, student rankings, and performance analysis." },
                { title: "Mobile Applications", desc: "Dedicated Android & iOS apps included for parents, students, and teachers." },
                { title: "Security & Cloud", desc: "Secure Cloud Data storage accessible from anywhere, ensuring 99.9% uptime." },
                { title: "Attendance & Alerts", desc: "Real-time attendance tracking with instant SMS and App alerts to parents." }
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
