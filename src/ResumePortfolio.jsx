import { useState } from "react";
import ThemeToggle from "./components/ThemeToggle";
//import DarkFuturisticView from "./components/DarkFuturisticView";
//{theme === "light" ? <LightView /> : <DarkFuturisticView />}
import FuturisticView from "./components/FuturisticView";
import LightView from "./components/LightView";

export default function ResumePortfolio() {
  const [theme, setTheme] = useState("light");

  return (
    <main className="min-h-screen bg-black text-white">
      <ThemeToggle onToggle={setTheme} />
      {theme === "light" ? <LightView /> : <FuturisticView />}
    </main>
  );
}
