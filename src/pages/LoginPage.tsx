import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GraduationCap } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex min-h-screen">
      <div className="hidden w-1/2 bg-hero-gradient lg:flex lg:items-center lg:justify-center">
        <div className="text-center">
          <GraduationCap className="mx-auto mb-4 h-16 w-16 text-primary-foreground" />
          <h2 className="font-display text-3xl font-bold text-primary-foreground">Eskoolia Pro</h2>
          <p className="mt-2 text-primary-foreground/80">The complete school management platform</p>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center p-8">
        <div className="w-full max-w-sm">
          <div className="mb-8">
            <h1 className="font-display text-2xl font-bold text-foreground">Welcome back</h1>
            <p className="text-sm text-muted-foreground">Sign in to your account</p>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="you@school.com" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <Button variant="hero" className="w-full" type="submit" asChild>
              <Link to="/dashboard">Sign In</Link>
            </Button>
            <p className="text-center text-sm text-muted-foreground">
              Don't have an account? <Link to="/register" className="text-primary hover:underline">Sign up</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
