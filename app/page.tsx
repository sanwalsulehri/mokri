import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";

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
   <div className="min-h-screen">
     <Navbar />
     <div className="flex items-center justify-center min-h-[calc(100vh-8rem)]">
       <div className="text-center">
         <h1 className="text-4xl font-bold mb-8">The Foundation</h1>
         <p className="text-lg text-gray-600 mb-12">Different Footer Presets</p>
       </div>
     </div>
     
     {/* Minimal Footer */}
     <div className="mb-8">
       <h2 className="text-2xl font-semibold text-center mb-4">Minimal Footer</h2>
       <Footer {...FooterPresets.minimal} />
     </div>

     {/* Full Footer */}
     <div className="mb-8">
       <h2 className="text-2xl font-semibold text-center mb-4">Full Footer</h2>
       <Footer {...FooterPresets.full} />
     </div>

     {/* Company Footer */}
     <div className="mb-8">
       <h2 className="text-2xl font-semibold text-center mb-4">Company Footer</h2>
       <Footer {...FooterPresets.company} />
     </div>

   </div>
  );
}
