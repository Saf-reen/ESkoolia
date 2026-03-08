import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Shield,
  Monitor,
  CheckCircle2,
  ArrowRight,
  Globe,
  Grid,
  Zap,
  Star,
  Play,
  FileText,
  HelpCircle,
  Map,
  BadgeCheck,
  CreditCard,
  ShoppingCart,
  Server,
  Layers,
  Lock,
  MapPin,
  Clock,
  MessageSquare,
  Database,
  Settings
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";
import dashboardMockup from "@/assets/dashboard-mockup.png";
import EskooliaSuiteSection from "@/components/EskooliaSuiteSection";


const localAdvantages = [
  {
    icon: MessageSquare,
    bg: "bg-gradient-to-r from-purple-600 to-orange-600",
    text: "text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-orange-600",
    bgLight: "bg-gray-50",
    title: "Telugu Support",
    desc: "No call centers. Speak your language. Get help in Telugu from our Hyderabad-based support team."
  },
  {
    icon: MapPin,
    bg: "bg-[#581C87]",
    text: "text-[#581C87]",
    bgLight: "bg-gray-50",
    title: "In-School Setup",
    desc: "We come to your school to install everything and train your staff in person. No remote guesswork."
  },
  {
    icon: Zap,
    bg: "bg-gradient-to-r from-purple-600 to-orange-600",
    text: "text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-orange-600",
    bgLight: "bg-gray-50",
    title: "Same-Day Response",
    desc: "We are in Telangana, not Bangalore. When you have a problem, our local team solves it fast."
  },
  {
    icon: Star,
    bg: "bg-[#581C87]",
    text: "text-[#581C87]",
    bgLight: "bg-gray-50",
    title: "Education Specialists",
    desc: "We understand your specific local fee structures and exam patterns better than anyone else."
  }
];



const moreFeatures = [
  { icon: Zap, label: "Fast Performance" },
  { icon: Settings, label: "Easy Customize" },
  { icon: Layers, label: "Pure & Elegant" },
  { icon: Lock, label: "Secure Data" },
  { icon: Server, label: "Quick Access" },
  { icon: Clock, label: "24/7 Support" }
];


const selfFeatures = [
  {
    title: "Mobile Apps Available",
    desc: "This application provided on-time information and share specified information via any android and iOS operated mobile phone. Management, Stuff, Student, Teacher, and other Institution involved person can get access and update any information instantly."
  },
  {
    title: "Color, Design, Code & Customization",
    desc: "With due respect to other school management system providers in the market, we have noticed that most of them have put little emphasis on the color palettes and front-end design of the system. So we put some extra care in it because of the look matters for the people who will be using them."
  },
  {
    title: "UI & UX Ready",
    desc: "Design happens to be your silent ambassador. With the end level users in mind, this platform has been designed with a super intuitive and minimalistic approach. Its user-friendliness is its gorgeousness."
  },
  {
    title: "Documentation",
    desc: "The documentation guide is pretty comprehensive and divided into palatable parts. From beginner to advanced users, this documentation guide is generally enough to get the system up and running. We are continuously updating it to cover all your probable."
  }
];

const faqs = [
  { q: "Remove the branding is it possible?", a: "Yes it’s possible, You can change what you want." },
  { q: "Can I Track my Child’s Attendance?", a: "Yes, of course, You can see child attendance status from Parents dashboard" },
  { q: "Have any Identity card printing feature?", a: "Yes, Our ERP system can generate instant printable id card" },
  { q: "Any option to Sending SMS for late attendance / fees payment / homework / events or other activities?", a: "Yes, Option available." },
  { q: "Push notification added?", a: "Yes, our push notification system can informs some important info instantly." },
  { q: "Is it Multi-School?", a: "No. It’s single. (If anyone need, should need to buy another license or buy our business plan to get license for 50 schools)" },
  { q: "Can you develop customization as required?", a: "Yes, we have experienced developer; who can provide your required based system." },
  { q: "Is it generating report card?", a: "Yes, you can generator report card anytime" },
  { q: "New student registration system?", a: "Yes, we have an auto pre-built registration form for student registration." },
  { q: "Can we use it with localhost?", a: "Yes, our software system is familiar with localhost server." },
];

const stats = [
  { label: "North America", value: "30.7%", color: "bg-gradient-to-r from-purple-600 to-orange-600", position: "top-[20%] left-[10%]" },
  { label: "North Europe", value: "13.4%", color: "bg-gradient-to-r from-purple-600 to-orange-600", position: "top-[15%] right-[30%]" },
  { label: "Asia", value: "24.4%", color: "bg-blue-500", position: "top-[40%] right-[10%]" },
  { label: "South America", value: "6.8%", color: "bg-purple-500", position: "bottom-[20%] left-[20%]" },
  { label: "Africa", value: "21.8%", color: "bg-rose-700", position: "bottom-[30%] right-[40%]" },
  { label: "Australia", value: "3%", color: "bg-purple-400", position: "bottom-[10%] right-[15%]" },
];

