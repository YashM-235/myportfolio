import HeroSection from "./HeroSection";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Projects from "./Projects";
import Research from "./Research";
import Certifications from "./Certifications";
import ResumeDownload from "./ResumeDownload";
import Footer from "./Footer";

export default function LightView() {
  return (
    <div className="p-6 max-w-5xl mx-auto font-sans space-y-6">
      <HeroSection />
      <AboutMe />
      <Skills />
      <Projects />
      <Research />
      <Certifications />
      <ResumeDownload />
      <Footer />
    </div>
  );
}
