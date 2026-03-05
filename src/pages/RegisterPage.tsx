import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GraduationCap } from "lucide-react";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  const [passwordValidation, setPasswordValidation] = useState({
    length: false,
    uppercase: false,
    number: false,
    special: false,
  });

  const validatePassword = (value: string) => {
    setPassword(value);
    setPasswordValidation({
      length: value.length >= 10,
      uppercase: /[A-Z]/.test(value),
      number: /[0-9]/.test(value),
      special: /[!@#$%^&*(),.?":{}|<>]/.test(value),
    });
  };

  const isPasswordStrong = Object.values(passwordValidation).every(Boolean);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isPasswordStrong) return;
    setIsLoading(true);

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      if (response.ok) {
        toast({ title: "Account Created", description: "You can now log in." });
        navigate("/login");
      } else {
        const error = await response.text();
        toast({ variant: "destructive", title: "Registration Failed", description: error });
      }
    } catch (err) {
      toast({ variant: "destructive", title: "Error", description: "Could not connect to security server." });
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
          <p className="mt-2 text-primary-foreground/80">Start your 14-day free trial</p>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center p-8">
        <div className="w-full max-w-sm">
          <div className="mb-8">
            <h1 className="font-display text-2xl font-bold text-foreground">Create an account</h1>
            <p className="text-sm text-muted-foreground">Get started with Eskoolia Pro</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="John Doe" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="you@school.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => validatePassword(e.target.value)}
                className={password && !isPasswordStrong ? "border-amber-400" : ""}
                required
              />
              {password && (
                <div className="mt-2 space-y-1">
                  <p className={`text-[10px] flex items-center gap-1 ${passwordValidation.length ? "text-purple-600" : "text-gray-400"}`}>
                    {passwordValidation.length ? "✓" : "○"} At least 10 characters
                  </p>
                  <p className={`text-[10px] flex items-center gap-1 ${passwordValidation.uppercase ? "text-purple-600" : "text-gray-400"}`}>
                    {passwordValidation.uppercase ? "✓" : "○"} At least one uppercase letter
                  </p>
                  <p className={`text-[10px] flex items-center gap-1 ${passwordValidation.number ? "text-purple-600" : "text-gray-400"}`}>
                    {passwordValidation.number ? "✓" : "○"} At least one number
                  </p>
                  <p className={`text-[10px] flex items-center gap-1 ${passwordValidation.special ? "text-purple-600" : "text-gray-400"}`}>
                    {passwordValidation.special ? "✓" : "○"} At least one special character
                  </p>
                </div>
              )}
            </div>
            <Button variant="hero" className="w-full" type="submit" disabled={(!isPasswordStrong && password.length > 0) || isLoading}>
              {isLoading ? "Creating Account..." : "Create Account"}
            </Button>
            <p className="text-center text-sm text-muted-foreground">
              Already have an account? <Link to="/login" className="text-primary hover:underline">Sign in</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