const testimonials = [
  {
    text: "High-quality design and incredible functions highly recommend this to everyone",
    rating: 5
  },
  {
    text: "I really like their support as they reply in seconds and solve the issues in minutes. I really like their efforts and their support. Also, they consider your suggestions to make their application even better!",
    rating: 5
  },
  {
    text: "Great code Great Developers!! they will make it work for you. strongly recomend!",
    rating: 5
  },
  {
    text: "This is just the kind of management system I'd always hoped for!!",
    rating: 5
  },
  {
    text: "I was searching a school management software from a long time, finally i found eSkoolia. eSkoolia has fulfill my all requirements that i was searching. Many congratulations to eSkoolia team for make a excellent School ERP.",
    rating: 5
  },
  {
    text: "highly satisfied with your product. thanks a lot",
    rating: 5
  }
];


export default function HomePage() {
  const [typedText, setTypedText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showVideo, setShowVideo] = useState(false)
  const words = [" Training Center", " School", " College", " Institute", " Academy", " Tution Center"];
  const typingSpeed = isDeleting ? 50 : 150;

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[wordIndex];
      if (isDeleting) {
        setTypedText(currentWord.substring(0, typedText.length - 1));
      } else {
        setTypedText(currentWord.substring(0, typedText.length + 1));
      }

      if (!isDeleting && typedText === currentWord) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && typedText === "") {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [typedText, isDeleting, wordIndex, words]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section
        className="relative overflow-hidden pb-8 pt-8 lg:pt-40 bg-white min-h-screen flex flex-col items-center justify-center cursor-purple-section"
      >


        <div className="w-full relative z-10 px-6 lg:px-12 xl:px-16 2xl:px-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full max-w-[1800px] mx-auto">
            {/* L E F T :  C O N T E N T */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"
            >
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-purple-600 to-orange-50 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-orange-600 font-bold text-sm tracking-wide mb-8 border border-orange-200 shadow-sm">
                <MapPin className="w-3.5 h-3.5" />
                Serving Tier 2 & Tier 3 Schools in Telangana
              </div>
              <h1 className="mb-6 font-display text-5xl font-extrabold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl text-[#581C87]">
                Manage your entire <br />
                <span className="relative inline-block mt-2 min-h-[1.1em]">
                  <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-orange-600">{typedText}</span>
                  <span className="absolute bottom-2 left-0 w-full h-2 bg-gradient-to-r from-purple-600 to-orange-600 opacity-20 rounded-full"></span>
                  <span className="inline-block w-[3px] h-[40px] md:h-[50px] bg-orange-600 ml-2 align-middle -mt-2 animate-pulse"></span>
                </span>
                <span className="block mt-4">from one platform.</span>
              </h1>

              <p className="text-xl md:text-2xl text-[#581C87]/80 max-w-xl mb-6 font-medium leading-relaxed">
                Streamline admissions, automate operations, and scale your institution with the world's most intuitive school management suite.
              </p>
              <p className="text-lg md:text-xl text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-orange-600 font-semibold mb-10 max-w-xl">
                Built specifically for Tier 2 & Tier 3 schools across Telangana.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 items-center sm:justify-start">
                <Button size="lg" aria-label="Book a free demo" className="rounded-full w-full sm:w-auto h-14 px-10 text-lg shadow-[0_15px_30px_rgba(88,28,135,0.2)] transition-all font-bold bg-gradient-to-r from-purple-600 to-orange-600 text-white hover:bg-[#581C87] border-none transform hover:-translate-y-1" asChild>
                  <a href="https://eskooly.pro/login" target="_blank" rel="noopener noreferrer">Book a Demo</a>
                </Button>
                <div
                  onClick={() => setShowVideo(true)}
                  className="flex items-center group cursor-pointer justify-center w-full sm:w-auto"
                >
                  <div className="flex items-center justify-center w-14 h-14 rounded-full border border-gray-200 group-hover:border-orange-200 group-hover:bg-gradient-to-r from-purple-600 to-orange-50 transition-all mr-4 bg-white shadow-sm">
                    <Play className="w-5 h-5 fill-orange-600 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-orange-600 ml-1" />
                  </div>
                  <span className="text-xl font-bold tracking-tight text-[#581C87] group-hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-orange-600 transition-colors">
                    Watch the Vision
                  </span>
                </div>
                {showVideo && (
                  <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
                    <div className="relative w-[90%] md:w-[800px] aspect-video">

                      {/* Close Button */}
                      <button
                        onClick={() => setShowVideo(false)}
                        className="absolute -top-10 right-0 text-white text-2xl hover:text-orange-400 transition-colors"
                        aria-label="Close video"
                      >
                        ✕
                      </button>

                      {/* YouTube Embed */}
                      <iframe
                        className="w-full h-full rounded-xl"
                        src="https://www.youtube.com/embed/48oq-rXhQeU?autoplay=1"
                        title="Vision Video"
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                      ></iframe>

                    </div>
                  </div>
                )}
              </div>
            </motion.div>

            {/* R I G H T :  I M A G E */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative perspective-[2000px] mt-10 lg:mt-0"
            >
              <div className="relative z-10 transform hover:scale-[1.02] transition-transform duration-700 drop-shadow-[0_20px_40px_rgba(39,98,33,0.2)]">
                <img src='/image-gen.png' alt="Eskoolia Dashboard" className="w-auto h-100 object-contain" />
              </div>

              {/* Accenting glow below image */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[90%] h-16 bg-[#581C87]/20 blur-[40px] -z-10"></div>

              {/* Floating badges */}
              <div className="absolute -left-6 top-1/4 bg-white p-3 rounded-2xl shadow-xl border border-gray-100 hidden md:flex items-center gap-3 animate-float z-20" style={{ animationDelay: '100ms' }}>
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center"><CheckCircle2 className="w-5 h-5 text-[#581C87]" /></div>
                <div>
                  <div className="text-sm font-bold text-[#581C87]">Auto Setup</div>
                  <div className="text-xs text-[#581C87]/60 font-medium">100% Ready</div>
                </div>
              </div>

              <div className="absolute -right-6 bottom-1/4 bg-white p-3 rounded-2xl shadow-xl border border-gray-100 hidden md:flex items-center gap-3 animate-float z-20" style={{ animationDelay: '300ms' }}>
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-orange-100 flex items-center justify-center"><Zap className="w-5 h-5 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-orange-600" /></div>
                <div>
                  <div className="text-sm font-bold text-[#581C87]">Fast Sync</div>
                  <div className="text-xs text-[#581C87]/60 font-medium">Real-time</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Floating Decorative Elements bg items updated for white background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden h-full w-full opacity-40">
          <div className="absolute top-1/4 left-[5%] w-12 h-12 border-2 border-gray-200 rounded-lg rotate-12 animate-float"></div>
          <div className="absolute bottom-1/4 right-[5%] w-16 h-16 border-2 border-orange-200 rounded-full animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle,rgba(39,98,33,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>
      </section>

      {/* Trust Bar (previously stats) */}
      {/* TrustBarSection */}
      {/* <section className="relative -mt-10 z-20 pb-20">
        <div className="container px-4">
          <div className="bg-white/90 backdrop-blur-xl rounded-[32px] shadow-lg p-8 md:p-10 flex flex-col md:flex-row justify-around items-center gap-10 border border-purple-100 max-w-6xl mx-auto"> */}

      {/* Users */}
      {/* <div className="flex flex-col items-center gap-2 text-center">
              <div className="text-5xl font-extrabold text-[#581C87]">50k+</div>
              <div className="text-[#581C87]/60 text-sm">Early Users</div>
            </div> */}

      {/* Countries */}
      {/* <div className="flex flex-col items-center gap-2 text-center">
              <div className="text-5xl font-extrabold text-[#581C87]">3+</div>
              <div className="text-[#581C87]/60 text-sm">Pilot Schools</div>
            </div> */}

      {/* Satisfaction */}
      {/* <div className="flex flex-col items-center gap-2 text-center">
              <div className="text-5xl font-extrabold text-[#581C87]">20+</div>
              <div className="text-[#581C87]/60 text-sm">ERP Modules</div>
            </div>

          </div>
        </div>
      </section> */}

      {/* Animated Eskoolia Suite Section - Signature visual identity */}
      <EskooliaSuiteSection />



      {/* Problems Section */}
      {/* Problems Section */}
      <section className="relative py-28 lg:py-36 bg-gradient-to-b from-white via-purple-50/40 to-orange-50/40 overflow-hidden">



        <div className="container mx-auto px-6 relative z-10">

          {/* Section Heading */}
          <div className="max-w-4xl mx-auto text-center mb-20">

            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-orange-600 font-bold uppercase tracking-[0.25em] text-xs mb-4 block">
              Why Sria Infotech
            </span>

            <h2 className="font-display text-4xl md:text-6xl font-extrabold text-[#581C87] leading-[1.1]">
              Traditional School Management is
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-purple-700">
                Broken
              </span>
            </h2>

            {/* Quote Block */}
            <div className="mt-10 relative max-w-3xl mx-auto">

              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-orange-600 to-purple-700 rounded-full"></div>

              <div className="ml-6 bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8">
                <p className="text-lg md:text-xl text-[#581C87]/80 font-semibold leading-relaxed italic">
                  "Unlike national ERP vendors, we are physically based in Telangana.
                  We visit your school, train your staff in person, and provide real local support when you need it."
                </p>
              </div>

            </div>

            {/* Problem Tags */}
            <div className="flex flex-wrap justify-center gap-3 mt-12">
              {[
                "Low online visibility",
                "Declining admissions",
                "Manual fee follow-ups",
                "Administrative overload",
                "Communication gaps with parents"
              ].map((item, idx) => (
                <span
                  key={idx}
                  className="px-5 py-2.5 bg-white border border-gray-100 rounded-full text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-orange-600 shadow-sm hover:shadow-md transition"
                >
                  {item}
                </span>
              ))}
            </div>

          </div>


          {/* Problem Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

            {[
              {
                title: "Low Admissions",
                desc: "Your school has no online presence. Parents search on Google and find your competitors instead of you.",
                icon: Globe
              },
              {
                title: "Fee Collection Chaos",
                desc: "Chasing parents for fees every month wastes staff time and creates embarrassing situations.",
                icon: CreditCard
              },
              {
                title: "Admin Overload",
                desc: "Attendance, exams, payroll—all done manually. Staff spend hours on work that should take minutes.",
                icon: Clock
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="group bg-white rounded-[28px] p-10 shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              >

                {/* Icon */}
                <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-[#581C87] text-white mb-6 group-hover:bg-gradient-to-r from-purple-600 to-orange-600 transition">
                  <item.icon className="w-8 h-8" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-[#581C87] mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-[#581C87]/70 leading-relaxed">
                  {item.desc}
                </p>

              </motion.div>
            ))}

          </div>

        </div>

      </section>

      {/* 4. 3 Core Solutions */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-white to-purple-50 relative overflow-hidden group/section">


        <div className="container px-6 relative z-10">
          <div className="text-center mb-24">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-orange-600 font-black uppercase tracking-[0.2em] text-sm mb-4 block">Local Advantage</span>
            <h2 className="font-display text-4xl md:text-6xl font-black text-[#581C87] mb-6 leading-[1.1] uppercase max-w-4xl mx-auto tracking-tight">
              Why Sria Infotech? <br className="hidden md:block" />We Are Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-purple-700">Local Technology Partner.</span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-orange-600 to-purple-700 mx-auto rounded-full mb-8 opacity-80"></div>
            <p className="text-xl text-[#581C87]/70 font-medium leading-relaxed max-w-3xl mx-auto">
              We've engineered three powerful modules that work in perfect harmony to transform your school into a high-performance institution.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-10 max-w-7xl mx-auto group/cards">
            {[
              {
                title: "01 Digital Frontgate",
                subtitle: "Admissions Growth Engine",
                desc: "Your complete online presence & admissions engine. Modern, mobile-friendly, and ranks on Google.",
                benefits: ["Professional SEO Website", "12 Months Social Media Content", "24/7 Enquiry Landing Page", "Microsoft 365 Education Setup"],
                cta: "Explore Frontgate",
                href: "/digital-frontgate"
              },
              {
                title: "02 Eskoolia ERP",
                subtitle: "The Operating system",
                desc: "The complete school management operating system. Automate collection, payroll, and academics.",
                benefits: ["Fee Management & Defaulter Reports", "One-Click Staff & Payroll", "Exam Marks & Automated Rankings", "Android & iOS Mobile Apps"],
                cta: "Explore ERP",
                href: "/eskoolia-erp"
              },
              {
                title: "03 AI Assistant",
                subtitle: "WhatsApp Helpdesk",
                desc: "WhatsApp-powered 24/7 school helpdesk. Automated support for parents, teachers, and admin.",
                benefits: [
                  "Instant Fee Balance Checks",
                  "Automated Fee Reminders",
                  "Exam Schedule Distribution",
                  "Instant Circular Distribution",
                  "Auto Enquiry Responses"
                ],
                cta: "Explore AI Assistant",
                href: "/ai-assistant"
              }
            ].map((sol, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="group flex flex-col bg-white rounded-[40px] border border-purple-100 shadow-xl hover:shadow-[0_40px_80px_rgba(88,28,135,0.12)] hover:-translate-y-2 transition-all duration-500 relative overflow-hidden hover:opacity-100 opacity-100 lg:group-hover/cards:opacity-70"
              >
                {/* Top Gradient Strip */}
                <div className="h-2 w-full bg-gradient-to-r from-purple-700 to-orange-600"></div>

                {/* Large faint number */}
                <div className="absolute top-8 right-6 text-8xl md:text-9xl font-black text-[#581C87] opacity-[0.03] pointer-events-none select-none transition-all duration-500 group-hover:scale-110 group-hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-orange-600 group-hover:opacity-[0.05]">
                  0{i + 1}
                </div>

                <div className="p-10 flex flex-col flex-1 relative z-10">
                  <span className="text-purple-700 font-black uppercase tracking-widest text-xs md:text-sm mb-2">{sol.title.substring(3)}</span>
                  <h3 className="text-3xl font-black text-[#581C87] mb-4 uppercase tracking-tight">{sol.subtitle}</h3>
                  <div className="w-12 h-1 bg-purple-100 mb-8 rounded-full group-hover:bg-gradient-to-r from-purple-600 to-orange-600 group-hover:w-20 transition-all duration-500"></div>

                  <p className="text-[#581C87]/70 text-lg leading-relaxed mb-10 min-h-[80px]">{sol.desc}</p>

                  <div className="space-y-3 mb-12 flex-1 relative">
                    {sol.benefits.map((b, idx) => (
                      <div key={idx} className="flex gap-4 items-center bg-purple-50 rounded-2xl p-4 group-hover:bg-gradient-to-r from-purple-600 to-orange-50 transition-colors duration-300 border border-transparent group-hover:border-orange-100">
                        <CheckCircle2 className="w-6 h-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-orange-600 shrink-0 transform group-hover:scale-110 transition-transform duration-300" />
                        <span className="font-bold text-[#581C87] text-sm md:text-base leading-tight">{b}</span>
                      </div>
                    ))}
                  </div>

                  <Button className="w-full rounded-full h-14 bg-gradient-to-r from-[#581C87] to-purple-700 hover:from-orange-600 hover:to-orange-600 text-white font-black text-lg shadow-lg hover:shadow-[0_15px_40px_rgba(249,115,22,0.4)] transition-all duration-500 uppercase tracking-tight transform group-hover:scale-[1.03] border-none" asChild>
                    <Link to={sol.href}>{sol.cta}</Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Soft Divider */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-purple-200 to-transparent opacity-50"></div>
      </section>

      {/* 5. Outcome-Driven Benefits Content */}
      <section className="py-24 lg:py-40 bg-[#581C87] text-white overflow-hidden relative cursor-purple-section">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent)]"></div>
        <div className="container px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-orange-600 font-bold tracking-[0.2em] text-sm mb-4 block text-wrap uppercase">Is Your School Ready for 2026?</span>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 leading-[1.1] tracking-tight">Engineered for <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-200">Total Excellence</span></h2>
              <div className="space-y-10 mt-16">
                {[
                  { title: "Increase Admissions", desc: "Our Growth Engine is built to attract more enquiries and convert them into successful enrollments automatically." },
                  { title: "Reduce Admin Workload", desc: "Automate manual tasks and eliminate paperwork, saving your staff hours of tedious work every single day." },
                  { title: "24/7 Smart Communication", desc: "Parents get instant answers to their questions via WhatsApp, increasing institutional trust and satisfaction." }
                ].map((benefit, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-8 group"
                  >
                    <div className="shrink-0 w-2 h-24 bg-gradient-to-r from-purple-600 to-orange-600/30 group-hover:bg-gradient-to-r from-purple-600 to-orange-600 transition-colors rounded-full"></div>
                    <div>
                      <h4 className="text-2xl font-bold mb-2 tracking-tight text-white">{benefit.title}</h4>
                      <p className="text-white/80 text-lg leading-relaxed">{benefit.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 space-y-6 transform translate-x-10">
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="bg-white p-8 rounded-[32px] shadow-2xl w-full max-w-[400px] ml-auto"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-orange-600 rounded-full flex items-center justify-center text-white shadow-lg">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div className="text-[#581C87]">
                      <div className="font-extrabold text-2xl tracking-tight">+40%</div>
                      <div className="text-xs font-semibold uppercase tracking-wider opacity-70">Admissions Growth</div>
                    </div>
                  </div>
                  <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full w-[80%] bg-gradient-to-r from-purple-600 to-orange-600"></div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 20, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="bg-white p-8 rounded-[32px] shadow-2xl w-full max-w-[400px] mr-auto"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-[#581C87] rounded-full flex items-center justify-center text-white shadow-lg">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div className="text-[#581C87]">
                      <div className="font-extrabold text-2xl tracking-tight">65%</div>
                      <div className="text-xs font-semibold uppercase tracking-wider opacity-70">Time Saved Permanently</div>
                    </div>
                  </div>
                  <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full w-[65%] bg-[#581C87]"></div>
                  </div>
                </motion.div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Pricing - Arched Cards */}
      <section className="py-28 bg-gradient-to-b from-white to-gray-50" id="pricing">
        <div className="container mx-auto px-6">

          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-orange-600 font-bold uppercase tracking-[0.2em] text-sm mb-4 block text-wrap">
              System Audit
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#581C87] mb-8 leading-[1.1] tracking-tight">
              The Real Challenges <br className="hidden md:block" />
              Facing Your School Today
            </h2>
            <p className="text-lg md:text-xl text-[#581C87]/70 font-medium leading-relaxed max-w-2xl mx-auto mb-12">
              Traditional systems slow down growth. Eskoolia modernizes your school from the ground up.
            </p>
          </div>

          {/* Early Bird Card */}
          <div className="max-w-5xl mx-auto bg-white rounded-[32px] shadow-[0_20px_60px_rgba(88,28,135,0.06)] border border-purple-100 p-10 md:p-14 mb-24 relative hover:shadow-[0_30px_80px_rgba(88,28,135,0.1)] transition-all duration-500">

            <div className="absolute top-6 right-6 bg-gradient-to-r from-purple-600 to-orange-600 text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider">
              Only 20 Slots Left
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">

              {/* Price */}
              <div>
                <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-orange-600 font-bold uppercase tracking-widest text-sm">
                  Early Bird Offer
                </p>

                <div className="mt-4 flex items-end gap-4">
                  <h3 className="text-5xl font-extrabold text-[#581C87] tracking-tight">
                    ₹49,999
                  </h3>
                  <span className="text-[#581C87]/70 line-through text-xl">
                    ₹67,500
                  </span>
                </div>

                <p className="mt-3 text-sm text-[#581C87]/70">
                  One-time setup fee. Includes 26% discount.
                </p>

                <Button
                  size="lg"
                  className="mt-8 bg-gradient-to-r from-purple-600 to-orange-600 hover:bg-[#581C87] text-white rounded-full px-10 h-14 font-bold shadow-lg"
                  asChild
                >
                  <Link to="/contact">
                    Claim Your Slot Now
                  </Link>
                </Button>
              </div>

              {/* Features */}
              <div>
                <p className="font-bold uppercase text-xs tracking-[0.2em] text-[#581C87]/70 mb-6">
                  What You Get
                </p>

                <ul className="space-y-4">
                  {[
                    "Professional School Website + SEO",
                    "12 Months Social Media Content",
                    "Microsoft 365 Education Setup",
                    "Eskoolia ERP (Android & iOS)",
                    "WhatsApp AI Assistant",
                    "In-School Setup & Staff Training"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-[#581C87] font-medium">
                      <CheckCircle2 className="w-5 h-5 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-orange-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>

          {/* Pricing Cards */}
          {/* <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto"> */}

          {/* Standard */}
          {/* <div className="bg-white rounded-3xl border border-gray-50 p-10 text-center shadow-lg hover:shadow-xl transition">
              <h3 className="text-2xl font-bold text-[#581C87]">Standard</h3>
              <p className="mt-6 text-4xl font-extrabold text-[#581C87]">₹67</p>
              <p className="text-sm text-[#581C87]/60">Lifetime</p>

              <ul className="mt-8 space-y-3 text-[#581C87]/70 font-medium">
                <li>Online Pro Version</li>
                <li>1 License</li>
                <li>Lifetime Updates</li>
                <li>Front CMS</li>
                <li>1 Year Support</li>
              </ul>

              <Button className="mt-8 w-full rounded-full bg-[#581C87] text-white hover:bg-gradient-to-r from-purple-600 to-orange-600 h-12" asChild>
                <Link to="/pricing">Buy Now</Link>
              </Button>
            </div> */}

          {/* Premium (Highlighted) */}
          {/* <div className="bg-[#581C87] text-white rounded-3xl p-12 text-center shadow-2xl scale-105 relative">
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-orange-600 text-white text-xs font-bold px-4 py-1 rounded-full uppercase">
                Most Popular
              </span>

              <h3 className="text-3xl font-bold">Premium</h3>
              <p className="mt-6 text-5xl font-extrabold">₹149</p>
              <p className="text-sm opacity-80">Lifetime</p>

              <ul className="mt-10 space-y-4 opacity-90 font-medium">
                <li>Android + iOS App</li>
                <li>1 License</li>
                <li>Lifetime Updates</li>
                <li>Front CMS</li>
                <li>1 Year Support</li>
              </ul>

              <Button className="mt-10 w-full rounded-full bg-white text-[#581C87] hover:bg-gradient-to-r from-purple-600 to-orange-600 hover:text-white h-14 font-bold" asChild>
                <Link to="/pricing">Buy Now</Link>
              </Button>
            </div> */}

          {/* Business */}
          {/* <div className="bg-white rounded-3xl border border-gray-50 p-10 text-center shadow-lg hover:shadow-xl transition">
              <h3 className="text-2xl font-bold text-[#581C87]">Business</h3>
              <p className="mt-6 text-4xl font-extrabold text-[#581C87]">₹999</p>
              <p className="text-sm text-[#581C87]/60">Lifetime</p>

              <ul className="mt-8 space-y-3 text-[#581C87]/70 font-medium">
                <li>Android + iOS App</li>
                <li>50 Licenses</li>
                <li>Full Customization</li>
                <li>5 Years Support</li>
              </ul>

              <Button className="mt-8 w-full rounded-full bg-[#581C87] text-white hover:bg-gradient-to-r from-purple-600 to-orange-600 h-12" asChild>
                <Link to="/pricing">Buy Now</Link>
              </Button>
            </div>      </div> */}

        </div>
      </section>

      {/* 6. Testimonials - The Wall of Love */}
      <section className="py-12 lg:py-20 bg-white overflow-x-hidden">
        <div className="container px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* LEFT SIDE */}
            <div className="lg:pr-12 text-center lg:text-left">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-orange-600 font-bold uppercase tracking-[0.2em] text-sm mb-4 block">
                Wall of Love
              </span>

              <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-extrabold text-[#581C87] mb-8 leading-[1.1] tracking-tight">
                Trusted by <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-purple-600">
                  15,000+ Educators
                </span>
              </h2>

              <p className="text-lg md:text-xl text-[#581C87]/70 font-medium leading-relaxed max-w-xl mb-12 mx-auto lg:mx-0">
                From small academies to large university networks, Eskoolia is the standard for modern institutional management across 90+ countries.
              </p>

              <div className="flex justify-center lg:justify-start items-center gap-6">
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map(i => (
                    <div
                      key={i}
                      className="w-10 h-10 md:w-14 md:h-14 rounded-full border-4 border-white bg-gray-50 overflow-hidden shadow-sm"
                    >
                      <img
                        src={`https://i.pravatar.cc/150?u=school${i}`}
                        alt="user"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>

                <div className="text-[#581C87] font-black uppercase tracking-wider text-sm">
                  Join the Elite 1%
                </div>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="relative w-full max-w-full overflow-hidden">
              <Carousel
                opts={{ align: "start", loop: true }}
                className="w-full max-w-full overflow-hidden"
              >
                <CarouselContent>
                  {testimonials.map((t, index) => (
                    <CarouselItem key={index} className="basis-full">
                      <div className="p-2">
                        <div className="bg-gray-50 p-6 md:p-10 rounded-3xl md:rounded-[48px] border border-gray-100 shadow-sm min-h-[250px] md:min-h-[350px] flex flex-col justify-center relative overflow-hidden">

                          <div className="absolute top-6 right-6 md:top-8 md:right-8 text-[#581C87]/10">
                            <MessageSquare className="w-8 h-8 md:w-12 md:h-12" />
                          </div>

                          <div className="flex text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-orange-600 mb-4 md:mb-6">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-current" />
                            ))}
                          </div>

                          <p className="text-base md:text-xl text-[#581C87] font-semibold italic leading-relaxed mb-6 md:mb-8">
                            "{t.text}"
                          </p>

                          <div className="flex items-center gap-3">
                            <div className="w-1 h-6 md:h-8 bg-gradient-to-r from-purple-600 to-orange-600 rounded-full"></div>
                            <div className="text-[#581C87] font-black uppercase tracking-widest text-xs">
                              Verified Institution Partner
                            </div>
                          </div>

                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>

                <div className="flex justify-center lg:justify-start gap-4 mt-6 md:mt-10">
                  <CarouselPrevious className="static translate-y-0 h-10 w-10 md:h-14 md:w-14 bg-[#581C87] text-white hover:bg-gradient-to-r from-purple-600 to-orange-600 border-none shadow-lg" />
                  <CarouselNext className="static translate-y-0 h-10 w-10 md:h-14 md:w-14 bg-[#581C87] text-white hover:bg-gradient-to-r from-purple-600 to-orange-600 border-none shadow-lg" />
                </div>

              </Carousel>
            </div>

          </div>
        </div>
      </section>

      {/* 7. Final Strategic CTA */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-b from-[#581C87] to-[#581C87] text-white overflow-hidden cursor-purple-section">

        {/* Ambient Glow Background */}
        <div className="absolute inset-0 opacity-30">

        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">

          {/* Eyebrow */}
          <span className="inline-block mb-6 px-6 py-2 rounded-full bg-gradient-to-r from-purple-600 to-orange-600/20 border border-orange-600/30 backdrop-blur-md text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-orange-600 shadow-lg">
            2026 Admissions Now Open
          </span>

          {/* Heading */}
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 leading-[1.1] tracking-tight">
            Transform Your School Before
            <br />
            <span className="bg-gradient-to-r from-orange-600 to-orange-200 bg-clip-text text-transparent">
              The Next Academic Year Begins
            </span>
          </h2>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-white/80 font-normal max-w-2xl mx-auto leading-relaxed mb-12">
            Institutions that modernize early win parent trust, boost admissions,
            and operate 3× more efficiently.
            <span className="block mt-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-orange-600 font-bold tracking-wide">
              Only 20 early transformation slots available.
            </span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">

            <Button
              size="lg"
              className="rounded-full h-16 px-12 bg-gradient-to-r from-purple-600 to-orange-600 hover:bg-gradient-to-r from-purple-600 to-orange-600 text-white font-bold text-lg shadow-[0_20px_60px_rgba(194,65,12,0.5)] transition-all duration-300 hover:scale-105"
              asChild
            >
              <Link to="/contact">
                Book Strategy Demo
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="rounded-full h-16 px-12 border border-white/30 bg-white/5 hover:bg-white hover:text-[#581C87] font-bold text-lg backdrop-blur-lg transition-all duration-300"
              asChild
            >
              <a
                href="https://eskoolia.pro/register"
                target="_blank"
                rel="noopener noreferrer"
              >
                Start Free Deployment
              </a>
            </Button>

          </div>

          {/* Divider */}
          <div className="w-32 h-px mx-auto bg-gradient-to-r from-transparent via-white/40 to-transparent mb-12"></div>

          {/* Trust Row */}
          <div className="flex flex-wrap justify-center items-center gap-10 text-white/60 text-xs md:text-sm font-semibold tracking-[0.25em] uppercase">

            <span className="hover:text-white transition">
              Enterprise-Grade Security
            </span>

            <span className="hidden md:block w-1.5 h-1.5 bg-white/30 rounded-full"></span>

            <span className="hover:text-white transition">
              Zero Setup Cost
            </span>

            <span className="hidden md:block w-1.5 h-1.5 bg-white/30 rounded-full"></span>

            <span className="hover:text-white transition">
              Global Deployment Ready
            </span>

          </div>

        </div>
      </section>

      {/* Support / FAQ Deep Link */}
      <section className="bg-[#FAF7FF] py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-20">

            {/* Left Column */}
            <div className="lg:col-span-4">
              <div className="sticky top-28">

                {/* Label */}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-orange-600 font-black uppercase tracking-[0.3em] text-sm mb-4 block text-wrap">
                  Support & Assistance
                </span>

                {/* Heading */}
                <h2 className="font-display text-4xl md:text-6xl font-black text-[#581C87] mb-8 leading-[1.1] uppercase">
                  We're Ready to Support Your InstitutSion
                </h2>

                {/* Description */}
                <p className="text-xl text-[#581C87]/70 font-medium leading-relaxed mb-12">
                  Whether you have questions about onboarding, implementation,
                  security, or pricing — our team is prepared to guide you
                  every step of the way.
                </p>

                {/* Button */}
                <Button
                  variant="outline"
                  className="mt-10 rounded-full px-8 h-12 border border-[#581C87] text-[#581C87] hover:bg-[#581C87] hover:text-white transition-all"
                  asChild
                >
                  <Link to="/faq">
                    View Full Knowledge Base
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>

              </div>
            </div>

            {/* Right Column - FAQ */}
            <div className="lg:col-span-8">
              <Accordion type="single" collapsible className="space-y-5">

                {faqs.slice(0, 5).map((faq, i) => (
                  <AccordionItem
                    key={i}
                    value={`faq-${i}`}
                    className="bg-white border border-gray-200 rounded-xl px-8 py-6 shadow-sm transition hover:shadow-md"
                  >
                    <AccordionTrigger className="text-lg lg:text-xl font-semibold text-[#581C87] text-left hover:no-underline">
                      {faq.q}
                    </AccordionTrigger>

                    <AccordionContent className="mt-4 text-base text-[#581C87]/70 leading-relaxed">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}

              </Accordion>
            </div>

          </div>
        </div>
      </section>

      {/* Trust Signatures */}
      <section className="py-16 bg-white border-t border-gray-50">
        <div className="container px-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-700 mb-12">
            <div className="flex items-center gap-4">
              <Shield className="w-8 h-8 text-[#581C87]" />
              <span className="font-black uppercase tracking-[0.2em] text-xs text-[#581C87]">Bank-Grade Security</span>
            </div>
            <div className="flex items-center gap-4">
              <BadgeCheck className="w-8 h-8 text-[#581C87]" />
              <span className="font-black uppercase tracking-[0.2em] text-xs text-[#581C87]">99.9% Uptime Commitment</span>
            </div>
            <div className="flex items-center gap-4">
              <Map className="w-8 h-8 text-[#581C87]" />
              <span className="font-black uppercase tracking-[0.2em] text-xs text-[#581C87]">Global Education Standard</span>
            </div>
          </div>

          <div className="max-w-4xl mx-auto text-center border-t border-gray-50 pt-10">
            <p className="text-[#581C87] font-black uppercase tracking-[0.15em] text-sm mb-2">
              Eskoolia is a product of Sria Infotech Pvt Ltd, Hyderabad.
            </p>
            <p className="text-[#581C87]/60 font-bold text-xs uppercase tracking-[0.1em]">
              Serving educational institutions across Telangana with on-site implementation and support.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
