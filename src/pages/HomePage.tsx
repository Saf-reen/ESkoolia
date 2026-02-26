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
  Database
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
    bg: "bg-orange-500",
    text: "text-orange-500",
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
    bg: "bg-orange-500",
    text: "text-orange-500",
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

// Re-using Settings icon for Easy Customize as generic
import { Settings } from "lucide-react";

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
  { label: "North America", value: "30.7%", color: "bg-pink-500", position: "top-[20%] left-[10%]" },
  { label: "North Europe", value: "13.4%", color: "bg-orange-400", position: "top-[15%] right-[30%]" },
  { label: "Asia", value: "24.4%", color: "bg-blue-500", position: "top-[40%] right-[10%]" },
  { label: "South America", value: "6.8%", color: "bg-purple-500", position: "bottom-[20%] left-[20%]" },
  { label: "Africa", value: "21.8%", color: "bg-rose-700", position: "bottom-[30%] right-[40%]" },
  { label: "Australia", value: "3%", color: "bg-green-400", position: "bottom-[10%] right-[15%]" },
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
  const words = ["Training Center.", "School.", "College.", "Institute", "Academy.", "Tution Center."];
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
        className="relative overflow-visible pb-32 pt-32 lg:pt-48 text-white bg-no-repeat bg-cover bg-center min-h-[90vh] flex flex-col items-center justify-center"
        style={{ backgroundImage: 'url(/banner-bg.jpg)' }}
      >
        {/* Deep branding overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#581C87]/50 to-[#581C87]/70 mix-blend-multiply"></div>

        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500/20 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="container relative z-10 px-4">
          <div className="mx-auto max-w-6xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-orange-500 text-white font-black text-xs uppercase tracking-[0.2em] mb-8 shadow-xl animate-bounce">
                <MapPin className="w-3.5 h-3.5" />
                Serving Tier 2 & Tier 3 Schools in Telangana
              </div>
              <h1 className="mb-8 font-display text-5xl font-black leading-[1.1] tracking-tight sm:text-6xl lg:text-[80px] uppercase">
                The Ultimate Dashboard for<br />
                <span className="relative inline-block mt-2 min-h-[1.1em] text-orange-500">
                  <span className="relative z-10">{typedText}</span>
                  <span className="absolute bottom-2 left-0 w-full h-2 bg-white/20 rounded-full"></span>
                  <span className="inline-block w-[3px] h-[50px] bg-white ml-2 align-middle -mt-2 animate-pulse"></span>
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-6 font-medium leading-relaxed">
                Streamline admissions, automate operations, and scale your institution with the world's most intuitive school management suite.
              </p>
              <p className="text-lg md:text-xl text-orange-500 font-bold mb-12 uppercase tracking-wide">
                Built specifically for Tier 2 & Tier 3 schools across Telangana.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-6 mb-20">
                <Button size="lg" className="rounded-full h-16 px-12 text-lg shadow-[0_20px_50px_rgba(88,28,135,0.4)] hover:shadow-[0_25px_60px_rgba(88,28,135,0.5)] transition-all uppercase tracking-wider font-black bg-white text-[#581C87] hover:bg-orange-500 hover:text-white border-none transform hover:-translate-y-1" asChild>
                  <a href="https://eskooly.pro/login" target="_blank" rel="noopener noreferrer">Try Live Demo Free</a>
                </Button>
                <div className="flex items-center group cursor-pointer justify-center">
                  <div className="flex items-center justify-center w-14 h-14 rounded-full border-2 border-white/30 group-hover:border-white group-hover:bg-white/10 transition-all mr-4 bg-white/5 backdrop-blur-md">
                    <Play className="w-5 h-5 fill-white text-white ml-1" />
                  </div>
                  <span className="text-xl font-bold tracking-tight uppercase text-white">Watch the Vision</span>
                </div>
              </div>
            </motion.div>

            {/* Premium Dashboard Frame */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative mt-8 mx-auto max-w-6xl perspective-[2000px]"
            >
              <div className="relative z-10 rounded-2xl border-[12px] border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.5)] overflow-hidden transform hover:scale-[1.01] transition-transform duration-700">
                <div className="absolute inset-0 bg-gradient-to-t from-[#581C87]/20 to-transparent pointer-events-none"></div>
                <img src={dashboardMockup} alt="Eskoolia Dashboard" className="w-full h-auto object-cover" />
              </div>

              {/* Accenting glow below image */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[80%] h-20 bg-orange-500/20 blur-[60px] -z-10"></div>
            </motion.div>
          </div>
        </div>

        {/* Floating Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden h-full w-full opacity-40">
          <div className="absolute top-1/4 left-[10%] w-12 h-12 border-2 border-white/20 rounded-lg rotate-12 animate-float"></div>
          <div className="absolute bottom-1/3 right-[10%] w-16 h-16 border-2 border-white/10 rounded-full animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        </div>
      </section>

      {/* Trust Bar (previously stats) */}
      <section className="relative -mt-10 z-20 pb-20">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[40px] shadow-[0_30px_70px_rgba(88,28,135,0.1)] p-8 md:p-12 flex flex-col md:flex-row justify-around items-center gap-10 border border-gray-50 max-w-6xl mx-auto"
          >
            <div className="flex flex-col items-center gap-4 text-center group">
              <div className="text-5xl font-black text-[#581C87] mb-1">15k+</div>
              <div className="text-[#581C87]/40 text-sm font-bold uppercase tracking-[0.2em]">Global Users</div>
            </div>

            <div className="w-px h-12 bg-gray-50 hidden md:block"></div>

            <div className="flex flex-col items-center gap-4 text-center group">
              <div className="text-5xl font-black text-[#581C87] mb-1">90+</div>
              <div className="text-[#581C87]/40 text-sm font-bold uppercase tracking-[0.2em]">Countries</div>
            </div>

            <div className="w-px h-12 bg-gray-50 hidden md:block"></div>

            <div className="flex flex-col items-center gap-4 text-center group">
              <div className="text-5xl font-black text-[#581C87] mb-1">95%</div>
              <div className="text-[#581C87]/40 text-sm font-bold uppercase tracking-[0.2em]">Satisfaction Rate</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Animated Eskoolia Suite Section - Signature visual identity */}
      <EskooliaSuiteSection />



      {/* Problems Section */}
      <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
        <div className="container px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <span className="text-orange-500 font-black uppercase tracking-[0.3em] text-sm mb-4 block">Why Sria Infotech? We Are Your Local Technology Partner.</span>
            <h2 className="font-display text-4xl md:text-6xl font-black text-[#581C87] mb-8 leading-[1.1] uppercase">Traditional School Management is <span className="text-orange-500">Broken</span></h2>
            <p className="text-xl text-[#581C87]/70 font-bold leading-relaxed mb-6">
              "Unlike national ERP vendors, we are physically based in Telangana. We visit your school, train your staff in person, and provide real local support when you need it."
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {["Low online visibility", "Declining admissions", "Manual fee follow-ups", "Administrative overload", "Communication gaps with parents"].map((item, idx) => (
                <div key={idx} className="px-6 py-3 bg-white text-orange-500 rounded-full font-bold text-sm border border-gray-50 uppercase tracking-tighter">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 rounded-[32px] border border-gray-50 shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#581C87] text-white flex items-center justify-center mb-8 border border-gray-50 group-hover:bg-orange-500 transition-all">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-[#581C87] mb-4 uppercase tracking-tight">{item.title}</h3>
                <p className="text-[#581C87]/60 text-lg leading-relaxed font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Background texture */}
        <div className="absolute inset-0 opacity-[0.4] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>
      </section>

      {/* 4. 3 Core Solutions */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container px-6">
          <div className="text-center mb-20">
            <span className="text-orange-500 font-black uppercase tracking-[0.3em] text-sm mb-4 block">Local Advantage</span>
            <h2 className="font-display text-4xl md:text-6xl font-black text-[#581C87] tracking-tight uppercase leading-tight max-w-5xl mx-auto">
              Why Sria Infotech? <br />We Are Your <span className="text-orange-500">Local Technology Partner.</span>
            </h2>
            <p className="text-xl text-[#581C87]/60 font-medium leading-relaxed max-w-4xl mx-auto">
              We've engineered three powerful modules that work in perfect harmony to transform your school into a high-performance institution.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
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
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col bg-white rounded-[48px] p-10 border border-gray-50 shadow-[0_20px_60px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_100px_rgba(72,50,133,0.08)] transition-all group"
              >
                <span className="text-[#581C87]/60 font-black uppercase tracking-widest text-sm mb-2 text-wrap">{sol.title}</span>
                <h3 className="text-3xl font-black text-[#581C87] mb-6 uppercase tracking-tight">{sol.subtitle}</h3>
                <p className="text-[#581C87]/60 text-lg leading-relaxed mb-8 flex-1">{sol.desc}</p>
                <div className="space-y-4 mb-10">
                  {sol.benefits.map((b, idx) => (
                    <div key={idx} className="flex gap-3 items-center">
                      <CheckCircle2 className="w-5 h-5 text-orange-500" />
                      <span className="font-bold text-[#581C87]">{b}</span>
                    </div>
                  ))}
                </div>
                <Button className="w-full rounded-full h-14 bg-[#581C87] hover:bg-orange-500 text-white font-black text-lg transition-all uppercase tracking-tight" asChild>
                  <Link to={sol.href}>{sol.cta}</Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Outcome-Driven Benefits Content */}
      <section className="py-24 lg:py-40 bg-[#581C87] text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent)]"></div>
        <div className="container px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-orange-500 font-black uppercase tracking-[0.3em] text-sm mb-6 block text-wrap">Is Your School Ready for 2026?</span>
              <h2 className="font-display text-5xl md:text-7xl font-black mb-10 leading-[1.05] uppercase">Engineered for <br /><span className="text-orange-500">Total Excellence</span></h2>
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
                    <div className="shrink-0 w-2 h-24 bg-orange-500/30 group-hover:bg-orange-500 transition-colors rounded-full"></div>
                    <div>
                      <h4 className="text-3xl font-black mb-3 uppercase tracking-tight text-white">{benefit.title}</h4>
                      <p className="text-white/70 text-xl leading-relaxed font-medium">{benefit.desc}</p>
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
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <div className="text-[#581C87]">
                      <div className="font-black text-2xl">+40%</div>
                      <div className="text-xs font-bold uppercase tracking-wider opacity-60">Admissions Growth</div>
                    </div>
                  </div>
                  <div className="h-2 w-full bg-gray-50 rounded-full overflow-hidden">
                    <div className="h-full w-[80%] bg-orange-500"></div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 20, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="bg-white p-8 rounded-[32px] shadow-2xl w-full max-w-[400px] mr-auto"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-[#581C87] rounded-full flex items-center justify-center text-white">
                      <Clock className="w-7 h-7" />
                    </div>
                    <div className="text-[#581C87]">
                      <div className="font-black text-2xl">65%</div>
                      <div className="text-xs font-bold uppercase tracking-wider opacity-60">Time Saved Permanently</div>
                    </div>
                  </div>
                  <div className="h-2 w-full bg-gray-50 rounded-full overflow-hidden">
                    <div className="h-full w-[65%] bg-[#581C87]"></div>
                  </div>
                </motion.div>
              </div>
              <div className="absolute inset-0 bg-white/5 rounded-full blur-[100px] -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing - Arched Cards */}
      <section className="py-28 bg-gradient-to-b from-white to-gray-50" id="pricing">
        <div className="container mx-auto px-6">

          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-orange-500 font-bold uppercase tracking-[0.3em] text-sm">
              System Audit
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-[#581C87] leading-tight">
              The Real Challenges <br className="hidden md:block" />
              Facing Your School Today
            </h2>
            <p className="mt-6 text-lg text-[#581C87]/70">
              Traditional systems slow down growth. Eskoolia modernizes your school.
            </p>
          </div>

          {/* Early Bird Card */}
          <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl border border-orange-500/20 p-10 md:p-14 mb-24 relative">

            <div className="absolute top-6 right-6 bg-orange-500 text-white text-xs font-bold px-4 py-2 rounded-full uppercase">
              Only 20 Slots Left
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">

              {/* Price */}
              <div>
                <p className="text-orange-500 font-bold uppercase tracking-widest text-sm">
                  Early Bird Offer
                </p>

                <div className="mt-4 flex items-end gap-4">
                  <h3 className="text-5xl font-black text-[#581C87]">
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
                  className="mt-8 bg-orange-500 hover:bg-[#581C87] text-white rounded-full px-10 h-14 font-bold shadow-lg"
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
                      <CheckCircle2 className="w-5 h-5 text-orange-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

            {/* Standard */}
            <div className="bg-white rounded-3xl border border-gray-50 p-10 text-center shadow-lg hover:shadow-xl transition">
              <h3 className="text-2xl font-bold text-[#581C87]">Standard</h3>
              <p className="mt-6 text-4xl font-extrabold text-[#581C87]">$67</p>
              <p className="text-sm text-[#581C87]/60">Lifetime</p>

              <ul className="mt-8 space-y-3 text-[#581C87]/70 font-medium">
                <li>Online Pro Version</li>
                <li>1 License</li>
                <li>Lifetime Updates</li>
                <li>Front CMS</li>
                <li>1 Year Support</li>
              </ul>

              <Button className="mt-8 w-full rounded-full bg-[#581C87] text-white hover:bg-orange-500 h-12" asChild>
                <Link to="/pricing">Buy Now</Link>
              </Button>
            </div>

            {/* Premium (Highlighted) */}
            <div className="bg-[#581C87] text-white rounded-3xl p-12 text-center shadow-2xl scale-105 relative">
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-xs font-bold px-4 py-1 rounded-full uppercase">
                Most Popular
              </span>

              <h3 className="text-3xl font-bold">Premium</h3>
              <p className="mt-6 text-5xl font-extrabold">$149</p>
              <p className="text-sm opacity-80">Lifetime</p>

              <ul className="mt-10 space-y-4 opacity-90 font-medium">
                <li>Android + iOS App</li>
                <li>1 License</li>
                <li>Lifetime Updates</li>
                <li>Front CMS</li>
                <li>1 Year Support</li>
              </ul>

              <Button className="mt-10 w-full rounded-full bg-white text-[#581C87] hover:bg-orange-500 hover:text-white h-14 font-bold" asChild>
                <Link to="/pricing">Buy Now</Link>
              </Button>
            </div>

            {/* Business */}
            <div className="bg-white rounded-3xl border border-gray-50 p-10 text-center shadow-lg hover:shadow-xl transition">
              <h3 className="text-2xl font-bold text-[#581C87]">Business</h3>
              <p className="mt-6 text-4xl font-extrabold text-[#581C87]">$999</p>
              <p className="text-sm text-[#581C87]/60">Lifetime</p>

              <ul className="mt-8 space-y-3 text-[#581C87]/70 font-medium">
                <li>Android + iOS App</li>
                <li>50 Licenses</li>
                <li>Full Customization</li>
                <li>5 Years Support</li>
              </ul>

              <Button className="mt-8 w-full rounded-full bg-[#581C87] text-white hover:bg-orange-500 h-12" asChild>
                <Link to="/pricing">Buy Now</Link>
              </Button>
            </div>      </div>

        </div>
      </section>

      {/* 6. Testimonials - The Wall of Love */}
      <section className="py-24 lg:py-40 bg-white overflow-hidden">
        <div className="container px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="lg:pr-12 text-center lg:text-left">
              <span className="text-orange-500 font-black tracking-[0.3em] text-sm uppercase mb-6 block">Wall of Love</span>
              <h2 className="font-display text-4xl md:text-6xl font-black text-[#581C87] mb-8 leading-[1.1] uppercase">Trusted by <br /><span className="text-orange-500">15,000+ Educators</span></h2>
              <p className="text-xl text-[#581C87]/60 font-medium leading-relaxed max-w-xl mb-12 mx-auto lg:mx-0">
                From small academies to large university networks, Eskoolia is the standard for modern institutional management across 90+ countries.
              </p>
              <div className="flex justify-center lg:justify-start items-center gap-6">
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-14 h-14 rounded-full border-4 border-white bg-gray-50 overflow-hidden shadow-sm">
                      <img src={`https://i.pravatar.cc/150?u=school${i}`} alt="user" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <div className="text-[#581C87] font-black uppercase tracking-wider text-sm">Join the Elite 1%</div>
              </div>
            </div>

            <div className="relative">
              <Carousel opts={{ align: "start", loop: true }} className="w-full">
                <CarouselContent>
                  {testimonials.map((t, index) => (
                    <CarouselItem key={index}>
                      <div className="p-2">
                        <div className="bg-gray-50 p-10 rounded-[48px] border border-gray-50 shadow-sm min-h-[350px] flex flex-col justify-center relative overflow-hidden">
                          <div className="absolute top-8 right-8 text-[#581C87]/10">
                            <MessageSquare className="w-12 h-12" />
                          </div>
                          <div className="flex text-orange-500 mb-6">
                            {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                          </div>
                          <p className="text-xl text-[#581C87] font-bold italic leading-relaxed mb-8 uppercase tracking-tight">
                            "{t.text}"
                          </p>
                          <div className="flex items-center gap-3">
                            <div className="w-1 h-8 bg-orange-500 rounded-full"></div>
                            <div className="text-[#581C87] font-black uppercase tracking-widest text-xs">Verified Institution Partner</div>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex justify-start gap-4 mt-10">
                  <CarouselPrevious className="static translate-y-0 h-14 w-14 bg-[#581C87] text-white hover:bg-orange-500 border-none shadow-lg" />
                  <CarouselNext className="static translate-y-0 h-14 w-14 bg-[#581C87] text-white hover:bg-orange-500 border-none shadow-lg" />
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Final Strategic CTA */}
      <section className="py-4 lg:py-8 bg-[#581C87] text-white text-center relative overflow-hidden">

        {/* Top Gradient Divider */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>

        {/* Radial Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(194,65,12,0.18),transparent_60%)]"></div>

        <div className="container px-6 relative z-10 max-w-6xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            {/* Main Heading */}
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-[1.1] mb-8">
              Secure Your Slot for
              <br />
              <span className="text-orange-500">
                The 2026 Academic Year
              </span>
            </h2>

            {/* Subtext */}
            <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto mb-10 font-medium leading-relaxed">
              Schools that modernize now attract the admissions their competitors lose.
              Only <span className="text-orange-500 font-black">20 early bird slots</span> available.
            </p>

            {/* Value Pill */}
            <div className="inline-block px-8 py-4 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 mb-14 shadow-[0_0_60px_rgba(255,255,255,0.05)]">
              <span className="text-lg md:text-xl font-black uppercase tracking-[0.2em] italic">
                Complete Digital Transformation in One Package
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-6">

              <Button
                size="lg"
                className="rounded-full h-16 md:h-18 px-12 bg-orange-500 hover:bg-white hover:text-[#581C87] text-white font-black text-xl shadow-[0_25px_60px_rgba(194,65,12,0.4)] transition-all hover:scale-105 active:scale-95 border-none"
                asChild
              >
                <Link to="/contact">
                  BOOK DEMO SESSION
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="rounded-full h-16 md:h-18 px-12 border-2 border-white/40 bg-white/5 hover:bg-white hover:text-[#581C87] text-white font-black text-xl backdrop-blur-xl transition-all"
                asChild
              >
                <a
                  href="https://eskoolia.pro/register"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  DEPLOY FOR FREE
                </a>
              </Button>

            </div>

            {/* Premium Divider */}
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent mx-auto my-16"></div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-8 text-white/50 font-black uppercase tracking-[0.3em] text-xs md:text-sm">

              <span className="hover:text-white transition">Secure Infrastructure</span>

              <div className="w-1.5 h-1.5 rounded-full bg-white/30"></div>

              <span className="hover:text-white transition">No Setup Fee</span>

              <div className="w-1.5 h-1.5 rounded-full bg-white/30"></div>

              <span className="hover:text-white transition">90+ Countries</span>

            </div>

          </motion.div>

        </div>
      </section>

      {/* Support / FAQ Deep Link */}
      <section className="py-32 bg-white">
        <div className="container px-8">
          <div className="grid lg:grid-cols-12 gap-24 items-start">
            <div className="lg:col-span-4">
              <div className="sticky top-32">
                <span className="text-orange-500 font-black uppercase tracking-[0.4em] text-xs mb-6 block">Direct Support</span>
                <h2 className="font-display text-5xl font-black text-[#581C87] uppercase leading-tight mb-10">We Are Ready <br />To Assist.</h2>
                <Button variant="outline" className="rounded-full h-14 px-10 border-2 border-[#581C87] text-[#581C87] hover:bg-[#581C87] hover:text-white font-black uppercase tracking-widest text-sm" asChild>
                  <Link to="/faq">VIEW FULL KNOWLEDGE BASE <ArrowRight className="ml-3 w-5 h-5" /></Link>
                </Button>
              </div>
            </div>
            <div className="lg:col-span-8">
              <Accordion type="single" collapsible className="w-full space-y-6">
                {faqs.slice(0, 5).map((faq, i) => (
                  <AccordionItem key={i} value={`faq-${i}`} className="border-none bg-white rounded-[32px] shadow-sm hover:shadow-md transition-all px-10 py-4">
                    <AccordionTrigger className="text-2xl font-black text-[#581C87] hover:text-orange-500 hover:no-underline text-left uppercase tracking-tighter">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-xl text-[#581C87]/60 font-medium leading-relaxed pb-8 pt-4">
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
