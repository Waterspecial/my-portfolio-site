import Image from "next/image";
import { Navbar } from "./components/Navbar";
import { Hero } from "./sections/Hero";
import { Project } from "./sections/Project";
import { About } from "./sections/About";
import { Contact } from "./sections/Contact";

export default function Home() {
  return (
    <div className="min-h-screen">
        <Navbar />
        <Hero />
      <Project />
      <About />
      <Contact />
    </div>
  );
}
