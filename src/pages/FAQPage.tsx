import { useState } from "react";
import { ChevronDown, ChevronUp, Search, MessageSquare, HelpCircle } from "lucide-react";
import PageHeader from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const faqs = [
    {
        question: "How can we can make payment to purchase eSkoolia?",
        answer: "You can purchase eSkoolia using your Credit or Debit card. You can also buy it using Wire Transfer."
    },
    {
        question: "How can I resell eSkoolia? Also need more details about Business package.",
        answer: "Our business package is a completely white labeled cloud based system. It means you can install it on your own hosting under your domain name. In the business package you will get complete source code along with documentation and 5 years technical support. Moreover you will get a reseller permit so that you can sell it under your company brand at your own pricing. You will get 50 premium licenses in business package at only $999. Your minimum profit can be over $6,000 as our resellers usually sell one license at $599."
    },
    {
        question: "How can I get technical support?",
        answer: "If you need any technical support please contact us on WhatsApp at +923460204447 for a quick chat or email us on support@eskooly.com. Please note: always send your order ID with the support request to get an instant reply."
    },
    {
        question: "Where I can download/get my mobile Apps?",
        answer: "As in the premium and business packages, you will get branded mobile apps designed with your school logo and name. You need to contact us on WhatsApp at +923460204447 for the download link of your mobile apps. Our team starts the development of your mobile apps once you purchase and install the software."
    },
    {
        question: "Can parents pay students fees online?",
        answer: "Absolutely YES! Paying fees online is available. You will get the option to enable and integrate any payment gateway in the pro version. PayPal and Stripe's integration is already there."
    },
    {
        question: "Which option is better to manage my school?",
        answer: "eSkoolia is the world's most powerful and easiest school management software. We recommend the basic desktop version for small schools without much technical experience. However, for a complete professional ERP with branding and advanced features, you must go with the premium package."
    },
    {
        question: "What is the difference between eSkoolia Desktop and eSkoolia?",
        answer: "eSkoolia Desktop is a paid version installed on your local computer, easy to operate with automatic cloud backup. eSkoolia is completely white-labeled cloud-based software that you install on your own hosting. It is more professional and feature-rich with a slightly more complex interface."
    },
    {
        question: "How we can generate Students, Parents, and Staff logins?",
        answer: "Once you add any new student or staff, the system automatically generates their username and password. The default username will be their email address and default password will be 123456."
    },
    {
        question: "Is there a Desktop version for the eSkoolia?",
        answer: "As our Pro version is a completely white-labeled cloud-based system, it means you can access it from anywhere, anytime, and on any device using any browser."
    },
    {
        question: "What is the difference between eSkoolia and eSkoolia?",
        answer: "eSkoolia is a free online school management software for a lifetime with basic modules. Whereas eSkoolia is an Ultimate Education ERP and it's a full-featured professional paid version."
    },
    {
        question: "What languages are the mobile application developed with?",
        answer: "Our mobile applications are developed using Flutter, ensuring a high-performance, native experience on both Android and iOS."
    },
    {
        question: "Does eSkoolia sends the fees reminders to parents or students?",
        answer: "Absolutely YES! Once you assign a new fee to any student, the system automatically sends a notification to both parents and student about the assigned payment."
    },
    {
        question: "Is WhatsApp integration is available?",
        answer: "Yes. WhatsApp integration is available in our business package to enhance your communication with parents and staff."
    },
    {
        question: "Do you offer any additional discount for Pro version?",
        answer: "Unfortunately, we don't offer any further discount for the pro version as it's already priced at a highly competitive and discounted rate."
    },
    {
        question: "How many students can I manage with one licence?",
        answer: "Unlimited. You can manage as many students and staff members as your institution requires without any extra fees."
    },
    {
        question: "Do we get a school website too?",
        answer: "Absolutely YES. There is a built-in website CMS available in our Pro version. You don't need any technical person to manage it because you can do everything quite easily."
    }
];

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const [searchQuery, setSearchQuery] = useState("");

    const filteredFaqs = faqs.filter(faq =>
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="bg-white min-h-screen">
            <PageHeader title="Frequently Asked Questions" />

            {/* Hero Search Section */}
            <section className="py-16 lg:py-24 bg-white border-b border-gray-50">
                <div className="w-full px-6 text-center">
                    <span className="text-orange-500 font-bold tracking-widest uppercase text-xs mb-3 block">Support Center</span>
                    <h2 className="font-display text-4xl lg:text-6xl font-black text-[#581C87] mb-8 uppercase tracking-tighter">
                        Questions & <span className="text-orange-500">Answers</span>
                    </h2>
                    <div className="max-w-3xl mx-auto relative group">
                        <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-[#581C87]/70 h-6 w-6 group-focus-within:text-orange-500 transition-colors" />
                        <input
                            type="text"
                            placeholder="Search your question here..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full h-16 pl-16 pr-8 rounded-full border-2 border-gray-50 focus:border-orange-500 outline-none text-lg font-medium shadow-sm transition-all focus:shadow-xl"
                        />
                    </div>
                    <p className="mt-8 text-[#581C87]/60 font-medium">
                        Can't find what you're looking for? <a href="/contact" className="text-[#581C87] hover:text-orange-500 font-bold underline transition-colors">Contact us</a>
                    </p>
                </div>
            </section>

            {/* FAQ Grid */}
            <section className="py-20">
                <div className="w-full px-6">
                    <div className="grid lg:grid-cols-12 gap-12">

                        {/* Sidebar Support */}
                        <div className="lg:col-span-4 space-y-6">
                            <div className="bg-[#581C87] p-8 rounded-[40px] text-white relative overflow-hidden group shadow-2xl">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                                <HelpCircle className="h-12 w-12 text-orange-500 mb-6" />
                                <h3 className="text-2xl font-black uppercase mb-4">Need More Help?</h3>
                                <p className="text-white/80 font-medium mb-8">If our FAQ didn't answer your question, please don't hesitate to reach out to our dedicated support team via live chat or email.</p>
                                <Button className="w-full h-14 bg-orange-500 hover:bg-orange-600 text-white font-black rounded-2xl shadow-lg transition-all" asChild>
                                    <a href="https://wa.me/+923460204447" target="_blank" rel="noopener noreferrer">
                                        <MessageSquare className="mr-2 h-5 w-5" /> CHAT WITH US
                                    </a>
                                </Button>
                            </div>

                            <div className="bg-gray-50 p-8 rounded-[40px] border border-gray-50">
                                <h4 className="text-[#581C87] font-black uppercase mb-6">Quick Links</h4>
                                <ul className="space-y-4">
                                    {[
                                        { label: "Our Documentation", href: "/docs" },
                                        { label: "Community Forum", href: "#" },
                                        { label: "Product Roadmap", href: "#" },
                                        { label: "Technical Support", href: "/contact" }
                                    ].map((link, i) => (
                                        <li key={i}>
                                            <a href={link.href} className="text-[#581C87]/70 hover:text-orange-500 font-bold flex items-center transition-colors">
                                                <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                                                {link.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* main Accordion Area */}
                        <div className="lg:col-span-8">
                            <div className="space-y-4">
                                {filteredFaqs.length > 0 ? (
                                    filteredFaqs.map((faq, i) => (
                                        <div
                                            key={i}
                                            className={`rounded-3xl border transition-all duration-300 ${openIndex === i ? "border-[#581C87] shadow-xl bg-white" : "border-gray-50 bg-gray-50/50 hover:bg-white"}`}
                                        >
                                            <button
                                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                                className="w-full px-8 py-6 text-left flex items-center justify-between gap-4"
                                            >
                                                <span className={`text-lg font-black transition-colors ${openIndex === i ? "text-[#581C87]" : "text-[#581C87]/70"}`}>
                                                    {faq.question}
                                                </span>
                                                {openIndex === i ? (
                                                    <ChevronUp className="h-6 w-6 text-[#581C87] shrink-0" />
                                                ) : (
                                                    <ChevronDown className="h-6 w-6 text-[#581C87]/70 shrink-0" />
                                                )}
                                            </button>
                                            {openIndex === i && (
                                                <div className="px-8 pb-8">
                                                    <div className="h-px bg-gray-50 mb-6"></div>
                                                    <p className="text-[#581C87]/70 font-medium leading-relaxed text-lg">
                                                        {faq.answer}
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    ))
                                ) : (
                                    <div className="text-center py-20 bg-gray-50 rounded-[40px] border-2 border-dashed border-gray-50">
                                        <HelpCircle className="h-16 w-16 text-[#581C87]/70 mx-auto mb-4" />
                                        <h3 className="text-xl font-bold text-[#581C87]/60 uppercase">No questions found matching "{searchQuery}"</h3>
                                        <Button onClick={() => setSearchQuery("")} variant="link" className="text-[#581C87] font-bold mt-2">Clear Search</Button>
                                    </div>
                                )}
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-[#581C87] text-white text-center">
                <div className="w-full px-6">
                    <h2 className="font-display text-3xl md:text-5xl font-black mb-8 uppercase tracking-tighter">Still have questions in your mind?</h2>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <Button size="lg" className="rounded-full h-14 px-12 bg-orange-500 hover:bg-orange-600 text-white font-black text-lg shadow-xl" asChild>
                            <Link to="/contact">SUPPORT CENTER</Link>
                        </Button>
                        <Button size="lg" variant="outline" className="rounded-full h-14 px-12 border-2 border-white/30 text-white font-black text-lg hover:bg-white/10" asChild>
                            <a href="https://wa.me/+923460204447" target="_blank" rel="noopener noreferrer">LIVE CHAT NOW</a>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
