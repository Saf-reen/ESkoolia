import { useState, useEffect, useRef } from "react";
import { Phone, Mail, Share2 } from "lucide-react";
import {
    FaLinkedinIn,
    FaFacebookF,
    FaYoutube,
    FaInstagram,
    FaWhatsapp,
} from "react-icons/fa";

const FloatingButtons = () => {
    const [phoneOpen, setPhoneOpen] = useState(false);
    const [mailOpen, setMailOpen] = useState(false);
    const [shareOpen, setShareOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Use refs for tap counters to persist across renders
    const phoneTapRef = useRef(0);
    const mailTapRef = useRef(0);
    const shareTapRef = useRef(0);

    useEffect(() => {
        if (typeof window !== "undefined") {
            setIsMobile(window.innerWidth < 768);

            const handleResize = () => setIsMobile(window.innerWidth < 768);
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }
    }, []);

    const handlePhoneTap = () => {
        if (!isMobile) {
            window.location.href = "tel:+919701314138";
            return;
        }

        phoneTapRef.current++;
        if (phoneTapRef.current === 1) {
            setPhoneOpen(!phoneOpen);
            setTimeout(() => (phoneTapRef.current = 0), 350);
        } else if (phoneTapRef.current === 2) {
            window.location.href = "tel:+919701314138";
            phoneTapRef.current = 0;
        }
    };

    const handleMailTap = () => {
        if (!isMobile) {
            window.location.href = "mailto:support@eskoolia.com";
            return;
        }

        mailTapRef.current++;
        if (mailTapRef.current === 1) {
            setMailOpen(!mailOpen);
            setTimeout(() => (mailTapRef.current = 0), 350);
        } else if (mailTapRef.current === 2) {
            window.location.href = "mailto:support@eskoolia.com";
            mailTapRef.current = 0;
        }
    };

    const handleShareTap = () => {
        if (!isMobile) return;

        shareTapRef.current++;
        if (shareTapRef.current === 1) {
            setShareOpen(!shareOpen);
            setTimeout(() => (shareTapRef.current = 0), 350);
        } else if (shareTapRef.current === 2) {
            if (navigator.share) {
                navigator.share({
                    title: "Website",
                    url: "https://www.eskoolia.com/",
                });
            }
            shareTapRef.current = 0;
        }
    };

    return (
        <>
            <div className="fixed right-2 top-1/4 z-50 flex flex-col gap-3 items-end">
                {/* PHONE */}
                <div
                    className={`
              bg-orange-500 h-12 flex items-center shadow-lg rounded-md transition-all duration-500 ease-in-out overflow-hidden cursor-pointer
              ${phoneOpen ? "w-[180px]" : "w-12"}
            `}
                    onMouseEnter={() => !isMobile && setPhoneOpen(true)}
                    onMouseLeave={() => !isMobile && setPhoneOpen(false)}
                    onClick={handlePhoneTap}
                >
                    <div className="w-12 h-12 flex items-center justify-center flex-shrink-0 text-white">
                        <Phone size={22} />
                    </div>

                    <div className={`whitespace-nowrap text-white font-medium pr-4 transition-opacity duration-300 ${phoneOpen ? "opacity-100" : "opacity-0"}`}>
                        +91 97013 14138
                    </div>
                </div>

                {/* MAIL */}
                <div
                    className={`
              bg-orange-500 h-12 flex items-center shadow-lg rounded-md transition-all duration-500 ease-in-out overflow-hidden cursor-pointer
              ${mailOpen ? "w-[240px]" : "w-12"}
            `}
                    onMouseEnter={() => !isMobile && setMailOpen(true)}
                    onMouseLeave={() => !isMobile && setMailOpen(false)}
                    onClick={handleMailTap}
                >
                    <div className="w-12 h-12 flex items-center justify-center flex-shrink-0 text-white">
                        <Mail size={22} />
                    </div>

                    <div className={`whitespace-nowrap text-white font-medium pr-2 transition-opacity duration-300 ${mailOpen ? "opacity-100" : "opacity-0"}`}>
                        support@eskoolia.com
                    </div>
                </div>

                {/* SHARE */}
                <div
                    className={`
              bg-orange-500 h-12 flex items-center shadow-lg rounded-md transition-all duration-500 ease-in-out overflow-hidden cursor-pointer
              ${shareOpen ? "w-[200px]" : "w-12"}
            `}
                    onMouseEnter={() => !isMobile && setShareOpen(true)}
                    onMouseLeave={() => !isMobile && setShareOpen(false)}
                    onClick={handleShareTap}
                >
                    <div className="w-12 h-12 flex items-center justify-center flex-shrink-0 text-white">
                        <Share2 size={22} />
                    </div>

                    <div className={`flex gap-4 items-center transition-opacity duration-300 ${shareOpen ? "opacity-100" : "opacity-0"}`}>
                        <div className="flex justify-center gap-4 text-lg text-white">

                            <a
                                href="https://www.linkedin.com/company/eskoolia/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaLinkedinIn className="text-white hover:text-orange-400 cursor-pointer" />
                            </a>

                            <a
                                href="https://www.facebook.com/eskoolia/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaFacebookF className="text-white hover:text-orange-400 cursor-pointer" />
                            </a>

                            <a
                                href="https://www.youtube.com/@Eskoolia"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaYoutube className="text-white hover:text-orange-400 cursor-pointer" />
                            </a>

                            <a
                                href="https://www.instagram.com/eskoolia_/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaInstagram className="text-white hover:text-orange-400 cursor-pointer" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* WhatsApp quick chat button */}
            <a
                aria-label="Chat on WhatsApp"
                href={`https://wa.me/919701314138?text=${encodeURIComponent("Hi, I visited your website and would like to know more about your IT services.")}`}
                target="_blank"
                rel="noreferrer noopener"
                className="fixed right-6 bottom-36 z-[9999] bg-green-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:h-16 hover:w-16 hover:shadow-2xl transition-all duration-300"
            >
                <FaWhatsapp className="w-8 h-8" />
            </a>
        </>
    );
};

export default FloatingButtons;
