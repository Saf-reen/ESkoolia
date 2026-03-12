import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  UserCog, User, GraduationCap, IndianRupee, Wallet, Users,
  FileSpreadsheet, BookOpen, MessageSquare, Library, Package,
  Bus, Bed, Globe, BarChart3, Settings, Zap, Globe2, Code,
  Smartphone, Languages, Palette, Bell, SmartphoneNfc, Printer,
  Database, ShieldAlert, History, Download, ShieldCheck, ArrowRight,
  LayoutDashboard, SmartphoneIcon
} from "lucide-react";
import PageHeader from "@/components/layout/PageHeader";
import { motion, AnimatePresence } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";

const mainModules = [
  { icon: UserCog, title: "Admin Module", desc: "Managing other accounts, Manage Teacher, Student, Guardian etc" },
  { icon: User, title: "Student Info", desc: "Student Admission, Student List, Student Attendance, Promote, Reports, etc." },
  { icon: GraduationCap, title: "Teacher", desc: "Uploading Content, Material, Assignment, Syllabus Downloads and many more." },
  { icon: IndianRupee, title: "Fees Collection", desc: "Fees Master Collect Fees Due fees searches Discount and many more" },
  { icon: Wallet, title: "Accounts", desc: "Profit, Income, Expense Search Query Account List Payment Methods etc." },
  { icon: Users, title: "Human Resource", desc: "Staff (Directory, Attendance, Reports) Payroll Designation Department and more." },
  { icon: FileSpreadsheet, title: "Examination", desc: "Exam routine, Date & time Schedule notice. Seat plan Mark sheet & Report etc." },
  { icon: BookOpen, title: "Academics", desc: "Class Routine Subjective assign Teacher assign Manage Subject etc." },
  { icon: MessageSquare, title: "Communication", desc: "Notice Manage (Holiday, Events etc) Massaging Emailing Reports and More" },
  { icon: Library, title: "Library", desc: "Book adding, removing, Card issuing Member listing & manage Book category/list" },
  { icon: Package, title: "Inventory", desc: "Inventory Item (Listing, Storing, Categories) Supply Item Sell, Issuing etc Item receiving etc." },
  { icon: Bus, title: "Transport", desc: "Roads, Vehicles listing, Schedule/routine, student transport Reports etc." },
  { icon: Bed, title: "Dormitory", desc: "Dormitory finding Categories & Listing Rooms monitoring Reports etc." },
  { icon: Globe, title: "Front CMS", desc: "No need to develop a seprate website for your school. it's pre-build." },
  { icon: BarChart3, title: "Reports", desc: "Class reports, student’s reports, Progress card, Attendant reports and many more." },
  { icon: Settings, title: "System Settings", desc: "General Settings, Email, Permission Setup Backup Restore, System Update and more." },
];

const additionalFeatures = [
  { icon: Zap, title: "Optimized Performance", color: "bg-blue-50 text-blue-600" },
  { icon: Download, title: "One Click Update System", color: "bg-orange-50 text-orange-600" },
  { icon: Code, title: "Supports RESTful APIs", color: "bg-indigo-50 text-indigo-600" },
  { icon: ShieldCheck, title: "Clean Code Quality", color: "bg-emerald-50 text-emerald-600" },
  { icon: Zap, title: "Installation Wizard", color: "bg-amber-50 text-amber-600" },
  { icon: Smartphone, title: "Fully Responsive", color: "bg-purple-50 text-purple-600" },
  { icon: Globe2, title: "Supports RTL", color: "bg-sky-50 text-sky-600" },
  { icon: Languages, title: "Multilingual", color: "bg-rose-50 text-rose-600" },
  { icon: Palette, title: "Theming Options", color: "bg-fuchsia-50 text-fuchsia-600" },
  { icon: Bell, title: "Email Templates", color: "bg-yellow-50 text-yellow-600" },
  { icon: SmartphoneNfc, title: "SMS Notifications", color: "bg-green-50 text-green-600" },
  { icon: Printer, title: "Printable Reports", color: "bg-slate-50 text-slate-600" },
  { icon: Database, title: "Backup Tool", color: "bg-cyan-50 text-cyan-600" },
  { icon: ShieldAlert, title: "Security Layers", color: "bg-red-50 text-red-600" },
  { icon: History, title: "Cloud Logs", color: "bg-teal-50 text-teal-600" },
  { icon: Download, title: "Instant Export", color: "bg-violet-50 text-violet-600" },
];

