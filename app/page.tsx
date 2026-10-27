import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Hobbies } from "@/components/Hobbies";
import { Hero } from "@/components/Hero";
import { Principles } from "@/components/Principles";
import { Projects } from "@/components/Projects";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <Principles />
        <About />
        <Hobbies />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
