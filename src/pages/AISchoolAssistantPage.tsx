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
                { title: "WhatsApp Chatbot", desc: "Automated responses and instant query handling directly on WhatsApp." },
                { title: "Digital School Assistant", desc: "24/7 Q&A for admissions, fee queries, and general school information." },
                // { title: "Enquiry Automation", desc: "Capture leads and admission enquiries automatically via WhatsApp conversations." },
                { title: "Support Agent System", desc: "WhatsApp-based support with human takeover options for complex queries." },
                { title: "Conversation Logs", desc: "Track and monitor all parent engagements with detailed interaction analytics." },
                { title: "AI-enhanced LLM", desc: "Advanced AI support powered by Large Language Models for school-specific context." }
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
