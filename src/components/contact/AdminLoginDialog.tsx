
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Shield, AlertTriangle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface AdminLoginDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  password: string;
  onPasswordChange: (password: string) => void;
  onLogin: () => void;
}

const AdminLoginDialog: React.FC<AdminLoginDialogProps> = ({
  open,
  onOpenChange,
  password,
  onPasswordChange,
  onLogin,
}) => {
  const [attempts, setAttempts] = useState(0);
  const [lockout, setLockout] = useState(false);
  const MAX_ATTEMPTS = 5;
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !lockout) {
      handleLogin();
    }
  };
  
  const handleLogin = () => {
    if (lockout) return;
    
    if (attempts >= MAX_ATTEMPTS - 1) {
      setLockout(true);
      setTimeout(() => {
        setLockout(false);
        setAttempts(0);
      }, 30000); // 30 second lockout
    }
    
    setAttempts(prev => prev + 1);
    onLogin();
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] border-hijau-blue/10">
        <DialogHeader>
          <DialogTitle className="text-hijau-blue text-xl flex items-center">
            <Shield className="mr-2 h-5 w-5" />
            Admin Login
          </DialogTitle>
          <DialogDescription>
            Enter your password to access the admin area.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          {lockout && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-md flex items-center text-red-600">
              <AlertTriangle className="h-5 w-5 mr-2" />
              <p className="text-sm">Too many failed attempts. Please try again in 30 seconds.</p>
            </div>
          )}
          
          <div className="space-y-2">
            <label 
              htmlFor="password" 
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Password
            </label>
            <Input
              id="password"
              type="password"
              placeholder="Enter admin password"
              value={password}
              onChange={(e) => onPasswordChange(e.target.value)}
              onKeyDown={handleKeyDown}
              className="border-gray-300 focus:border-hijau-blue focus:ring-hijau-blue/20"
              disabled={lockout}
              autoComplete="current-password"
            />
          </div>
          <Button 
            type="button" 
            onClick={handleLogin}
            className="w-full bg-hijau-blue hover:bg-hijau-blue/90 transition-all"
            disabled={lockout}
          >
            Login
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AdminLoginDialog;
