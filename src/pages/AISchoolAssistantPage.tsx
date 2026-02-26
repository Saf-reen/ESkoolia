import React from 'react';
import ProductSuiteLayout from '@/components/layout/ProductSuiteLayout';

const AISchoolAssistantPage = () => {
    return (
        <ProductSuiteLayout
            title="AI School Assistant"
            subtitle="24/7 Intelligent Communication for Schools"
            description="The AI School Assistant automates communication, handles enquiries, and provides instant support through WhatsApp-powered chatbot technology."
            primaryCTA="Enable Smart Communication"
            secondaryCTA="Talk to Sales"
            features={[
                { title: "For Parents: Instant Support", desc: "Instant fee balance checks, exam schedules, and event announcements directly on WhatsApp." },
                { title: "For Teachers: Efficiency", desc: "Instant circular distribution and lesson plan assistance to reduce administrative friction." },
                { title: "For Admin: Automation", desc: "Instant fee collection reports and automated student enquiry responses 24/7." },
                { title: "WhatsApp-Powered Helpdesk", desc: "A modern, 24/7 mobile-friendly assistant that keeps your school connected." },
                { title: "Smart Circulars", desc: "Broadcast important school announcements and event updates instantly to all stakeholders." },
                { title: "Enquiry Conversions", desc: "Capture and respond to potential admission enquiries automatically, even after office hours." }
            ]}
            howItWorks={[
                "WhatsApp API Connection",
                "AI Knowledge Mapping",
                "Automated Support Launch"
            ]}
            benefits={[
                "24/7 availability for parents",
                "Massive reduction in admin workload",
                "Lightning-fast communication",
                "Significantly improved response times"
            ]}
            finalCTATitle="Upgrade your school with AI-powered communication today."
        />
    );
};

export default AISchoolAssistantPage;
