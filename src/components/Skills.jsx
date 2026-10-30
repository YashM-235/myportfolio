export default function Skills() {
  return (
    <section className="bg-slate-800 rounded-xl p-6 mt-6 text-white shadow-md">
      <h2 className="text-2xl font-bold mb-3 text-green-300">🛠️ Skills & Tech Stack</h2>
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 list-disc list-inside">
        <li>Python, JavaScript, C++, Java</li>
        <li>TensorFlow, Scikit-learn, OpenCV, Pandas, NumPy</li>
        <li>Flask, REST APIs, Apache, Vite</li>
        <li>MySQL, MongoDB, Database Design</li>
        <li>HTML, CSS, Tailwind, Chart.js</li>
        <li>Git, GitHub, Agile, Jupyter, Colab</li>
      </ul>
    </section>
  );
}
