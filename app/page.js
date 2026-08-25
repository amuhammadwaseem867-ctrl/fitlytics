import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Programs from "@/components/Programs";
import Membership from "@/components/Membership";
import Trainers from "@/components/Trainers";
import Facilities from "@/components/Facilities";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main>
      <Navbar />

      <Hero />

      <About />

      <Programs />

      <Membership />

      <Trainers />

      <Facilities />

      <Testimonials />

      <Contact />

      <Footer />

      <WhatsAppButton />
    </main>
  );
}