
import { useCallback, useEffect, useRef, useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Typed from "typed.js";

import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Projects from "./Projects";
import Research from "./Research";
import Certifications from "./Certifications";
import ResumeDownload from "./ResumeDownload";
import Footer from "./Footer";

const sections = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "research", label: "Research" },
  { id: "certifications", label: "Certs" },
  { id: "resume", label: "Resume" }
];

export default function FuturisticView() {
  const typedRef = useRef(null);
  const [activeSection, setActiveSection] = useState("about");

  // Initialize particles
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  // Typed.js animation
  useEffect(() => {
    if (!typedRef.current) return;

    const typed = new Typed(typedRef.current, {
      strings: [
        "👨‍💻 AI Researcher | ML Developer | Web Engineer",
        "🧠 Building LLM Pipelines and Real-Time Intelligence",
        "🚀 Deploying Smart Systems Since 2025"
      ],
      typeSpeed: 45,
      backSpeed: 30,
      backDelay: 1200,
      startDelay: 300,
      loop: true,
      smartBackspace: true,
      showCursor: true,
      cursorChar: "█"
    });

    return () => typed.destroy();
  }, []);

  // Active navigation tracking
  useEffect(() => {
    let animationFrame = null;

    const updateActiveSection = () => {
      if (animationFrame !== null) {
        cancelAnimationFrame(animationFrame);
      }

      animationFrame = requestAnimationFrame(() => {
        const activationLine = window.innerHeight * 0.3;
        let currentSection = sections[0].id;

        sections.forEach(({ id }) => {
          const element = document.getElementById(id);

          if (
            element &&
            element.getBoundingClientRect().top <= activationLine
          ) {
            currentSection = id;
          }
        });

        // Highlight resume when reaching page bottom
        const isAtBottom =
          window.innerHeight + window.scrollY >=
          document.documentElement.scrollHeight - 5;

        if (isAtBottom) {
          currentSection = "resume";
        }

        setActiveSection(currentSection);
        animationFrame = null;
      });
    };

    window.addEventListener("scroll", updateActiveSection, {
      passive: true
    });

    window.addEventListener("resize", updateActiveSection);

    updateActiveSection();

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);

      if (animationFrame !== null) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  return (
    <div className="relative isolate w-full min-h-screen bg-gradient-to-br from-black via-gray-950 to-black text-white font-sans overflow-x-hidden">

      {/* Background particles */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Particles
          id="tsparticles"
          init={particlesInit}
          className="absolute inset-0"
          options={{
            fullScreen: {
              enable: false
            },
            background: {
              color: {
                value: "transparent"
              }
            },
            fpsLimit: 60,
            detectRetina: true,
            particles: {
              number: {
                value: 65,
                density: {
                  enable: true,
                  width: 900,
                  height: 900
                }
              },
              color: {
                value: ["#00ffff", "#0088ff", "#a855f7"]
              },
              shape: {
                type: "circle"
              },
              opacity: {
                value: 0.45
              },
              size: {
                value: {
                  min: 1,
                  max: 3
                }
              },
              links: {
                enable: true,
                distance: 140,
                color: "#00ffff",
                opacity: 0.25,
                width: 1
              },
              move: {
                enable: true,
                speed: 0.8,
                direction: "none",
                random: false,
                straight: false,
                outModes: {
                  default: "out"
                }
              }
            },
            interactivity: {
              events: {
                onHover: {
                  enable: false
                },
                onClick: {
                  enable: false
                }
              }
            }
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex gap-3 max-w-[95vw] overflow-x-auto whitespace-nowrap bg-gray-950/80 border border-cyan-400/30 px-4 py-3 rounded-full backdrop-blur-xl shadow-lg shadow-cyan-500/10 text-sm md:text-base">

        {sections.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={() => setActiveSection(id)}
            className={`shrink-0 transition-all duration-300 ${
              activeSection === id
                ? "font-bold text-cyan-400"
                : "text-gray-300 hover:text-cyan-300"
            }`}
          >
            {label}
          </a>
        ))}

      </nav>

      {/* Main Content */}
      <main className="relative z-10 px-4 sm:px-6 md:px-8 pt-32 pb-10 max-w-6xl mx-auto space-y-10">

        {/* Hero Section */}
        <div className="text-center mb-12 px-2">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 tracking-wide">
            <span ref={typedRef}></span>
          </h1>

          <p className="mt-5 text-cyan-200/70 tracking-widest text-xs sm:text-sm uppercase">
            Intelligence • Innovation • Engineering
          </p>

          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mt-6 rounded-full shadow-lg shadow-cyan-500/30" />
        </div>

        {/* About */}
        <section
          id="about"
          className="scroll-mt-28 rounded-2xl p-4 sm:p-6 bg-white/[0.04] border border-fuchsia-400/30 shadow-2xl backdrop-blur-xl transition duration-500 hover:border-fuchsia-400/70"
        >
          <AboutMe />
        </section>

        {/* Skills */}
        <section
          id="skills"
          className="scroll-mt-28 rounded-2xl p-4 sm:p-6 bg-white/[0.04] border border-green-400/30 shadow-2xl backdrop-blur-xl transition duration-500 hover:border-green-400/70"
        >
          <Skills />
        </section>

        {/* Projects */}
        <section
          id="projects"
          className="scroll-mt-28 rounded-2xl p-4 sm:p-6 bg-white/[0.04] border border-yellow-300/30 shadow-2xl backdrop-blur-xl transition duration-500 hover:border-yellow-300/70"
        >
          <Projects />
        </section>

        {/* Research */}
        <section
          id="research"
          className="scroll-mt-28 rounded-2xl p-4 sm:p-6 bg-white/[0.04] border border-pink-400/30 shadow-2xl backdrop-blur-xl transition duration-500 hover:border-pink-400/70"
        >
          <Research />
        </section>

        {/* Certifications */}
        <section
          id="certifications"
          className="scroll-mt-28 rounded-2xl p-4 sm:p-6 bg-white/[0.04] border border-amber-400/30 shadow-2xl backdrop-blur-xl transition duration-500 hover:border-amber-400/70"
        >
          <Certifications />
        </section>

        {/* Resume */}
        <section
          id="resume"
          className="scroll-mt-28 transition duration-500"
        >
          <ResumeDownload />
        </section>

        {/* Footer */}
        <Footer />

      </main>
    </div>
  );
}
