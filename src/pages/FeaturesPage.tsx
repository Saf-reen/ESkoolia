import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  UserCog, User, GraduationCap, IndianRupee, Wallet, Users,
  FileSpreadsheet, BookOpen, MessageSquare, Library, Package,
  Bus, Bed, Globe, BarChart3, Settings, Zap, Globe2, Code,
  Smartphone, Languages, Palette, Bell, SmartphoneNfc, Printer,
  Database, ShieldAlert, History, Download, ShieldCheck,
  ChevronRight, ArrowRight, Shield, CheckCircle2
} from "lucide-react";
import PageHeader from "@/components/layout/PageHeader";

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
  { icon: Zap, title: "Optimized Performance" },
  { icon: Download, title: "One Click Update System" },
  { icon: Code, title: "Supports RESTful APIs" },
  { icon: ShieldCheck, title: "Clean Code Quality" },
  { icon: Zap, title: "Installation Wizard" },
  { icon: Smartphone, title: "Fully Responsive" },
  { icon: Globe2, title: "Supports Right-to-Left" },
  { icon: Languages, title: "Multilingual" },
  { icon: Palette, title: "Themes & Colors Styling Options" },
  { icon: Bell, title: "Email Notification with Templates" },
  { icon: SmartphoneNfc, title: "Supports SMS Notification" },
  { icon: Printer, title: "Printable Reports" },
  { icon: Database, title: "Inbuilt Backup Tool" },
  { icon: ShieldAlert, title: "IP Filter & Block" },
  { icon: History, title: "Activity & Email Log" },
  { icon: Download, title: "Export Reports" },
];

const panelFeatures = [
  {
    title: "ADMIN SECTION",
    features: [
      "Admission Query", "Visitor Book", "Phone Call Log", "Postal Receive", "Postal Dispatch",
      "Complain", "Admin Setup", "Setup Front Office", "Managing User accounts (teacher, student, parent)",
      "Managing classes, subjects", "Managing class routine", "Managing exam, grades",
      "Managing exam marks", "Sending exam marks via sms", "Managing Students Attendance",
      "Student Certificate", "Generate Certificate", "Student Id Card", "Generate Id Card",
      "Managing accounting, income & expenses", "Student Admission", "Student Details",
      "Student Promote", "Managing School events", "Student Category", "Student Group",
      "Desabled Student", "Managing library, dormitory, transport", "Messaging between other users",
      "Managing system settings (general, massaging , language)"
    ]
  },
  {
    title: "TEACHER PANEL FEATURES",
    features: [
      "Add Homework", "Evaluation Report", "Upload Content", "Assignments", "Study Material",
      "Syllabus", "Other Downloads", "Teacher", "Managing students", "Managing exam marks", "Managing attendance"
    ]
  },
  {
    title: "PARENTS PANEL FEATURES",
    features: [
      "Get children marks", "Get children payment invoices", "Get children class routine",
      "Messaging with teachers", "Childs attendance tracking"
    ]
  },
  {
    title: "STUDENT PANEL FEATURES",
    features: [
      "Get class routine", "Get exam marks", "Get attendance status", "Get study materials / files from teacher",
      "Get payment invoices, pay online", "Communicate with teacher"
    ]
  },
  {
    title: "FEES COLLECTION",
    features: [
      "Fees payment", "Collect Fees", "Search fees Payment", "Search fees due", "Fees Master",
      "Fees Group", "Fees type", "Fees statement", "Reports", "Invoice", "Fees carry Forward",
      "Paid/due fees statement etc"
    ]
  },
  {
    title: "ACCOUNTS",
    features: [
      "Account Dashboard", "Profit", "Income", "Expense", "Search", "Account List", "Payment Method",
      "Bank Account", "Payment History"
    ]
  },
  {
    title: "HUMAN RESOURCE",
    features: [
      "Staff Directory", "Staff Attendence", "Staff Attendence Report", "Payroll", "Payroll Report"
    ]
  },
  {
    title: "EXAMINATION",
    features: [
      "Add Exam", "Exam", "Add Exam Type", "Exam Schedule", "Seat plan", "Exam routine",
      "Marks Register", "Exam Attendence", "Marks Grade", "Send Marks by SMS", "Question Group",
      "Question Bank", "Online Exam", "Date & time organization", "Schedule notice", "Instruction",
      "Mark sheet & Report"
    ]
  },
  {
    title: "ACADEMICS",
    features: [
      "Dashboard", "Class Routine", "View Class Routine (Teacher)", "Assign Subject",
      "Assign Class Teacher", "Subjects", "Class", "Sections", "Class Room", "CL/EX Time Setup",
      "Subjective assign"
    ]
  },
  {
    title: "COMMUNICATE",
    features: [
      "Notice Board", "Send Massage", "Send Email/Sms", "Email/Sms", "Event notice", "Event Logs",
      "Holiday notice"
    ]
  },
  {
    title: "LIBRARY",
    features: [
      "Add Book", "Book List", "Add Member", "Member listing & manage", "Book category/list",
      "Issue/Return Book", "All Issued Book", "Card issuing"
    ]
  },
  {
    title: "INVENTORY",
    features: [
      "Item Category", "Item List", "Item Store", "Supplier", "Item Receive", "Item Receive List",
      "Item Sell", "Item Issue"
    ]
  },
  {
    title: "HOMEWORK",
    features: [
      "Add Home Work", "Home Work List", "Home Work Evaluation Report"
    ]
  },
  {
    title: "TRANSPORT",
    features: [
      "Routes", "Vehicle", "Assign Vehicle", "Student Transport Report", "Schedule/Routine"
    ]
  },
  {
    title: "DORMITORY",
    features: [
      "Dormitory Rooms", "Dormitory", "Room Type", "Rooms monitoring", "Student Dormitory Report"
    ]
  },
  {
    title: "REPORTS",
    features: [
      "Student Report", "Guardian Report", "Student History", "Student Login Report", "Fees Statement",
      "Balance Fees Report", "Transjection Report", "Class Report", "Class Routine Report",
      "Exam Routine Report", "Teacher Class Routine", "Merit List Report", "Online Exam Report",
      "Mark Sheet Report", "Tabulation Sheet Report", "Progress Card Report", "Student Fine Report",
      "User Log", "Attendants Report (Teacher & Student both) and Many More…"
    ]
  },
  {
    title: "SYSTEM SETTINGS",
    features: [
      "General Settings", "Email Settings", "Payment Method Settings", "Role Permission", "Base Group",
      "Base Setup", "Academic year", "Session", "Holiday", "SMS Settings", "Weekend", "Language Settings", "Backup"
    ]
  }
];

