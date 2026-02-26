import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  UserCog, User, GraduationCap, DollarSign, Wallet, Users,
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
  { icon: DollarSign, title: "Fees Collection", desc: "Fees Master Collect Fees Due fees searches Discount and many more" },
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
  { icon: Palette, title: "Themes & Colors Styling" },
  { icon: Bell, title: "Email Notification Templates" },
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
      "Complain", "Admin Setup", "Setup Front Office", "Managing User accounts", "Managing classes & subjects",
      "Managing class routine", "Managing exam & grades", "Managing exam marks", "Sending marks via SMS",
      "Students Attendance", "Student Certificate", "Generate ID Card", "Accounting & Finance",
      "Student Admission", "Student Details", "Student Promote", "School Events", "Library & Transport"
    ]
  },
  {
    title: "TEACHER PANEL",
    features: [
      "Add Homework", "Evaluation Report", "Upload Content", "Assignments", "Study Material",
      "Syllabus", "Other Downloads", "Managing students", "Managing exam marks", "Managing attendance"
    ]
  },
  {
    title: "PARENTS PANEL",
    features: [
      "Get children marks", "Get payment invoices", "Get class routine", "Messaging with teachers", "Childs attendance tracking"
    ]
  },
  {
    title: "STUDENT PANEL",
    features: [
      "Get class routine", "Get exam marks", "Get attendance status", "Get study materials", "Get payment invoices", "Pay online", "Communicate with teacher"
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
          <h2 className="font-display text-4xl lg:text-5xl font-black text-[#581C87] mb-4 uppercase tracking-tight">The last software you will have to use!</h2>
          <p className="text-[#581C87]/70 text-lg max-w-4xl mx-auto leading-relaxed font-medium">
            Every Single Module You Want That Are Available, Curiosity Is Future Of New Discover. Explore All Our Single Modules That Will Blow Your Mind!
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
      <section className="py-12 bg-gray-50 border-y border-gray-50">
        <div className="w-full px-6">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl font-black text-[#581C87] mb-3 uppercase tracking-tight">Panel Specific Features</h2>
            <p className="text-[#581C87]/60 text-sm font-medium">Tailored interfaces for every user in your institution</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {panelFeatures.map((panel, idx) => (
              <div key={idx} className="bg-white p-6 rounded-[24px] shadow-sm border border-gray-50 hover:shadow-lg transition-all">
                <h3 className="text-2xl font-black text-[#581C87] mb-6 pb-3 border-b border-gray-50 flex items-center gap-2">
                  <div className="w-1.5 h-6 bg-orange-500 rounded-full"></div>
                  {panel.title}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2.5 gap-x-4">
                  {panel.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-[#581C87]/70 group">
                      <div className="h-1 w-1 rounded-full bg-[#581C87]/20 group-hover:bg-orange-500 transition-colors"></div>
                      <span className="text-lg font-bold group-hover:text-[#581C87] transition-colors">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grid of 16 Additional Features */}
      <section className="py-16 relative overflow-hidden bg-white">
        <div className="w-full px-6 text-center mb-12">
          <span className="text-orange-500 font-bold tracking-widest uppercase text-xs mb-3 block">AMAZING FEATURES</span>
          <h2 className="font-display text-3xl lg:text-4xl font-black text-[#581C87] mb-4 uppercase tracking-tight">More Features Has eSkoolia PRO</h2>
          <p className="text-[#581C87]/70 text-base max-w-4xl mx-auto leading-relaxed font-medium">
            It's Vast! eSkoolia PRO Has More Additional Feature That Will Expect In A Complete Solution.
          </p>
        </div>

        <div className="w-full px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {additionalFeatures.map((feature, i) => (
              <div key={i} className="flex items-center gap-3 bg-gray-50/50 p-4 rounded-xl shadow-sm border border-gray-50 hover:border-[#581C87]/20 hover:shadow-md transition-all group">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#581C87]/5 text-[#581C87] group-hover:bg-[#581C87] group-hover:text-white transition-all">
                  <feature.icon className="h-5 w-5" />
                </div>
                <h4 className="font-bold text-[#581C87] text-lg leading-tight">{feature.title}</h4>
              </div>
            ))}
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
