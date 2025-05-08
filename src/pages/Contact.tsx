
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import ContactInfoSection from "@/components/contact/ContactInfoSection";
import ContactForm from "@/components/contact/ContactForm";
import AdminLoginDialog from "@/components/contact/AdminLoginDialog";

const Contact = () => {
  const [loginDialogOpen, setLoginDialogOpen] = useState(false);
  const [adminPassword, setAdminPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const location = useLocation();
  const { toast } = useToast();
  const [serviceParam, setServiceParam] = useState<string | null>(null);

  // Extract service from URL if available
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const service = params.get('service');
    setServiceParam(service);
  }, [location.search]);

  // Admin login handler
  const handleAdminLogin = () => {
    // Simple password check - in a real app, use proper authentication
    if (adminPassword === "admin123") {
      setIsAdmin(true);
      setLoginDialogOpen(false);
      toast({
        title: "Admin Login Successful",
        description: "You now have access to booking management.",
      });
    } else {
      toast({
        title: "Login Failed",
        description: "Invalid password. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1494256997604-768d1f608cac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1429&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
        </div>

        <div className="container-custom relative h-full flex items-center">
          <div className="max-w-xl text-white">
            <h1 className="heading-large mb-4 relative">
              Contact Us
              <span className="absolute -bottom-4 left-0 w-24 h-1 bg-hijau-yellow"></span>
            </h1>
            <p className="text-lg md:text-xl mt-6 opacity-90">
              Get in touch with our team to discuss your landscaping needs
              or schedule a consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <ContactInfoSection onAdminLogin={() => setLoginDialogOpen(true)} />

            {/* Booking Form */}
            <ContactForm initialService={serviceParam || undefined} />
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] bg-white relative">
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-gray-50 to-transparent z-10"></div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127482.68268982928!2d101.6169382582031!3d3.139004500000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc362abd26e2b1%3A0x400eafc3e154890!2sKuala%20Lumpur%2C%20Federal%20Territory%20of%20Kuala%20Lumpur%2C%20Malaysia!5e0!3m2!1sen!2sus!4v1673596030467!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Hijau Group Location"
        ></iframe>
      </section>

      {/* Admin Login Dialog */}
      <AdminLoginDialog
        open={loginDialogOpen}
        onOpenChange={setLoginDialogOpen}
        password={adminPassword}
        onPasswordChange={setAdminPassword}
        onLogin={handleAdminLogin}
      />
    </>
  );
};

export default Contact;