const panelFeatures = [
  {
    title: "ADMIN SECTION",
    image: "/Eskooly/dashboard1.png",
    features: [
      "Admission Query", "Visitor Book", "Phone Call Log", "Postal Receive", "Postal Dispatch",
      "Complain Management", "Setup Front Office", "User Management"
    ]
  },
  {
    title: "TEACHER PANEL",
    image: "/Eskooly/general_setting.png",
    features: [
      "Add Homework", "Evaluation Report", "Upload Content", "Assignments", 
      "Syllabus Management", "Teacher Dashboard", "Exam Marks Entry"
    ]
  },
  {
    title: "PARENTS & STUDENTS",
    image: "/Eskooly/admission_query.png",
    features: [
      "Real-time Marks Access", "Fee Invoices", "Class Routine", 
      "Attendance Tracking", "Study Materials", "Online Payments"
    ]
  },
  {
    title: "OPERATIONS",
    image: "/Eskooly/student-transport-report.png",
    features: [
      "Human Resource", "Payroll System", "Inventory Management", 
      "Library System", "Transport Tracking", "Dormitory Monitoring"
    ]
  },
];

const BackgroundDecorations = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
    <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-100/30 rounded-full blur-[120px] -translate-y-1/2"></div>
    <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-orange-100/30 rounded-full blur-[120px] translate-y-1/2"></div>
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
  </div>
);

