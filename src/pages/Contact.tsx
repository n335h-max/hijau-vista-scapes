import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import ContactInfoSection from "@/components/contact/ContactInfoSection";
import ContactForm from "@/components/contact/ContactForm";
import AdminLoginDialog from "@/components/contact/AdminLoginDialog";
import BookingProcessPreview from "@/components/contact/BookingProcessPreview";

const Contact = () => {
  const [loginDialogOpen, setLoginDialogOpen] = useState(false);
  const [adminPassword, setAdminPassword] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [packageParam, setPackageParam] = useState<string | null>(null);
  const [messageParam, setMessageParam] = useState<string | null>(null);

  // Extract parameters from URL if available
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const packageName = params.get('package');
    const message = params.get('message');
    
    // Set state with URL parameters
    setPackageParam(packageName);
    setMessageParam(message);
    
    console.log("URL Package parameter:", packageName);
    console.log("URL Message parameter:", message);
  }, [location.search]);

  // Admin login handler
  const handleAdminLogin = () => {
    // Simple password check - in a real app, use proper authentication
    if (adminPassword === "admin123") {
      // Set admin status in localStorage (in a real app, use secure tokens/cookies)
      localStorage.setItem("isHijauAdmin", "true");
      setLoginDialogOpen(false);
      
      toast({
        title: "Admin Login Successful",
        description: "You now have access to booking management.",
      });
      
      // Redirect to admin bookings page
      navigate("/admin/bookings");
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
              "url('https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1429&q=80')",
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
          <BookingProcessPreview />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <ContactInfoSection onAdminLogin={() => setLoginDialogOpen(true)} />

            {/* Booking Form */}
            <ContactForm 
              initialService={packageParam || undefined} 
              initialMessage={messageParam || undefined} 
            />
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] bg-white relative">
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-gray-50 to-transparent z-10"></div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3985.380721971802!2d101.90666587405372!3d2.7025598972748957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cde79d9afd2ab1%3A0x66aa939ab7b95641!2sHijau%20Group%20Landscape!5e0!3m2!1sen!2smy!4v1746852130703!5m2!1sen!2smy"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Hijau Group Landscape Location"
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
