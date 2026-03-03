import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  UserCog, User, GraduationCap, IndianRupee, Wallet, Users,
  FileSpreadsheet, BookOpen, MessageSquare, Library, Package,
  Bus, Bed, Globe, BarChart3, Settings, Zap, Globe2, Code,
  Smartphone, Languages, Palette, Bell, SmartphoneNfc, Printer,
  Database, ShieldAlert, History, Download, ShieldCheck
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
  { gradient: "from-[#581C87] to-[#581C87]/80", dot1: "bg-orange-500", dot2: "bg-orange-500", iconText: "text-[#581C87]" },
  { gradient: "from-orange-500 to-orange-600", dot1: "bg-[#581C87]", dot2: "bg-[#581C87]", iconText: "text-orange-500" },
  { gradient: "from-[#581C87] to-[#581C87]/80", dot1: "bg-orange-500", dot2: "bg-orange-500", iconText: "text-[#581C87]" },
  { gradient: "from-orange-500 to-orange-600", dot1: "bg-[#581C87]", dot2: "bg-[#581C87]", iconText: "text-orange-500" },
];

export default function FeaturesPage() {
  return (
    <div className="bg-white">
      <PageHeader title="Features" />

      {/* Hero Intro */}
      <section className="py-12 lg:py-16 border-b border-gray-50 bg-white">
        <div className="w-full px-6 text-center">
          <span className="text-orange-500 font-bold tracking-widest uppercase text-xs mb-3 block">An Exhaustive list of Amazing Features</span>
          <h2 className="font-display text-4xl lg:text-5xl font-black text-[#581C87] mb-4 uppercase tracking-tight">The only application you’ll need to power your life.</h2>
          <p className="text-[#581C87]/70 text-lg max-w-4xl mx-auto leading-relaxed font-medium">
            Numerous features make it possible to customize the system in accordance with all your needs.
          </p>
        </div>
      </section>

      {/* 16 Main Modules Grid */}
      <section className="py-12 lg:py-16">
        <div className="w-full px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
            {mainModules.map((mod, i) => {
              const color = colorPalette[i % colorPalette.length];
              return (
                <div
                  key={i}
                  className={`group relative p-6 rounded-[32px] border transition-all duration-500 flex items-center gap-6 bg-white border-gray-50 hover:border-transparent hover:shadow-2xl hover:-translate-y-1 overflow-hidden`}
                >
                  {/* Active Hover Background Layer */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${color.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}></div>

                  {/* Decorative Elements on hover */}
                  <div className="absolute top-0 right-0 w-full h-full overflow-hidden rounded-[32px] pointer-events-none opacity-0 group-hover:opacity-30 transition-opacity">
                    <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/20 rounded-full blur-xl"></div>
                  </div>

                  {/* Circular Icon Container */}
                  <div className="relative shrink-0 flex items-center justify-center">
                    <div className={`absolute -top-0.5 -right-0.5 w-2 h-2 ${color.dot1} rounded-full border-2 border-white shadow-sm z-10 group-hover:scale-0 transition-transform`}></div>
                    <div className={`absolute -bottom-0.5 -left-0.5 w-2 h-2 ${color.dot2} rounded-full border-2 border-white shadow-sm z-10 group-hover:scale-0 transition-transform`}></div>

                    <div className={`h-20 w-20 rounded-full flex items-center justify-center bg-white border-[4px] border-gray-50 shadow-md relative overflow-hidden transition-all duration-500 group-hover:bg-white/10 group-hover:border-white/20 group-hover:backdrop-blur-md`}>
                      <div className="absolute inset-0 border border-purple-500/5 rounded-full group-hover:opacity-0"></div>

                      <div className={`p-3 rounded-full bg-gray-50 transition-all duration-500 group-hover:bg-transparent group-hover:scale-110 ${color.iconText} group-hover:text-white`}>
                        <mod.icon className={`h-8 w-8`} />
                      </div>
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="flex-1 space-y-1 z-10">
                    <h3 className={`text-xl font-black font-display tracking-tight text-[#581C87] transition-colors duration-500 group-hover:text-white`}>
                      {mod.title}
                    </h3>
                    <p className={`text-[13px] leading-relaxed font-medium text-[#581C87]/70 transition-colors duration-500 group-hover:text-white/80`}>
                      {mod.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Panel Features Detailed List */}
      <section className="py-20 bg-white border-y border-gray-50">
        <div className="w-full max-w-7xl mx-auto px-6">
          <div className="flex flex-col gap-24">
            {panelFeatures.map((panel, idx) => (
              <div key={idx} className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                <div className="w-full lg:w-5/12 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="h-14 w-14 rounded-full bg-orange-500/10 flex flex-shrink-0 items-center justify-center">
                      <div className="h-5 w-5 rounded-sm bg-gradient-to-br from-orange-400 to-orange-600 rotate-45"></div>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-black text-[#581C87] uppercase tracking-tight">{panel.title}</h3>
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                    {panel.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-3 text-[#581C87]/80 group">
                        <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-orange-500 shrink-0"></div>
                        <span className="text-sm font-semibold group-hover:text-[#581C87] transition-colors leading-snug">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="w-full lg:w-7/12">
                  <img 
                    src={`/Eskooly/${
                      idx % 4 === 0 ? "dashboard1.png" : 
                      idx % 4 === 1 ? "general_setting.png" : 
                      idx % 4 === 2 ? "student-transport-report.png" :
                      "admission_query.png"
                    }`} 
                    alt={`${panel.title} Preview`}
                    className="w-full rounded-[2rem] shadow-2xl border border-gray-100 object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grid of 16 Additional Features */}
      <section className="py-20 relative overflow-hidden bg-gray-50">
        <div className="w-full max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center lg:items-start">
            
            {/* Left Decorative Image (Mimicking recharge.png) */}
            <div className="hidden lg:block w-1/4 shrink-0 relative mt-10">
               <img src="/Eskooly/admin_setup.png" alt="Features" className="w-full max-w-[280px] mx-auto drop-shadow-2xl object-cover rounded-3xl hover:-translate-y-2 transition-transform duration-500" />
            </div>

            {/* Right content */}
            <div className="w-full lg:w-3/4">
              <div className="mb-12 text-center lg:text-left">
                <span className="text-orange-500 font-bold tracking-widest uppercase text-xs mb-3 block">AMAZING FEATURES</span>
                <h2 className="font-display text-3xl lg:text-4xl font-black text-[#581C87] mb-4 uppercase tracking-tight">More Features Has eSkooly PRO</h2>
                <p className="text-[#581C87]/70 text-base max-w-2xl leading-relaxed font-medium mx-auto lg:mx-0">
                  It's Vast! ESkooly PRO Has More Additional Feature That Will Expect In A Complete Solution.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {additionalFeatures.map((feature, i) => (
                  <div key={i} className="flex flex-col items-center text-center gap-4 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-orange-500 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-orange-50 to-orange-100 text-orange-600 group-hover:scale-110 group-hover:from-orange-500 group-hover:to-orange-400 group-hover:text-white transition-all duration-300">
                      <feature.icon className="h-7 w-7" />
                    </div>
                    <h4 className="font-bold text-[#581C87] text-sm leading-tight">{feature.title}</h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#581C87] relative overflow-hidden text-center text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent)]"></div>
        <div className="w-full px-6 relative z-10">
          <h2 className="font-display text-3xl md:text-4xl font-black mb-6 max-w-4xl mx-auto leading-tight uppercase tracking-tight">Take control of your school today with Eskoolia.</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="h-12 px-8 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-black text-base border-none shadow-[0_10px_30px_rgba(194,65,12,0.3)]" asChild>
              <Link to="/register">JOIN NOW FREE</Link>
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 rounded-full border-2 border-white/30 bg-white/5 hover:bg-white hover:text-[#581C87] text-white font-black text-base backdrop-blur-sm shadow-xl" asChild>
              <Link to="/contact">CONTACT SALES</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
