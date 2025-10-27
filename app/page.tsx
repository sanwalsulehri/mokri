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
   <div className="">
     <Navbar />
     <div className="flex items-center justify-center ">
       <div className="text-center">
         <h1 className="text-4xl font-bold mb-8">The Foundation</h1>
         <p className="text-lg text-gray-600 mb-12">Different Footer Presets</p>
       </div>
     </div>
     
     {/* Minimal Footer */}
       <Footer {...FooterPresets.minimal} />

     

   </div>
  );
}
