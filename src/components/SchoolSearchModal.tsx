import { useState } from "react";
import { Search } from "lucide-react";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export function SchoolSearchModal() {
  const [schoolName, setSchoolName] = useState("");
  const [error, setError] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const trimmed = schoolName.trim();
    if (!trimmed) {
      setError("Please enter your school name");
      return;
    }

    // Process school name: lowercase, no spaces, trim extra characters
    const domain = trimmed.toLowerCase().replace(/\s+/g, "").trim();
    const url = `https://${domain}.eskoolia.com/login`;
    
    // Redirect the user
    window.location.href = url;
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button 
          variant="outline" 
          size="lg" 
          className="rounded-full w-full sm:w-auto h-14 px-8 text-lg font-bold border-2 border-[#581C87] text-[#581C87] hover:bg-[#581C87] hover:text-white transition-all transform hover:-translate-y-1 shadow-[0_10px_20px_rgba(88,28,135,0.1)] group"
        >
          <Search className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
          Search Your School
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] rounded-[32px] border-purple-100 shadow-2xl overflow-hidden p-0 gap-0">
        <div className="bg-gradient-to-br from-[#581C87] to-purple-800 p-8 text-white relative">
          <div className="absolute -top-6 -right-6 opacity-10 rotate-12">
            <Search size={160} />
          </div>
          <DialogHeader className="relative z-10">
            <DialogTitle className="text-3xl font-extrabold tracking-tight mb-2 text-white">Find Your School Login</DialogTitle>
            <p className="text-purple-100/80 font-medium text-lg">Enter your school name to access your personalized ERP portal.</p>
          </DialogHeader>
        </div>
        
        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          <div className="space-y-3">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-6 w-6 text-[#581C87]/40 group-focus-within:text-[#581C87] transition-colors" />
              <Input
                placeholder="Enter your school name"
                className={cn(
                  "h-16 pl-14 rounded-2xl border-2 border-purple-100 focus-visible:ring-[#581C87] focus-visible:border-[#581C87] text-xl font-bold transition-all shadow-sm placeholder:text-gray-300",
                  error && "border-red-400 focus-visible:ring-red-400 focus-visible:border-red-400"
                )}
                value={schoolName}
                onChange={(e) => {
                  setSchoolName(e.target.value);
                  if (error) setError("");
                }}
                autoFocus
              />
            </div>
            {error && (
              <motion.p 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-500 text-sm font-semibold ml-2"
              >
                {error}
              </motion.p>
            )}
            <div className="p-4 rounded-xl bg-purple-50 border border-purple-100">
               <p className="text-sm text-[#581C87]/70 font-medium leading-relaxed">
                <span className="font-bold">Pro Tip:</span> If your school is "Green Valley", type "green valley" and we'll take you to <span className="font-bold underline text-[#581C87]">greenvalley.eskoolia.com</span>
              </p>
            </div>
          </div>
          
          <Button 
            type="submit" 
            className="w-full h-16 rounded-2xl bg-gradient-to-r from-purple-600 to-orange-600 hover:from-purple-700 hover:to-orange-700 text-white font-black text-xl shadow-[0_10px_20px_rgba(249,115,22,0.3)] transition-all transform active:scale-[0.98] border-none"
          >
            Go to Login
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
