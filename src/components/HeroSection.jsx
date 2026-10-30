import { Mail, Linkedin, Github } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="text-center mb-8 animate-fade-in">
      <h1 className="text-5xl font-bold text-cyan-400 drop-shadow-lg">Yash Mehta</h1>
      <p className="text-lg mt-2 text-white">AI Researcher | Backend & ML Developer | Final-Year CSE Student</p>
      <div className="flex justify-center gap-6 mt-4 text-cyan-300">
        <a href="mailto:yash34m6@gmail.com" className="flex items-center gap-1 hover:underline"><Mail size={18} /> Email</a>
        <a href="https://linkedin.com/in/yash-mehta-402239163" target="_blank" className="flex items-center gap-1 hover:underline"><Linkedin size={18} /> LinkedIn</a>
        <a href="https://github.com/YashM-235" target="_blank" className="flex items-center gap-1 hover:underline"><Github size={18} /> GitHub</a>
      </div>
    </section>
  );
}
