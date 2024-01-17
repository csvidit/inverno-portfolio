import Hero from "@/components/sections/Hero";
import ListLinks from "@/components/ListLinks";
import MainContainer from "@/components/MainContainer";
import MainContent from "@/components/MainContent";
import Projects from "@/components/sections/Projects";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";

export default function Home() {
  return (
    <MainContainer>
      <MainContent>
        <Hero />
        <About />
      </MainContent>
      <Projects />
      <MainContent>
        <Experience />
        <Skills/>
      </MainContent>
    </MainContainer>
  );
}
