import { useState } from "react";

export default function ThemeToggle({ onToggle }) {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    onToggle(newMode);
  };

  return (
    <div className="text-center mt-4">
      <button
        onClick={toggleMode}
        className="px-4 py-2 rounded-md bg-gray-700 text-white hover:bg-gray-600 transition"
      >
        Switch to {mode === "light" ? "🌌 Futuristic Mode" : "☀️ Professional Mode"}
      </button>
    </div>
  );
}
