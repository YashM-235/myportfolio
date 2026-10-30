import { useCallback, useEffect, useRef } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Typed from "typed.js";

export default function DarkFuturisticView() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "👨‍💻 AI Researcher | ML Developer | Web Engineer",
        "🧠 Building LLM Pipelines and Real-Time Intelligence",
        "🚀 Deploying Smart Systems Since 2025"
      ],
      typeSpeed: 45,
      backSpeed: 30,
      backDelay: 1000,
      startDelay: 300,
      loop: true,
      smartBackspace: true,
      showCursor: true,
      cursorChar: "█"
    });

    return () => typed.destroy();
  }, []);

  return (
    <div className="relative w-full h-screen bg-black text-white overflow-hidden">
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute inset-0 z-0"
        options={{
          background: { color: { value: "#000000" } },
          fpsLimit: 60,
          particles: {
            number: { value: 80 },
            size: { value: { min: 1, max: 3 } },
            color: { value: "#00ffff" },
            links: {
              enable: true,
              color: "#00ffff",
              distance: 120,
              opacity: 0.4,
              width: 1
            },
            move: { enable: true, speed: 1, outModes: { default: "bounce" } },
            shape: { type: "circle" },
            opacity: { value: 0.5 }
          }
        }}
      />

      <div className="z-10 relative flex flex-col items-center justify-center h-full text-center px-4 animate-fade-in">
        <h1 className="text-5xl md:text-6xl font-extrabold text-cyan-400 drop-shadow-lg tracking-wider mb-6">
          Yash Mehta
        </h1>

        <div
          ref={typedRef}
          className="text-lg md:text-xl text-gray-300 font-mono tracking-tight min-h-[2.5rem]"
        />

        <p className="mt-8 italic text-sm md:text-base text-cyan-300 animate-pulse">
          🤖 AI Agent Widget Integration Coming Soon...
        </p>
      </div>
    </div>
  );
}
