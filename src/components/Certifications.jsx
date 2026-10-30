
const certifications = [
  {
    title: "Fundamentals of Deep Learning",
    issuer: "NVIDIA",
    category: "Deep Learning",
    url: "https://learn.nvidia.com/certificates?id=y1TgN2K4SBWLBG9szfuKog",
    color: "border-green-400/40",
    icon: "🏅"
  },
  {
    title: "IBM Machine Learning Professional Certificate",
    issuer: "IBM • Coursera",
    category: "Machine Learning",
    url: "https://coursera.org/share/7ae117774d78ea70b664c8ed92892d4a",
    color: "border-blue-400/40",
    icon: "🏅"
  },
  {
    title: "Introduction to Generative AI",
    issuer: "Google Cloud",
    category: "Generative AI",
    url: "https://coursera.org/share/aba89c1a80b41760b05c0d4082d884d9",
    color: "border-cyan-400/40",
    icon: "🏅"
  },
  {
    title: "Google Data Analytics Professional Certificate",
    issuer: "Google",
    category: "Data Analytics",
    url: "https://coursera.org/share/78ca15b1194bc73415788be6e3838a0b",
    color: "border-yellow-400/40",
    icon: "🏅"
  },
  {
    title: "Generative AI Fundamentals",
    issuer: "IBM",
    category: "Generative AI",
    url: "https://coursera.org/share/de7638e79f581fcd6d5eee3e177bcf64",
    color: "border-purple-400/40",
    icon: "🏅"
  },
  {
    title: "AI Foundations for Business",
    issuer: "IBM",
    category: "Artificial Intelligence",
    url: "https://coursera.org/share/399ff90f4d2f623f3a0220764bf0985d",
    color: "border-pink-400/40",
    icon: "🏅"
  },
  {
    title: "Quantum Computing & Quantum Key Distribution (QKD)",
    issuer: "IIT Delhi • 3-Day Workshop",
    category: "Quantum Computing",
    url: "https://drive.google.com/file/d/180pnw_KIh2j1d-2f0UPiZ08sbPvuFtr6/view?usp=drive_link",
    color: "border-orange-400/40",
    icon: "🏅"
  }
];

export default function Certifications() {
  return (
    <div className="space-y-8">

      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
          Certifications & Online Learning
        </h2>

        <p className="mt-3 text-gray-400">
          Continuous learning across AI, Machine Learning,
          Data Analytics and Quantum Computing.
        </p>

        <div className="w-24 h-1 bg-cyan-400 mx-auto mt-4 rounded-full shadow-lg shadow-cyan-400/50" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

        {certifications.map((cert, index) => (
          <div
            key={index}
            className={`group relative p-5 rounded-2xl bg-gray-950/70 border ${cert.color} backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/10`}
          >

            <div className="flex items-center justify-between mb-4">
              <span className="text-3xl">{cert.icon}</span>

              <span className="text-xs text-cyan-300 border border-cyan-400/30 px-3 py-1 rounded-full">
                {cert.category}
              </span>
            </div>

            <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors">
              {cert.title}
            </h3>

            <p className="text-sm text-gray-400 mt-2">
              Issued by {cert.issuer}
            </p>

            <a
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 text-cyan-400 hover:text-purple-400 font-semibold text-sm transition-colors"
            >
              View Certificate
              <span>↗</span>
            </a>

            <div className="absolute bottom-0 left-5 right-5 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

          </div>
        ))}

      </div>

      <div className="text-center text-sm text-gray-500">
        {certifications.length} Professional Certifications & Workshops
      </div>

    </div>
  );
}
