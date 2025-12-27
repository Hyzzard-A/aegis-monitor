import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import HowWorks from "@/components/landing/HowWorks";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Hero />
      <Features />
      <HowWorks />
      <Footer />
    </main>
  );
}
