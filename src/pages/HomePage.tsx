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
  ShoppingCart,
  Server,
  Layers,
  Lock,
  Clock
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
import dashboardMockup from "@/assets/dashboard-mockup.png";

const proudFeatures = [
  {
    icon: Grid,
    bg: "bg-red-500",
    text: "text-red-500",
    bgLight: "bg-red-500/10",
    title: "Tons of features",
    desc: "eSkooly PRO has all in one place. You’ll find everything what you are looking into education management system software."
  },
  {
    icon: Monitor,
    bg: "bg-orange-500",
    text: "text-orange-500",
    bgLight: "bg-orange-500/10",
    title: "User Friendly Interface",
    desc: "We care! User will never bothered in our real eye catchy user friendly UI & UX Interface design."
  },
  {
    icon: Shield,
    bg: "bg-blue-500",
    text: "text-blue-500",
    bgLight: "bg-blue-500/10",
    title: "Proper Documentation",
    desc: "You know! Smart Idea always comes to well planners. And Our eSkooly PRO is Smart for its Well Documentation."
  },
  {
    icon: Zap,
    bg: "bg-green-500",
    text: "text-green-500",
    bgLight: "bg-green-500/10",
    title: "Powerful Support",
    desc: "Explore in new support world! It’s now faster & quicker. You’ll find us on Support Ticket, Email, Skype, WhatsApp."
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
    text: "I was searching a school management software from a long time, finally i found eSkooly Pro. eSkooly has fulfill my all requirements that i was searching. Many congratulations to eSkooly team for make a excellent School ERP.",
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
        className="relative overflow-visible pb-24 pt-32 lg:pt-40 text-white bg-no-repeat bg-cover bg-center min-h-[80vh] flex flex-col items-center"
        style={{ backgroundImage: 'url(/banner-bg.jpg)' }}
      >
        {/* Dark overlay for better text readability and matching screenshot vibe */}
        <div className="absolute inset-0 bg-[#483285]/40 mix-blend-multiply"></div>

        <div className="container relative z-10 px-4">
          <div className="mx-auto max-w-5xl text-center">
            <h1 className="mb-6 font-display text-4xl font-semibold leading-[1.15] tracking-tight sm:text-5xl lg:text-[64px]">
              The Ultimate Education<br />
              Management System for<br />
              <span className="relative inline-block mt-1 min-h-[1.1em]">
                <span className="relative z-10">{typedText}</span>
                <span className="absolute bottom-1.5 left-0 w-full h-1 bg-[#EA4C89] opacity-80 rounded-full"></span>
                <span className="inline-block w-[2.5px] h-[40px] bg-white ml-1 align-middle -mt-1 animate-pulse"></span>
              </span>
            </h1>

            <div className="flex flex-col sm:flex-row justify-center gap-5 mb-12 mt-8">
              <Button size="lg" className="rounded-full h-14 px-10 text-base shadow-[0_10px_25px_rgba(71,94,237,0.3)] hover:shadow-[0_15px_35px_rgba(71,94,237,0.4)] transition-all uppercase tracking-wide font-black bg-[#475EED] hover:bg-[#3b4ecf] text-white border-none" asChild>
                <a href="https://eskooly.pro/login" target="_blank" rel="noopener noreferrer">TRY LIVE DEMO</a>
              </Button>
              <div className="flex items-center group cursor-pointer">
                <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-white/40 group-hover:border-white transition-all mr-3 bg-white/5 backdrop-blur-sm">
                  <Play className="w-4 h-4 fill-white text-white ml-0.5" />
                </div>
                <span className="text-lg font-bold tracking-tight">Play Video</span>
              </div>
            </div>

            {/* Dashboard Image floating with perspective */}
            <div className="relative mt-12 mx-auto max-w-5xl perspective-[2000px]">
              <div className="relative z-10 rounded-xl border-[10px] border-white/10 shadow-2xl overflow-hidden transform rotate-x-1 hover:rotate-x-0 transition-transform duration-700">
                <img src={dashboardMockup} alt="Dashboard Preview" className="w-full h-auto object-cover" />
              </div>
            </div>
          </div>
        </div>

        {/* Floating Decorative Shapes */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden h-full w-full">
          {/* Triangle */}
          <div className="absolute top-1/3 left-[15%] w-8 h-8 border-r-2 border-b-2 border-white/20 rotate-[135deg] animate-float"></div>
          {/* Simple Circle */}
          <div className="absolute bottom-1/4 left-[10%] w-4 h-4 rounded-full border-2 border-white/20 animate-pulse"></div>
          {/* Square Outline */}
          <div className="absolute top-1/2 right-[5%] w-6 h-6 border-2 border-white/20 rotate-45"></div>
          {/* Small Dot Grid */}
          <div className="absolute bottom-[20%] left-[5%] grid grid-cols-4 gap-2 opacity-20">
            {[...Array(16)].map((_, i) => <div key={i} className="w-1.5 h-1.5 bg-white rounded-full"></div>)}
          </div>
          {/* Right Triangle */}
          <div className="absolute top-[40%] right-[10%] w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[18px] border-b-white/20 rotate-12"></div>
        </div>

        {/* Purple to Orange Transition Overlay */}
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-[#FF6B35] to-transparent opacity-60 pointer-events-none"></div>
      </section>

      {/* Arched Stats Container */}
      <section className="relative -mt-16 z-20 pb-12">
        <div className="container px-4">
          <div className="bg-white rounded-[60px_60px_24px_24px] shadow-lg p-6 md:p-8 flex flex-col md:flex-row justify-around items-center gap-6 border border-gray-100 max-w-5xl mx-auto">

            <div className="flex flex-col items-center gap-3 text-center group">
              <div className="relative w-20 h-20 mb-1">
                <div className="absolute inset-0 bg-red-500/10 rounded-full scale-110 group-hover:scale-125 transition-transform duration-500"></div>
                <div className="relative h-full w-full flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-10 h-10 text-red-500 fill-none stroke-[1.5] stroke-current">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
              </div>
              <div>
                <div className="text-4xl font-black text-[#483285] mb-0.5">15k</div>
                <div className="text-gray-400 text-sm font-bold tracking-tight">Total User</div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-3 text-center group">
              <div className="relative w-20 h-20 mb-1">
                <div className="absolute inset-0 bg-purple-500/10 rounded-full scale-110 group-hover:scale-125 transition-transform duration-500"></div>
                <div className="relative h-full w-full flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-10 h-10 text-purple-500 fill-none stroke-[1.5] stroke-current">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </div>
              </div>
              <div>
                <div className="text-4xl font-black text-[#483285] mb-0.5">90+</div>
                <div className="text-gray-400 text-sm font-bold tracking-tight">Countries</div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-3 text-center group">
              <div className="relative w-20 h-20 mb-1">
                <div className="absolute inset-0 bg-blue-500/10 rounded-full scale-110 group-hover:scale-125 transition-transform duration-500"></div>
                <div className="relative h-full w-full flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-10 h-10 text-blue-500 fill-none stroke-[1.5] stroke-current">
                    <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
              </div>
              <div>
                <div className="text-4xl font-black text-[#483285] mb-0.5">95%</div>
                <div className="text-gray-400 text-sm font-bold tracking-tight">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proud Features - Centered & Colored Icons */}
      <section className="py-20 pt-32 bg-white">
        <div className="container">
          <div className="mx-auto mb-20 max-w-3xl text-center">
            <span className="mb-3 block font-bold text-orange-500 uppercase tracking-widest text-sm">Amazing features to convince you</span>
            <h2 className="mb-6 font-display text-4xl font-bold text-[#483285]">Some Features that make Us Proud</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Looking Forward To Something Different & Unique! Here We Are With Few That Never Expected In Others.</p>
          </div>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 mb-16">
            {proudFeatures.map((f, i) => (
              <div key={i} className="group text-center">
                <div className={`mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full ${f.bgLight} ${f.text} shadow-sm transition-all group-hover:scale-110 duration-300`}>
                  <f.icon className={`h-10 w-10 ${f.text}`} />
                </div>
                <h3 className="mb-4 font-display text-xl font-bold text-[#483285]">{f.title}</h3>
                <p className="text-muted-foreground leading-relaxed px-4">{f.desc}</p>
              </div>
            ))}
          </div>

          {/* More Features - Mini Tags */}
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {moreFeatures.map((f, i) => (
              <div key={i} className="flex items-center gap-2 px-6 py-3 rounded-full bg-secondary/30 hover:bg-secondary/60 transition-colors cursor-default border border-border/50">
                <f.icon className="w-4 h-4 text-orange-500" />
                <span className="font-semibold text-foreground/80 text-sm">{f.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Left Text, Right Image */}
      <section className="py-24 bg-[#483285]/5 overflow-hidden">
        <div className="container">
          <div className="grid gap-16 lg:grid-cols-2 items-center">
            <div className="order-1">
              <span className="block font-bold text-orange-500 text-lg mb-2">All-in-one Solution for you</span>
              <h2 className="mb-8 font-display text-4xl font-extrabold text-[#483285] sm:text-5xl">WHY CHOOSE US?</h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Reliability is the key factor when it comes to running a School Management System. Any lag or disturbance can affect your reputation. And we completely understand this responsibility from our 20 years+ of experience in working in this field. We know every nitty-gritty detail of this respected industry. With our experience and state-of-the-art interface designs, we have created eSkooly PRO in School Management ERP System which is extremely reliable, intuitive, and easy to use.
                </p>
                <p>
                  It can cater to all your needs of managing school, college, university and any other educational institution eliminating the tedious manual processes. With a framework built this solid and reliable, you can never go wrong. Whenever you face any difficulty, our friendliest support team will be with you at every step to guide the process. Once it is set and running, you can stop worrying about the system and focus on the other more important things of your organization. The beauty of automation will be at your fingertips.
                </p>
                <div className="flex flex-wrap gap-4 pt-6">
                  <div className="px-6 py-3 bg-white rounded-lg shadow-sm border border-border font-semibold text-foreground">100% White Labeled</div>
                  <div className="px-6 py-3 bg-white rounded-lg shadow-sm border border-border font-semibold text-foreground">Open Source</div>
                  <div className="px-6 py-3 bg-white rounded-lg shadow-sm border border-border font-semibold text-foreground">Cloud Based</div>
                  <div className="px-6 py-3 bg-white rounded-lg shadow-sm border border-border font-semibold text-foreground">Self Hosted</div>
                </div>
              </div>
            </div>

            {/* Right side graphic placeholder */}
            <div className="order-2 relative h-[500px] w-full flex items-center justify-center">
              <div className="absolute inset-0 bg-[#483285]/10 rounded-full blur-3xl transform rotate-12"></div>
              {/* Product Box simulation */}
              <div className="relative z-10 w-64 h-80 bg-gradient-to-br from-[#483285] to-indigo-700 rounded-xl shadow-2xl transform -rotate-6 flex flex-col items-center justify-center text-white p-6 border-t border-white/20">
                <span className="font-display font-black text-4xl mb-2 tracking-tighter">eSKOOLY</span>
                <span className="text-xs uppercase tracking-[0.3em] font-light mb-8 opacity-80">Ultimate ERP</span>
                <div className="w-full bg-white/20 h-px mb-8"></div>
                <div className="grid grid-cols-2 gap-2 w-full opacity-60">
                  <div className="h-2 bg-white rounded"></div>
                  <div className="h-2 bg-white rounded"></div>
                  <div className="h-2 bg-white rounded col-span-2"></div>
                </div>
              </div>
              {/* Circles */}
              <div className="absolute top-10 right-10 w-32 h-32 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold text-center p-4 shadow-lg animate-float" style={{ animationDelay: '0s' }}>
                Fully<br />Customisable
              </div>
              <div className="absolute bottom-20 left-10 w-28 h-28 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-center p-4 shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                100%<br />Secure
              </div>
              <div className="absolute top-1/2 right-0 w-24 h-24 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-center p-4 shadow-lg animate-float" style={{ animationDelay: '1.5s' }}>
                Fast<br />Support
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Easy & Perfect Solution - Left Image Right Text */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-orange-500 font-bold text-lg block mb-2">What Features Have eSkooly PRO that Different From Others in Market?</span>
            <h2 className="text-4xl font-extrabold text-[#483285]">Easy & Perfect Solution</h2>
          </div>
          <div className="grid gap-16 lg:grid-cols-2 items-center">
            <div className="relative h-[600px] flex items-center justify-center">
              {/* Phone Mockup */}
              <div className="relative z-10 w-[300px] h-[600px] bg-[#483285] rounded-[3rem] p-4 shadow-2xl border-[8px] border-[#483285]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#483285] rounded-b-2xl z-20"></div>
                <div className="w-full h-full bg-background rounded-[2.2rem] overflow-hidden relative">
                  <img src={dashboardMockup} alt="Mobile App" className="w-full h-full object-cover opacity-80" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                    <div className="text-white">
                      <h4 className="font-bold text-xl mb-2">Mobile Ready</h4>
                      <p className="text-sm opacity-80">Access your school data from anywhere, anytime.</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative blob */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-blue-200 to-purple-200 rounded-full blur-3xl -z-10"></div>
            </div>
            <div>
              <div className="grid gap-10">
                {selfFeatures.map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="mt-1 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white shadow-md text-primary group-hover:scale-110 transition-transform">
                      <CheckCircle2 className="h-7 w-7" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl text-[#483285] mb-3">{item.title}</h4>
                      <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Front CMS - Right Image with Bubbles */}
      <section className="py-24 bg-[#483285]/5 overflow-hidden">
        <div className="container">
          <div className="grid gap-16 lg:grid-cols-2 items-center">
            <div className="order-1">
              <span className="block font-bold text-orange-500 text-lg mb-2">Craft Stunning Websites Effortlessly</span>
              <h2 className="mb-6 font-display text-5xl font-extrabold text-[#483285]">Front CMS</h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed mb-8">
                <p>
                  Experience the next level of ERP integration with eSkooly's innovative Front CMS. Seamlessly merge your ERP functionalities with a powerful website builder to create a cohesive online presence.
                </p>
                <p>
                  Our intuitive page builder empowers you to craft stunning websites effortlessly, enhancing your brand's visibility and engagement. With eSkooly's Front CMS, unlock the full potential of your ERP system and elevate your online experience.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="rounded-full h-12 px-8 shadow-lg shadow-orange-200 bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 text-white border-0" asChild>
                  <a href="https://eskooly.pro/login" target="_blank" rel="noopener noreferrer">Try Live Demo <ArrowRight className="ml-2 h-4 w-4" /></a>
                </Button>
                <Button variant="outline" size="lg" className="rounded-full h-12 px-8 border-[#483285] text-[#483285] hover:bg-[#483285] hover:text-white transition-all" asChild>
                  <Link to="/pricing">Buy Now</Link>
                </Button>
              </div>
            </div>

            <div className="order-2 relative flex items-center justify-center py-10">
              {/* Laptop Mockup */}
              <div className="relative z-10 w-full max-w-[600px]">
                <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[172px] md:h-[294px] w-[301px] md:w-[513px]">
                  <div className="rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white dark:bg-gray-800">
                    <img src={dashboardMockup} className="dark:hidden h-full w-full object-cover" alt="Website Mockup" />
                    <img src={dashboardMockup} className="hidden dark:block h-full w-full object-cover" alt="Website Mockup" />
                  </div>
                </div>
                <div className="relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl rounded-t-sm h-[17px] md:h-[21px] max-w-[351px] md:max-w-[597px]">
                  <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800"></div>
                </div>
              </div>

              {/* Floating Bubbles */}
              <div className="absolute top-0 right-10 w-28 h-28 bg-orange-100/90 backdrop-blur-sm rounded-full flex flex-col items-center justify-center text-center shadow-lg animate-float p-2 border border-orange-200" style={{ animationDelay: '0s' }}>
                <span className="font-bold text-orange-600 text-sm leading-tight">Rich<br />Templates</span>
              </div>
              <div className="absolute bottom-10 left-0 w-28 h-28 bg-blue-100/90 backdrop-blur-sm rounded-full flex flex-col items-center justify-center text-center shadow-lg animate-float p-2 border border-blue-200" style={{ animationDelay: '1.5s' }}>
                <span className="font-bold text-blue-600 text-sm leading-tight">Easy<br />Editing</span>
              </div>
              <div className="absolute top-1/2 left-[-20px] w-24 h-24 bg-purple-100/90 backdrop-blur-sm rounded-full flex flex-col items-center justify-center text-center shadow-lg animate-float p-2 border border-purple-200" style={{ animationDelay: '2.5s' }}>
                <span className="font-bold text-purple-600 text-sm leading-tight">Quick<br />Setup</span>
              </div>
              <div className="absolute top-[-20px] left-1/2 w-26 h-26 bg-green-100/90 backdrop-blur-sm rounded-full flex flex-col items-center justify-center text-center shadow-lg animate-float p-2 border border-green-200" style={{ animationDelay: '1s' }}>
                <span className="font-bold text-green-600 text-sm leading-tight">Mobile<br />Friendly</span>
              </div>
              <div className="absolute bottom-1/2 right-[-20px] w-32 h-32 bg-indigo-100/90 backdrop-blur-sm rounded-full flex flex-col items-center justify-center text-center shadow-lg animate-float p-2 border border-indigo-200" style={{ animationDelay: '2s' }}>
                <span className="font-bold text-indigo-600 text-lg leading-tight">ERP<br />Blend</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing - Arched Cards */}
      <section className="py-24 bg-white" id="pricing">
        <div className="container">
          <div className="mx-auto mb-20 max-w-3xl text-center">
            <span className="mb-3 block font-bold text-orange-500 uppercase tracking-widest text-xs">Choose a plan that's right for you</span>
            <h2 className="mb-6 font-display text-4xl font-bold text-[#483285]">Simple Pricing Plans</h2>
            <p className="text-xl text-muted-foreground">eSkooly Pro has plans, from standard to business, that scale with your needs. Subscribe to a plan that fits you best.</p>
          </div>

          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-3 items-end">
            {/* Standard Card */}
            <div className="relative group">
              <div className="absolute inset-0 bg-red-500 rounded-2xl blur-xl opacity-5 group-hover:opacity-10 transition-opacity"></div>
              <div className="relative bg-white border border-border rounded-b-2xl rounded-t-[40%] pt-20 pb-8 px-8 shadow-card hover:shadow-card-xl transition-all duration-300 flex flex-col items-center">
                <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full bg-gradient-to-br from-red-400 to-pink-600 border-4 border-white flex flex-col items-center justify-center text-white shadow-lg z-10">
                  <span className="text-2xl font-bold">$67</span>
                  <span className="text-xs opacity-90">Lifetime</span>
                </div>
                <h3 className="font-display text-2xl font-bold text-[#483285] mt-6 mb-6">Standard</h3>
                <div className="w-12 h-1 bg-red-100 rounded-full mb-8"></div>
                <ul className="space-y-4 w-full mb-8">
                  {[
                    "Online Pro Version",
                    "1 License",
                    "Lifetime Updates",
                    "Front CMS",
                    "Interface Customization",
                    "1 year Technical Support"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center justify-center text-sm text-muted-foreground">
                      {item}
                    </li>
                  ))}
                </ul>
                <Button className="w-full rounded-full bg-gradient-to-r from-red-400 to-pink-600 hover:from-red-500 hover:to-pink-700 border-0 shadow-lg shadow-red-200 dark:shadow-none text-white h-12" asChild>
                  <Link to="/pricing">Buy Now <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </div>
            </div>

            {/* Premium Card - Center Highlighted */}
            <div className="relative group -mt-8 sm:mt-0">
              <div className="absolute inset-0 bg-cyan-500 rounded-2xl blur-xl opacity-10 group-hover:opacity-20 transition-opacity"></div>
              <div className="relative bg-cyan-500 dark:bg-cyan-900 border border-cyan-400 rounded-b-2xl rounded-t-[40%] pt-24 pb-10 px-8 shadow-2xl hover:scale-105 transition-all duration-300 z-10 flex flex-col items-center">
                <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-40 h-40 rounded-full bg-white border-8 border-cyan-500/30 flex flex-col items-center justify-center text-cyan-600 shadow-xl z-10">
                  <span className="text-4xl font-extrabold">$149</span>
                  <span className="text-sm font-semibold">Lifetime</span>
                </div>
                <h3 className="font-display text-3xl font-bold text-white mt-8 mb-6">Premium</h3>
                <div className="w-16 h-1 bg-white/30 rounded-full mb-10"></div>
                <ul className="space-y-4 w-full mb-10">
                  {[
                    "Online Pro Version",
                    "Android App",
                    "IOS App",
                    "1 License",
                    "Front CMS",
                    "Lifetime Updates",
                    "Interface Customization",
                    "1 year Technical Support"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center justify-center text-white/90 font-medium">
                      {item}
                    </li>
                  ))}
                </ul>
                <Button className="w-full rounded-full bg-white text-cyan-600 hover:bg-cyan-50 border-0 shadow-xl h-14 text-lg font-bold" asChild>
                  <Link to="/pricing">Buy Now <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
              </div>
            </div>

            {/* Business Card */}
            <div className="relative group">
              <div className="absolute inset-0 bg-purple-500 rounded-2xl blur-xl opacity-5 group-hover:opacity-10 transition-opacity"></div>
              <div className="relative bg-white border border-border rounded-b-2xl rounded-t-[40%] pt-20 pb-8 px-8 shadow-card hover:shadow-card-xl transition-all duration-300 flex flex-col items-center">
                <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 border-4 border-white flex flex-col items-center justify-center text-white shadow-lg z-10">
                  <span className="text-2xl font-bold">$999</span>
                  <span className="text-xs opacity-90">Lifetime</span>
                </div>
                <h3 className="font-display text-2xl font-bold text-[#483285] mt-6 mb-6">Business</h3>
                <div className="w-12 h-1 bg-purple-100 rounded-full mb-8"></div>
                <ul className="space-y-4 w-full mb-8">
                  {[
                    "Online Pro Version",
                    "Android App",
                    "IOS App",
                    "50 Licenses",
                    "Full Customization",
                    "5 Years Support"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center justify-center text-sm text-muted-foreground">
                      {item}
                    </li>
                  ))}
                </ul>
                <Button className="w-full rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 border-0 shadow-lg shadow-purple-200 dark:shadow-none text-white h-12" asChild>
                  <Link to="/pricing">Buy Now <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Slider */}
      <section className="py-24 bg-[#5727A3] relative overflow-hidden">
        {/* Wave background svg */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <svg viewBox="0 0 1440 320" className="w-full h-full object-cover text-white fill-current">
            <path fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,213.3C1248,235,1344,213,1392,202.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>

        <div className="container relative z-10 text-white">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h4 className="font-bold text-yellow-400 text-xl mb-2">Testimonials</h4>
              <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">Over 15,000<br />happy clients</h2>
              <p className="text-white/80 text-lg mb-8 leading-relaxed">
                Everyday reviews from users around the world are an important driver of our team.
              </p>
              <Button size="lg" className="rounded-full bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold px-8 h-12 uppercase" asChild>
                <Link to="/pricing">Purchase Now <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>

              {/* Badges */}
              <div className="mt-12 flex items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-black/40 flex items-center justify-center border border-white/20">
                  <span className="text-xs font-bold text-center leading-tight">KIDS<br />CLUB</span>
                </div>
                <div className="w-16 h-16 rounded-full bg-blue-500/40 flex items-center justify-center border border-white/20">
                  <BadgeCheck className="w-8 h-8" />
                </div>
              </div>
            </div>

            <div className="w-full max-w-lg">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent>
                  {testimonials.map((t, index) => (
                    <CarouselItem key={index}>
                      <div className="p-1">
                        <div className="bg-white p-8 rounded-2xl shadow-xl text-gray-800 min-h-[300px] flex flex-col justify-center">
                          <p className="text-lg text-gray-600 mb-6 leading-relaxed italic">
                            "{t.text}"
                          </p>
                          <div className="flex text-yellow-500">
                            {[...Array(t.rating)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex justify-end gap-2 mt-4">
                  <CarouselPrevious className="static translate-y-0 bg-white/10 hover:bg-white/20 border-white/30 text-white" />
                  <CarouselNext className="static translate-y-0 bg-white/10 hover:bg-white/20 border-white/30 text-white" />
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </section>

      {/* Stats / World Map */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <span className="text-orange-500 font-bold mb-2 block">Our stats say more than any words</span>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-[#483285] mb-4">System Without Borders</h2>
              <p className="text-muted-foreground text-lg">
                eSkooly are growing by 300% every year with a steady love from users around the world. We are also close to achieving 25 Thousand cumulative Users.
              </p>
            </div>
            <div className="text-right">
              <div className="flex items-center justify-end gap-2 text-yellow-500 mb-2">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-6 h-6 fill-current" />)}
                <span className="text-foreground font-bold text-lg ml-2">4.9 / 5.0</span>
              </div>
              <div className="text-5xl lg:text-6xl font-extrabold text-green-500 mb-2">5,921+</div>
              <div className="text-xl text-muted-foreground font-medium">Total User Reviews</div>
            </div>
          </div>

          {/* Simulated Map with Bubbles */}
          <div className="relative h-[400px] lg:h-[600px] w-full bg-blue-50/50 dark:bg-blue-900/20 rounded-3xl border border-border/50">
            {/* Simplified World Map Silhouette (CSS shapes or SVG path ideally, using opacity for now) */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <Map className="w-full h-full text-foreground" />
            </div>

            {stats.map((stat, i) => (
              <div key={i} className={`absolute ${stat.position} ${stat.color} rounded-full flex flex-col items-center justify-center text-white shadow-lg animate-float`} style={{ width: '140px', height: '140px', animationDelay: `${i * 0.5}s` }}>
                <span className="text-xs font-medium opacity-90">{stat.label}</span>
                <span className="text-3xl font-bold">{stat.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ - Accordion */}
      <section className="py-24 bg-[#483285]/5">
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Left Header */}
            <div className="lg:col-span-4">
              <div className="sticky top-24">
                <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mb-6 animate-bounce">
                  <HelpCircle className="w-10 h-10 text-yellow-600" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-extrabold text-[#483285] mb-4">Frequently Asked<br />Questions</h2>
                <a href="/faq" className="inline-flex items-center text-[#483285] font-bold hover:underline mt-2">
                  More Questions <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>

            {/* Right List - Accordion */}
            <div className="lg:col-span-8">
              <Accordion type="single" collapsible className="w-full space-y-4">
                {faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="border-b-0 bg-white rounded-xl shadow-sm px-6 py-2">
                    <AccordionTrigger className="text-xl font-bold text-[#483285] hover:text-orange-500 hover:no-underline text-left">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-secondary shrink-0 flex items-center justify-center">
                          <FileText className="w-5 h-5 text-gray-500" />
                        </div>
                        {faq.q}
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-lg text-muted-foreground pl-[72px] leading-relaxed">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Risk Free - Bottom */}
      <section className="py-24 bg-[#5727A3] text-white text-center relative overflow-hidden">
        <div className="container max-w-4xl relative z-10">
          <div className="inline-flex items-center justify-center rounded-full bg-white/20 p-4 mb-8 backdrop-blur-sm">
            <Shield className="h-12 w-12 text-white" />
          </div>
          <h2 className="mb-6 font-display text-4xl font-extrabold tracking-tight">100% Risk Free</h2>
          <p className="text-xl mb-10 opacity-90 leading-relaxed max-w-2xl mx-auto">
            Don't worry! You are fully protected by our <span className="font-bold border-b border-white/40">100% No-Risk Money Back Guarantee</span>.
          </p>
        </div>
        {/* Decorative blob for 100% badge simulation */}
        <div className="absolute right-10 bottom-10 w-32 h-32 bg-purple-500 rounded-full flex items-center justify-center border-4 border-white/20 text-white font-bold text-2xl rotate-12 shadow-2xl opacity-80 lg:opacity-100">
          100%
        </div>
      </section>

      {/* Need Some Help Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Illustration Simulation */}
            <div className="relative h-[500px] w-full flex items-center justify-center lg:order-1">
              {/* Abstract shapes representing the illustration */}
              <div className="relative w-full max-w-md aspect-square">
                <div className="absolute inset-0 bg-blue-50 dark:bg-blue-900/10 rounded-full blur-3xl"></div>
                {/* Person 1 (Woman) */}
                <div className="absolute bottom-0 left-10 w-32 h-64 bg-indigo-500 rounded-t-full opacity-80 z-10"></div>
                <div className="absolute bottom-32 left-8 w-20 h-20 bg-pink-300 rounded-full z-20"></div>

                {/* Person 2 (Man Avatar) */}
                <div className="absolute top-10 right-10 w-24 h-24 bg-purple-600 rounded-full border-4 border-white shadow-xl z-20 flex items-center justify-center text-white">
                  <div className="w-16 h-16 bg-purple-400 rounded-full"></div>
                </div>

                {/* Connecting Lines */}
                <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none stroke-indigo-300 stroke-2 border-dashed">
                  <path d="M100,300 Q200,100 350,150" fill="none" strokeDasharray="5,5" />
                  <path d="M150,350 Q300,400 350,200" fill="none" strokeDasharray="5,5" />
                </svg>

                {/* Chat Bubbles */}
                <div className="absolute top-20 left-20 bg-white p-4 rounded-xl shadow-lg border border-border animate-bounce delay-700">
                  <div className="w-24 h-2 bg-gray-200 rounded mb-2"></div>
                  <div className="w-16 h-2 bg-gray-200 rounded"></div>
                </div>
                <div className="absolute bottom-40 right-20 bg-primary text-primary-foreground p-4 rounded-xl shadow-lg animate-bounce">
                  <div className="w-24 h-2 bg-white/50 rounded mb-2"></div>
                  <div className="w-16 h-2 bg-white/50 rounded"></div>
                </div>
              </div>
            </div>

            <div className="lg:order-2">
              <span className="text-orange-500 font-bold block mb-2 uppercase tracking-wide text-xs">Stop wasting time</span>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-[#483285] mb-4">Need Some Help?</h2>
              <p className="text-base text-muted-foreground mb-8 leading-relaxed">
                Whether you’re stuck or just want some tips on where to start, any problem, hit up our experts anytime.
              </p>

              <div className="space-y-4">
                {/* Card 1 */}
                <a href="https://wa.me/+923460204447" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl bg-white border border-border shadow-sm hover:shadow-md transition-all group">
                  <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                    <div className="w-9 h-9 rounded-full bg-red-100 flex items-center justify-center text-red-500">
                      <HelpCircle className="w-5 h-5" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#483285] group-hover:text-orange-500 transition-colors">Live Chat</h4>
                    <span className="text-green-500 font-medium text-xs">Start a live chat Now</span>
                  </div>
                </a>

                {/* Card 2 */}
                <Link to="/docs" className="flex items-center gap-4 p-4 rounded-xl bg-white border border-border shadow-sm hover:shadow-md transition-all group">
                  <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center shrink-0">
                    <div className="w-9 h-9 rounded-full bg-orange-100 flex items-center justify-center text-orange-500">
                      <FileText className="w-5 h-5" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#483285] group-hover:text-orange-500 transition-colors">Read Documentation</h4>
                    <span className="text-green-500 font-medium text-xs">Complete documentation available</span>
                  </div>
                </Link>

                {/* Card 3 */}
                <a href="/faq" className="flex items-center gap-4 p-4 rounded-xl bg-white border border-border shadow-sm hover:shadow-md transition-all group">
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                    <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center text-blue-500">
                      <HelpCircle className="w-5 h-5" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#483285] group-hover:text-orange-500 transition-colors">Explore FAQs</h4>
                    <span className="text-green-500 font-medium text-xs">Go to FAQs page</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-[#483285] text-white text-center">
        <div className="container px-4">
          <h2 className="text-3xl font-black mb-6">Ready to transform your institution?</h2>
          <Button size="lg" className="rounded-full h-12 px-8 bg-orange-500 hover:bg-orange-600 text-white font-bold" asChild>
            <Link to="/pricing">GET STARTED NOW</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
