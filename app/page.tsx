import { Navbar } from "../components/navbar";

export default function Home() {
  return (
   <div className="min-h-screen">
     <Navbar />
     <div className="flex items-center justify-center min-h-[calc(100vh-4rem)]">
       <div className="text-center">
         <h1 className="text-4xl font-bold mb-8">The Foundation</h1>
       </div>
     </div>
   </div>
  );
}
