import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import Ventures from "@/components/sections/Ventures";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Ventures />
      <Projects />
      <Contact />
    </>
  );
}
