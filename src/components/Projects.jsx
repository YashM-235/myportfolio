export default function Projects() {
  const projects = [
    {
      title: "Amazon Stock Oracle",
      subtitle: "Time Series Forecasting",
      details: "Hybrid LSTM-ARIMA-Transformer model with RMSE 0.03285.",
    },
    {
      title: "Fake News Detection",
      subtitle: "IIT Roorkee Research",
      details: "TF-IDF + Random Forest classifier (87% accuracy), Flask interface.",
    },
    {
      title: "Fog Detection AI",
      subtitle: "Computer Vision",
      details: "ViT + Dual CNN for haze detection with 15% accuracy boost.",
    },
    {
      title: "Vishleshan Dashboard",
      subtitle: "Retail Analytics",
      details: "Full-stack app with Flask + MySQL + Chart.js, presented to 200+.",
    },
    {
      title: "Legal FIR Assistant",
      subtitle: "LexHack 1.0 Winner",
      details: "AI + Maps FIR system using Gemini API, real-time geo-tagging.",
    }
  ];

  return (
    <section className="bg-slate-900 rounded-xl p-6 mt-6 text-white">
      <h2 className="text-2xl font-bold text-yellow-300 mb-4">🚀 Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((proj, idx) => (
          <div key={idx} className="bg-slate-800 rounded-lg p-4 hover:scale-[1.02] transition">
            <h3 className="text-lg font-semibold text-cyan-300">{proj.title}</h3>
            <p className="text-sm text-gray-300 italic">{proj.subtitle}</p>
            <p className="mt-2 text-sm">{proj.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
