import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GraduationCap } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Item 2: Frontend sends authenticated requests using credentials: "include"
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
        // Item 7: Cookies use credentials: "include" for CSRF/Secure token handling
      });

      if (response.ok) {
        toast({ title: "Login Successful", description: "Redirecting to dashboard..." });
        navigate("/dashboard");
      } else {
        const error = await response.text();
        toast({ variant: "destructive", title: "Authentication Failed", description: error });
      }
    } catch (err) {
      toast({ variant: "destructive", title: "Connection Error", description: "Could not reach security server." });
    } finally {
      setIsLoading(false);
    }
  };

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
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="you@school.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <Button variant="hero" className="w-full" type="submit" disabled={isLoading}>
              {isLoading ? "Authenticating..." : "Sign In"}
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
