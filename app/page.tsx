import { Navbar } from "./components/Navbar";
import { Hero } from "./sections/Hero";
import { Project } from "./sections/Project";
import { About } from "./sections/About";
import { Contact } from "./sections/Contact";

export default function Home() {
  return (
    <div className="min-h-screen font-satsohi">
      <div className="bg-hero-custom">
        <Navbar />
        <Hero />
      </div>
      <Project />
      <About />
      <Contact />
    </div>
  );
}
