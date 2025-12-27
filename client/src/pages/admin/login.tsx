import { useState } from "react";
import { useLocation } from "wouter";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Crown, Shield, User, ShieldCheck } from "lucide-react";

export default function AdminLogin() {
  const [, setLocation] = useLocation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("admin");
  const { toast } = useToast();

  const loginMutation = useMutation({
    mutationFn: async (credentials: { username: string; password: string; role: string }) => {
      return await apiRequest("/api/admin/login", {
        method: "POST",
        body: JSON.stringify(credentials),
      });
    },
    onSuccess: (data) => {
      localStorage.setItem("adminToken", data.token);
      localStorage.setItem("adminUser", JSON.stringify(data.admin));
      // Clear TanStack Query cache on login to ensure fresh data for the new user/role
      queryClient.clear();
      toast({
        title: "Success",
        description: "Logged in successfully",
      });
      setLocation("/admin/dashboard");
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Login failed",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username || !password) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }
    loginMutation.mutate({ username, password, role });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md mx-auto border border-blue-200 bg-white shadow-xl">
        <CardHeader className="text-center px-4 sm:px-6">
          <div className="flex justify-center mb-4">
            <div className="relative">
              <Crown className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600" />
              <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 absolute -top-1 -right-1" />
            </div>
          </div>
          <CardTitle className="text-xl sm:text-2xl font-bold text-blue-600 mb-2 break-words">
            Airavata Technologies
          </CardTitle>
          <CardDescription className="text-sm sm:text-base text-gray-600">
            Restaurant Management System
          </CardDescription>
        </CardHeader>
        <CardContent className="px-4 sm:px-6">
          <Tabs defaultValue="admin" onValueChange={setRole} className="w-full mb-6">
            <TabsList className="grid w-full grid-cols-2 bg-blue-600 p-1">
              <TabsTrigger 
                value="admin" 
                className="flex items-center gap-2 text-white data-[state=active]:bg-white data-[state=active]:text-blue-600 border border-transparent data-[state=active]:border-white"
              >
                <User className="w-4 h-4" />
                Admin User
              </TabsTrigger>
              <TabsTrigger 
                value="master" 
                className="flex items-center gap-2 text-white data-[state=active]:bg-white data-[state=active]:text-blue-600 border border-transparent data-[state=active]:border-white"
              >
                <ShieldCheck className="w-4 h-4" />
                Master Admin
              </TabsTrigger>
            </TabsList>
          </Tabs>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username" className="text-sm font-medium text-gray-700">
                Username
              </Label>
              <Input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500 text-sm sm:text-base"
                placeholder={`Enter your ${role} username`}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500 text-sm sm:text-base"
                placeholder="Enter your password"
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 sm:py-3 text-sm sm:text-base mt-6"
              disabled={loginMutation.isPending}
            >
              {loginMutation.isPending ? "Signing in..." : `Sign In as ${role === 'admin' ? 'Admin' : 'Master Admin'}`}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}