const colorPalette = [
  { gradient: "from-[#581C87] to-[#581C87]/80", dot1: "bg-gradient-to-r from-purple-600 to-orange-600", dot2: "bg-gradient-to-r from-purple-600 to-orange-600", iconText: "text-[#581C87]" },
  { gradient: "from-orange-600 to-orange-600", dot1: "bg-[#581C87]", dot2: "bg-[#581C87]", iconText: "text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-orange-600" },
  { gradient: "from-[#581C87] to-[#581C87]/80", dot1: "bg-gradient-to-r from-purple-600 to-orange-600", dot2: "bg-gradient-to-r from-purple-600 to-orange-600", iconText: "text-[#581C87]" },
  { gradient: "from-orange-600 to-orange-600", dot1: "bg-[#581C87]", dot2: "bg-[#581C87]", iconText: "text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-orange-600" },
];

export default function FeaturesPage() {
  const [activePanel, setActivePanel] = useState("");

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <div className="bg-white selection:bg-purple-100 selection:text-purple-900">
      <PageHeader title="Features" />

      {/* Hero Intro - KEEP UNCHANGED */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="w-full px-6 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-orange-600 font-bold tracking-widest uppercase text-xs mb-3 block">An Exhaustive list of Amazing Features</span>
          <h2 className="font-display text-4xl lg:text-5xl font-black text-[#581C87] mb-4 uppercase tracking-tight">The only application you’ll need to power your life.</h2>
          <p className="text-[#581C87]/70 text-lg max-w-4xl mx-auto leading-relaxed font-medium">
            Numerous features make it possible to customize the system in accordance with all your needs.
          </p>
        </div>
      </section>

      {/* Decorative Background Elements */}
      <div className="relative">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-purple-200/20 blur-[120px] rounded-full -z-10"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-orange-200/20 blur-[120px] rounded-full -z-10"></div>

        {/* 1. Core Modules Section */}
        <section className="py-20 lg:py-32 relative">

          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-black text-[#581C87] mb-4 uppercase tracking-tight">Powerful Core Modules</h2>
              <p className="text-[#581C87]/70 max-w-2xl mx-auto">Scalable solutions tailored for comprehensive school management and administrative excellence.</p>
            </div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full"
            >
              {mainModules.map((mod, i) => {
                const colors = [
                  "bg-blue-50 text-blue-600 border-blue-100 group-hover:bg-blue-600",
                  "bg-orange-50 text-orange-600 border-orange-100 group-hover:bg-orange-600",
                  "bg-purple-50 text-purple-600 border-purple-100 group-hover:bg-purple-600",
                  "bg-emerald-50 text-emerald-600 border-emerald-100 group-hover:bg-emerald-600",
                ];
                const colorClass = colors[i % colors.length];

                return (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    whileHover={{ y: -8 }}
                    className="group flex flex-col p-8 rounded-3xl bg-white border border-gray-100 transition-all duration-300 hover:shadow-[0_20px_50px_rgba(88,28,135,0.1)] hover:border-purple-100 relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/5 to-transparent rounded-bl-full -z-10 transition-transform duration-500 group-hover:scale-150"></div>
                    
                    <div className={`h-14 w-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 border ${colorClass} group-hover:text-white group-hover:shadow-lg`}>
                      <mod.icon className="h-7 w-7" />
                    </div>

                    <h3 className="text-xl font-bold text-[#581C87] mb-3 group-hover:text-purple-700 transition-colors">
                      {mod.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[#581C87]/60 font-medium mb-6">
                      {mod.desc}
                    </p>

                    <div className="mt-auto pt-4 flex items-center text-xs font-black uppercase tracking-wider text-purple-600 opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* 2. Additional Features (Icon Matrix) */}
        <section className="py-24 bg-slate-50 relative overflow-hidden">
          {/* Subtle Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#581C87 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
          
          <div className="max-w-7xl mx-auto px-6 relative">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="w-full lg:w-1/3 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100/50 text-orange-700 text-xs font-black uppercase tracking-widest mb-6">
                  <Zap className="h-4 w-4" /> Amazing Capabilities
                </div>
                <h2 className="text-3xl lg:text-4xl font-black text-[#581C87] mb-6 uppercase tracking-tight leading-[1.1]">More Features Has eSkoolia PRO</h2>
                <p className="text-[#581C87]/70 text-lg leading-relaxed font-medium mb-8">
                  It's Vast! eSkoolia PRO includes a full suite of additional features built for the most demanding school environments.
                </p>
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                   <div className="flex items-center gap-2 text-[#581C87] font-bold py-2 px-4 rounded-xl bg-white border border-gray-100 shadow-sm">
                     <Shield className="h-4 w-4 text-purple-600" /> Enterprise Grade
                   </div>
                   <div className="flex items-center gap-2 text-[#581C87] font-bold py-2 px-4 rounded-xl bg-white border border-gray-100 shadow-sm">
                     <CheckCircle2 className="h-4 w-4 text-emerald-600" /> Fully Optimized
                   </div>
                </div>
              </div>

              <div className="w-full lg:w-2/3">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {additionalFeatures.map((feature, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.05, backgroundColor: "#fff" }}
                      className="flex flex-col items-center justify-center p-6 rounded-2xl border border-gray-200/60 bg-white/50 backdrop-blur-sm transition-all duration-300 group hover:shadow-xl hover:border-purple-200"
                    >
                      <div className="h-12 w-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-4 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                        <feature.icon className="h-6 w-6" />
                      </div>
                      <h4 className="font-bold text-[#581C87] text-xs text-center leading-tight uppercase tracking-wide">{feature.title}</h4>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Panel Deep Features (Accordion + Visual Preview) */}
        <section className="py-24 lg:py-40 bg-white relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <span className="text-purple-600 font-black uppercase tracking-widest text-xs mb-3 block">Deep Dive</span>
              <h2 className="text-3xl lg:text-5xl font-black text-[#581C87] uppercase tracking-tight">Platform Capabilities</h2>
              <div className="w-20 h-1.5 bg-gradient-to-r from-purple-600 to-orange-600 mx-auto mt-6 rounded-full"></div>
            </div>

            <div className="flex flex-col lg:flex-row gap-16 items-stretch">
              {/* Left Side: Accordion */}
              <div className="w-full lg:w-5/12 sticky top-24">
                <Accordion 
                  type="single" 
                  collapsible 
                  onValueChange={setActivePanel}
                  className="w-full space-y-4"
                >
                  {panelFeatures.map((panel, idx) => (
                    <AccordionItem 
                      key={idx} 
                      value={`item-${idx}`}
                      className="border-none bg-slate-50/50 rounded-2xl px-6 transition-all duration-300 data-[state=open]:bg-white data-[state=open]:shadow-[0_10px_40px_rgba(88,28,135,0.08)] data-[state=open]:border data-[state=open]:border-purple-100"
                    >
                      <AccordionTrigger className="hover:no-underline py-6">
                        <div className="flex items-center gap-4 text-left">
                          <div className={`h-10 w-10 rounded-xl flex items-center justify-center transition-colors ${activePanel === `item-${idx}` ? 'bg-purple-600 text-white' : 'bg-white text-purple-600 border border-gray-100 shadow-sm'}`}>
                            {idx === 0 ? <UserCog className="h-5 w-5" /> : idx === 1 ? <User className="h-5 w-5" /> : <Settings className="h-5 w-5" />}
                          </div>
                          <span className={`text-lg font-black tracking-tight ${activePanel === `item-${idx}` ? 'text-purple-900' : 'text-[#581C87]'}`}>
                            {panel.title}
                          </span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pb-8 pt-2">
                        <div className="grid grid-cols-1 gap-3">
                          {panel.features.map((f, i) => (
                            <div key={i} className="flex items-center gap-3 text-[#581C87]/70 group">
                              <ChevronRight className="h-4 w-4 text-orange-500 shrink-0 group-hover:translate-x-1 transition-transform" />
                              <span className="text-sm font-bold group-hover:text-purple-700 transition-colors uppercase tracking-wide">{f}</span>
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              <div className="w-full lg:w-7/12">
                <div className="sticky top-24">
                  <div className="relative group">
                    {/* Decorative Frame */}
                    <div className="absolute -inset-4 bg-gradient-to-tr from-purple-100 to-orange-100 rounded-[2.5rem] blur-2xl opacity-50 -z-10 group-hover:opacity-100 transition-opacity duration-700"></div>
                    
                    <div className="bg-slate-900 rounded-[2rem] p-2 shadow-2xl border border-gray-200 overflow-hidden aspect-[4/3] flex items-center justify-center">
                      <AnimatePresence mode="wait">
                        <motion.img
                          key={activePanel}
                          initial={{ opacity: 0, scale: 0.95, y: 20 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 1.05, y: -20 }}
                          transition={{ duration: 0.4 }}
                          src={`/Eskooly/${
                            activePanel === "" ? "dashboard1.png" :
                            parseInt(activePanel.split("-")[1]) % 4 === 0 ? "dashboard1.png" :
                            parseInt(activePanel.split("-")[1]) % 4 === 1 ? "general_setting.png" :
                            parseInt(activePanel.split("-")[1]) % 4 === 2 ? "student-transport-report.png" :
                            "admission_query.png"
                          }`}
                          alt="Feature Preview"
                          className="w-full h-full object-cover rounded-2xl"
                        />
                      </AnimatePresence>
                    </div>

                    {/* Feature Highlight Overlay */}
                    <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-3xl shadow-2xl border border-gray-100 hidden md:block max-w-[240px]">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></div>
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Live Module</span>
                      </div>
                      <p className="text-xs font-black text-[#581C87] uppercase tracking-tight">Real-time data synchronization across all school departments.</p>
                    </div>
                  </div>

                  {/* Bottom Highlight Cards to fill empty space */}
                  <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <motion.div 
                      whileHover={{ y: -5 }}
                      className="bg-slate-50 p-6 rounded-3xl border border-gray-100 shadow-sm transition-colors hover:bg-white hover:border-orange-100"
                    >
                      <div className="h-10 w-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center mb-4">
                        <Zap className="h-5 w-5" />
                      </div>
                      <h4 className="text-sm font-black text-[#581C87] uppercase tracking-wider mb-2">Lightning Fast</h4>
                      <p className="text-[11px] text-[#581C87]/60 font-black uppercase leading-relaxed tracking-wide">Optimization for instant data retrieval and smooth transitions.</p>
                    </motion.div>
                    <motion.div 
                      whileHover={{ y: -5 }}
                      className="bg-slate-50 p-6 rounded-3xl border border-gray-100 shadow-sm transition-colors hover:bg-white hover:border-purple-100"
                    >
                      <div className="h-10 w-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center mb-4">
                        <Shield className="h-5 w-5" />
                      </div>
                      <h4 className="text-sm font-black text-[#581C87] uppercase tracking-wider mb-2">Cloud Secured</h4>
                      <p className="text-[11px] text-[#581C87]/60 font-black uppercase leading-relaxed tracking-wide">Enterprise-grade encryption and automated daily backups.</p>
                    </motion.div>
                  </div>

                  {/* Secondary Trust Indicator */}
                  <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-6 py-4 px-8 bg-slate-50/50 rounded-2xl border border-dashed border-gray-200">
                    <div className="flex items-center gap-4">
                      <div className="flex -space-x-2">
                        {[1,2,3,4].map(i => (
                          <div key={i} className="h-6 w-6 rounded-full bg-gray-200 border-2 border-white"></div>
                        ))}
                      </div>
                      <span className="text-[10px] font-black text-[#581C87]/50 uppercase tracking-widest">Trusted by 200+ Schools</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
                      <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">System Online</span>
                    </div>
                  </div>

                  {/* New Content: Support & Key Benefits */}
                  <div className="mt-6 p-6 rounded-3xl bg-gradient-to-br from-[#581C87] to-purple-900 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -mr-8 -mt-8 blur-2xl"></div>
                    <div className="relative z-10">
                      <h4 className="text-sm font-black uppercase tracking-wider mb-3">Enterprise Support Included</h4>
                      <p className="text-[11px] text-white/70 font-medium leading-relaxed mb-4">Every eSkoolia subscription comes with dedicated implementation specialists and 24/7 technical assistance.</p>
                      <div className="flex flex-wrap gap-x-6 gap-y-2">
                         <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest bg-white/10 py-1.5 px-3 rounded-lg">
                           <CheckCircle2 className="h-3 w-3 text-emerald-400" /> WhatsApp Support
                         </div>
                         <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest bg-white/10 py-1.5 px-3 rounded-lg">
                           <CheckCircle2 className="h-3 w-3 text-emerald-400" /> Data Migration
                         </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-4">
                     <div className="space-y-3">
                        <span className="text-[10px] font-black text-[#581C87]/40 uppercase tracking-widest">Performance Stats</span>
                        <div className="flex items-end gap-2">
                           <span className="text-2xl font-black text-[#581C87]">99.9%</span>
                           <span className="text-[10px] font-bold text-emerald-600 mb-1">Uptime</span>
                        </div>
                     </div>
                     <div className="space-y-3">
                        <span className="text-[10px] font-black text-[#581C87]/40 uppercase tracking-widest">Update Cycle</span>
                        <div className="flex items-end gap-2">
                           <span className="text-2xl font-black text-[#581C87]">Monthly</span>
                           <span className="text-[10px] font-bold text-purple-600 mb-1">New Features</span>
                        </div>
                     </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* CTA Section - KEEP UNCHANGED */}
      <section className="py-16 bg-[#581C87] relative overflow-hidden text-center text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent)]"></div>
        <div className="w-full px-6 relative z-10">
          <h2 className="font-display text-3xl md:text-4xl font-black mb-6 max-w-4xl mx-auto leading-tight uppercase tracking-tight">Take control of your school today with eSkoolia.</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" aria-label="Start your free trial" className="h-12 px-8 rounded-full bg-gradient-to-r from-purple-600 to-orange-600 hover:bg-gradient-to-r from-purple-600 to-orange-600 text-white font-black text-base border-none shadow-[0_10px_30px_rgba(88,28,135,0.3)]" asChild>
              <Link to="/register">START FREE TRIAL</Link>
            </Button>
            <Button size="lg" aria-label="Book a product demo" variant="outline" className="h-12 px-8 rounded-full border-2 border-white/30 bg-white/5 hover:bg-white hover:text-[#581C87] text-white font-black text-base backdrop-blur-sm shadow-xl" asChild>
              <Link to="/contact">BOOK A DEMO</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
