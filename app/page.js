
import DocData from "@/components/DocData";
import ConsultationForm from "@/components/consultation";
import Doctors from "@/components/nearby";
import HomePage from "@/components/homepage";
import Navbar from "@/components/navbar";
import Testimonials from "@/components/testimonials";


export default function Home() {
 
  return (
    <div className="bg-[#111111] h-full w-full">
  <Navbar />
  <HomePage/>
  {/* <Doctors/> */}
  <DocData/>
  <Testimonials/>
  <ConsultationForm/>
 </div>
  )
}