export default function FeaturesPage() {
  const [activePanel, setActivePanel] = useState(panelFeatures[0].title);

  return (
    <div className="bg-white min-h-screen selection:bg-purple-100 selection:text-purple-700">
      <PageHeader title="Features" />

      {/* Hero Intro - KEPT SAME AS ORIGINAL */}
      <section className="py-12 lg:py-16 border-b border-gray-50 bg-white">
        <div className="w-full px-6 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-orange-600 font-bold tracking-widest uppercase text-xs mb-3 block">An Exhaustive list of Amazing Features</span>
          <h2 className="font-display text-4xl lg:text-5xl font-black text-[#581C87] mb-4 uppercase tracking-tight">The only application you’ll need to power your life.</h2>
          <p className="text-[#581C87]/70 text-lg max-w-4xl mx-auto leading-relaxed font-medium">
            Numerous features make it possible to customize the system in accordance with all your needs.
          </p>
        </div>
      </section>

      {/* Core Modules Grid (Modified to 4 columns, modern cards) */}
      <section className="py-24 relative overflow-hidden">
        <BackgroundDecorations />
        <div className="w-full px-6 max-w-[1600px] mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl lg:text-4xl font-black text-[#581C87]">Core Product Modules</h2>
            <p className="text-muted-foreground text-sm max-w-2xl mx-auto">Integrated solutions designed to handle every aspect of educational institution management with ease.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {mainModules.map((mod, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group relative bg-white border border-gray-100 p-8 rounded-[32px] hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 hover:-translate-y-2 overflow-hidden flex flex-col h-full"
              >
                {/* Glassmorphism Background Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-orange-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                
                <div className="mb-6 relative">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#581C87]/5 to-[#581C87]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <mod.icon className="w-7 h-7 text-[#581C87]" />
                  </div>
                  {/* Decorative dot */}
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full border-4 border-white group-hover:scale-125 transition-transform" />
                </div>
                
                <h3 className="text-xl font-black text-[#581C87] mb-3 group-hover:text-purple-700 transition-colors">{mod.title}</h3>
                <p className="text-sm text-[#581C87]/70 leading-relaxed mb-6 flex-grow">{mod.desc}</p>
                
                <div className="flex items-center text-[#581C87] text-xs font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                  Learn More 
                  <ArrowRight className="ml-2 w-3 h-3" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Capabilities (Additional Features Matrix) */}
      <section className="py-24 bg-slate-50/50 relative border-y border-gray-100">
        <div className="w-full px-6 max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-6">
            <div className="space-y-3">
              <span className="text-purple-600 font-bold tracking-widest text-[10px] uppercase bg-purple-50 px-3 py-1 rounded-full">Technical Excellence</span>
              <h2 className="text-3xl lg:text-4xl font-black text-[#581C87]">Platform Capabilities</h2>
              <p className="text-muted-foreground text-sm max-w-xl">Deep technical integrations and security standards that make eSkoolia the most reliable choice for institutions.</p>
            </div>
            <Link to="/contact" className="hidden lg:flex items-center gap-2 text-[#581C87] font-bold text-sm hover:underline">
              View Technical Specs <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {additionalFeatures.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-5 rounded-2xl border border-gray-50 flex items-center gap-4 hover:shadow-lg transition-all group cursor-default"
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${f.color} group-hover:rotate-12 transition-transform`}>
                  <f.icon className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-[#581C87] text-xs leading-tight">{f.title}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Panel Deep Features (Accordion + Visual Preview) */}
      <section className="py-32 relative overflow-hidden bg-white">
        <div className="w-full px-6 max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-3xl lg:text-4xl font-black text-[#581C87]">Deep Product Insights</h2>
            <p className="text-muted-foreground text-sm max-w-2xl mx-auto">Take a closer look at the granular features that power each persona within your institution.</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-5/12">
              <Accordion 
                type="single" 
                defaultValue={panelFeatures[0].title}
                onValueChange={(val) => val && setActivePanel(val)}
                className="w-full space-y-4"
              >
                {panelFeatures.map((panel, i) => (
                  <AccordionItem 
                    key={i} 
                    value={panel.title} 
                    className="border border-gray-100 rounded-3xl px-6 data-[state=open]:bg-purple-50/50 data-[state=open]:border-purple-200 transition-colors overflow-hidden"
                  >
                    <AccordionTrigger className="hover:no-underline py-6">
                      <div className="flex items-center gap-4">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${activePanel === panel.title ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-500'}`}>
                          {i === 0 ? <LayoutDashboard className="w-4 h-4" /> : <SmartphoneIcon className="w-4 h-4" />}
                        </div>
                        <span className="font-black text-left uppercase tracking-tight text-[#581C87]">{panel.title}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-8">
                      <ul className="grid grid-cols-1 gap-3 ml-14">
                        {panel.features.map((f, fi) => (
                          <li key={fi} className="flex items-center gap-3 text-sm font-semibold text-[#581C87]/70">
                            <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <div className="w-full lg:w-7/12">
              <div className="relative group">
                {/* Decorative blobs for the image */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-purple-500 to-orange-500 rounded-[3rem] blur-2xl opacity-10 group-hover:opacity-20 transition-opacity" />
                
                <div className="relative bg-white p-2 rounded-[3.1rem] shadow-2xl border border-gray-100 overflow-hidden aspect-[16/10]">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activePanel}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4 }}
                      src={panelFeatures.find(p => p.title === activePanel)?.image}
                      alt="Feature Preview"
                      className="w-full h-full object-cover rounded-[2.8rem]"
                    />
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - KEPT FUNCTIONALITY SAME */}
      <section className="py-24 bg-[#581C87] relative overflow-hidden text-center text-white">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent)]" 
        />
        <div className="w-full px-6 relative z-10">
          <h2 className="font-display text-4xl md:text-5xl font-black mb-8 max-w-4xl mx-auto leading-tight uppercase tracking-tight">
            Ready to digitize your <span className="text-orange-400">entire campus?</span>
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button 
              size="lg" 
              className="h-14 px-10 rounded-full bg-white text-[#581C87] hover:bg-orange-400 hover:text-white transition-all duration-300 font-black text-lg border-none hover:shadow-[0_10px_30px_rgba(251,146,60,0.4)]" 
              asChild
            >
              <Link to="/register">GET STARTED FOR FREE</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="h-14 px-10 rounded-full border-2 border-white/30 bg-white/5 hover:bg-white/10 text-white font-black text-lg backdrop-blur-sm" 
              asChild
            >
              <Link to="/contact">REQUEST A DEMO</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

