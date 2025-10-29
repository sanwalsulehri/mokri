'use client';

import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { PaymentForm } from "../components/ui/payment-form";
import Hero from "../components/home/hero";
import { Features } from "../components/home/features";
import Container from "../components/ui/container";

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
   <div className="min-h-screen flex flex-col">
     <Navbar />
   
     <Container size="2xl" padding="lg" className="flex-1">
       <Hero />
     </Container>

     <Features />

     <Footer {...FooterPresets.minimal} />
   </div>
  );
}
