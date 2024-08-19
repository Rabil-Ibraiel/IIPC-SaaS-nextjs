import Cta from "@/sections/Cta";
import Faq from "@/sections/Faq";
import Features from "@/sections/Features";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import Product from "@/sections/Product";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <Features />
      <Product />
      <Faq />
      <Cta />
      <Footer />
    </main>
  );
}
