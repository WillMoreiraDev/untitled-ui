import Image from "next/image";
import { Header } from "./components/Header";
import { SectionHero } from "./components/SectionHero";
import { SectionCompanies } from "./components/SectionCompanies";
import { SectionFeatures } from "./components/SectionFeatures";
import { SectionTestimonials } from "./components/SectionTestimonials";
import { SectionAnalitycs } from "./components/SectionAnalitycs";
import { SectionQuestions } from "./components/SectionQuestions";
import { SectionLauch } from "./components/SectionLauch";
import { SectionTrial } from "./components/SectionTrial";

export default function Home() {
  return (
    <>

   <SectionHero/>
  
      <SectionCompanies/>
      
      <SectionFeatures/>

      <SectionTestimonials/>

    
      <SectionAnalitycs/>

      
      <SectionQuestions/>

         
      <SectionLauch/>

  
      <SectionTrial/>
    </>
  );
}