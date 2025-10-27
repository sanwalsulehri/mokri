'use client';

import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { PaymentForm } from "../components/ui/payment-form";

// Define presets directly in this file to test
const FooterPresets = {
  minimal: {
    showNewsletter: false,
    showSocial: false,
    showBreadcrumbs: false,
    columns: 1
  },
  full: {
    showNewsletter: true,
    showSocial: true,
    showBreadcrumbs: true,
    columns: 4
  },
  company: {
    showNewsletter: true,
    showSocial: true,
    showBreadcrumbs: false,
    columns: 3
  }
};

export default function Home() {
  return (
   <div className="min-h-screen bg-gradient-to-br from-background via-background to-background/50">
     <Navbar />
     <div className="py-16">
       <PaymentForm 
         onSubmit={(data) => console.log('Payment form submitted:', data)}
       />
     </div>
     
     {/* Minimal Footer */}
     <Footer {...FooterPresets.minimal} />
   </div>
  );
}
