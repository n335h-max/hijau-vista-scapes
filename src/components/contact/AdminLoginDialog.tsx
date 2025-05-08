
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FormLabel } from "@/components/ui/form";
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
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Admin Login</DialogTitle>
          <DialogDescription>
            Enter your password to access the admin area.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input
              id="password"
              type="password"
              placeholder="Enter admin password"
              value={password}
              onChange={(e) => onPasswordChange(e.target.value)}
            />
          </div>
          <Button 
            type="button" 
            onClick={onLogin}
            className="w-full bg-hijau-blue hover:bg-hijau-blue/90"
          >
            Login
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AdminLoginDialog;
