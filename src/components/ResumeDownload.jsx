const resumes = [
  {
    title: "AI/ML Engineer",
    description: "Machine Learning, Deep Learning, NLP and Computer Vision",
    file: "/resumes/YashMehta_AI_ML_Engineer_Resume.pdf",
    icon: "🧠",
    color: "border-cyan-400/40"
  },
  {
    title: "ML Research Engineer",
    description: "Research Publications, Model Development and Experiments",
    file: "/resumes/Yash Mehta_ML_Research_Engineer_Resume.pdf",
    icon: "🔬",
    color: "border-purple-400/40"
  },
  {
    title: "Backend Developer",
    description: "Python, Flask, REST APIs and Database Engineering",
    file: "/resumes/YashMehta_Backend_Developer_Resume.pdf",
    icon: "⚙️",
    color: "border-green-400/40"
  },
  {
    title: "Data Engineer",
    description: "Python, SQL, Data Processing and Analytics",
    file: "/resumes/YashMehta_Data_Engineer_Resume.pdf",
    icon: "📊",
    color: "border-yellow-400/40"
  },
  {
    title: "Software Development Engineer",
    description: "Java, C++, Python and Software Engineering",
    file: "/resumes/YashMehta_SDE_Resume.pdf",
    icon: "💻",
    color: "border-blue-400/40"
  },
  {
    title: "General Software Engineer",
    description: "Full-Stack, Backend, AI and Application Development",
    file: "/resumes/YashMehta_Software_Engineer_Resume.pdf",
    icon: "🚀",
    color: "border-pink-400/40"
  },
  {
    title: "General / FAANG Resume",
    description: "General-purpose software engineering resume",
    file: "/YashMehta_FAANGResume.pdf",
    icon: "🏆",
    color: "border-orange-400/40"
  }
];

export default function ResumeDownload() {
  return (
    <section className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold">Resume Download Center</h2>
        <p className="mt-2 text-gray-400">
          Choose a resume tailored to your target role.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {resumes.map((resume) => (
          <div
            key={resume.file}
            className={`rounded-xl border ${resume.color} bg-black/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white/5`}
          >
            <div className="mb-4 text-3xl">{resume.icon}</div>

            <h3 className="text-lg font-semibold text-white">
              {resume.title}
            </h3>

            <p className="mt-2 min-h-12 text-sm text-gray-400">
              {resume.description}
            </p>

            <a
              href={resume.file}
              download
              className="mt-5 inline-flex rounded-lg bg-cyan-500 px-4 py-2 text-sm font-semibold text-black transition hover:bg-cyan-300"
            >
              Download Resume
            </a>
          </div>
        ))}
      </div>

      <p className="text-center text-sm text-gray-500">
        Select the version most relevant to the opportunity.
      </p>
    </section>
  );
}
