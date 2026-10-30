
const researchPapers = [
  {
    number: "01",
    title:
      "Fake News Detection Using Machine Learning and Sentiment Analysis Integrated in a Flask Web Application",

    publisher: "Springer Nature",
    conference:
      "Real-World Applications of Machine Learning",

    details:
      "In: Pant, M., Deep, K., Nagar, A.K. (eds), Real-World Applications of Machine Learning. Mathematics for Sustainable Developments. Springer, Singapore, 2026.",

    status: "Published",
    category: "Machine Learning • NLP • Sentiment Analysis",

    links: [
      {
        label: "Read Springer Paper",
        url: "https://doi.org/10.1007/978-981-95-7134-5_23"
      },
      {
        label: "SocPros-25 Abstract",
        url: "https://socpros2025.iitr.ac.in/wp-content/uploads/2025/04/Book_of_Abstracts_ScoProS_25.pdf#page=90"
      }
    ],

    color: "border-cyan-400/40"
  },

  {
    number: "02",
    title:
      "Fog Detection Using Hybrid Deep Learning Models: A Multi-Modal CNN-LSTM Approach",

    publisher: "IEEE",

    conference:
      "7th International Conference on Computing, Communication and Automation (ICCCA)",

    details:
      "Mehta et al., IEEE ICCCA, Galgotias University, Greater Noida, India, November 28–30, 2025, pp. 1–6.",

    status: "Published",
    category: "Deep Learning • CNN-LSTM • Computer Vision",

    doi: "10.1109/ICCCA66364.2025.11325690",

    links: [
      {
        label: "View IEEE Paper",
        url: "https://ieeexplore.ieee.org/document/11325690"
      }
    ],

    color: "border-purple-400/40"
  }
];

export default function Research() {
  return (
    <div className="space-y-8">

      {/* Heading */}
      <div className="text-center">

        <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500">
          Research & Publications
        </h2>

        <p className="text-gray-400 mt-3">
          Research contributions in Artificial Intelligence,
          Machine Learning and Deep Learning.
        </p>

        <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mt-4 rounded-full" />

      </div>

      {/* Research Papers */}
      <div className="space-y-6">

        {researchPapers.map((paper) => (

          <article
            key={paper.number}
            className={`group relative overflow-hidden rounded-2xl border ${paper.color} bg-gray-950/70 backdrop-blur-xl p-5 sm:p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/10`}
          >

            {/* Decorative glow */}
            <div className="absolute -top-20 -right-20 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-all" />

            <div className="relative z-10">

              {/* Paper header */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-5">

                <span className="text-3xl font-extrabold text-cyan-400/70">
                  {paper.number}
                </span>

                <span className="text-xs font-semibold tracking-wider text-green-300 bg-green-400/10 border border-green-400/30 px-4 py-2 rounded-full">
                  ● {paper.status}
                </span>

              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-white leading-relaxed group-hover:text-cyan-300 transition-colors">
                {paper.title}
              </h3>

              {/* Publisher */}
              <div className="mt-4 flex flex-wrap items-center gap-2">

                <span className="text-sm text-cyan-300 font-semibold">
                  {paper.publisher}
                </span>

                <span className="text-gray-600">|</span>

                <span className="text-sm text-gray-400">
                  {paper.category}
                </span>

              </div>

              {/* Conference */}
              <p className="mt-4 text-gray-300 font-medium">
                {paper.conference}
              </p>

              {/* Details */}
              <p className="mt-3 text-sm text-gray-400 leading-7">
                {paper.details}
              </p>

              {/* DOI */}
              {paper.doi && (
                <p className="mt-3 text-sm text-gray-400">
                  <span className="text-cyan-400 font-semibold">
                    DOI:
                  </span>{" "}
                  {paper.doi}
                </p>
              )}

              {/* Links */}
              <div className="flex flex-wrap gap-3 mt-6">

                {paper.links.map((link, index) => (

                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-cyan-500/10 border border-cyan-400/40 text-cyan-300 text-sm font-semibold hover:bg-cyan-400 hover:text-black hover:shadow-lg hover:shadow-cyan-400/20 transition-all duration-300"
                  >
                    {link.label}
                    <span>↗</span>
                  </a>

                ))}

              </div>

            </div>

          </article>

        ))}

      </div>

      {/* Research summary */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

        <div className="p-5 rounded-xl bg-cyan-400/5 border border-cyan-400/20 text-center">
          <h3 className="text-3xl font-bold text-cyan-400">
            02
          </h3>
          <p className="text-sm text-gray-400 mt-2">
            Research Publications
          </p>
        </div>

        <div className="p-5 rounded-xl bg-purple-400/5 border border-purple-400/20 text-center">
          <h3 className="text-3xl font-bold text-purple-400">
            03
          </h3>
          <p className="text-sm text-gray-400 mt-2">
            Research Document Links
          </p>
        </div>

      </div>

    </div>
  );
}
