import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaReact, FaJs, FaGithub } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const Experience = () => {
  const techStack = [
    { icon: <FaHtml5 />, color: "text-orange-500", name: "HTML5" },
    { icon: <FaCss3Alt />, color: "text-blue-500", name: "CSS3" },
    { icon: <FaJs />, color: "text-yellow-400", name: "JavaScript" },
    { icon: <FaReact />, color: "text-cyan-400", name: "React" },
    { icon: <SiTailwindcss />, color: "text-sky-400", name: "Tailwind CSS" },
    { icon: <FaGithub />, color: "text-gray-300", name: "GitHub" },
  ];

  const experienceCards = [
    {
      title: "Frontend Developer",
      date: "2026 – Present",
      tasks: [
        "Build responsive and modern UI using React and Tailwind CSS.",
        "Implement clean UI components and animations.",
      ],
      delay: 0,
    },
    {
      title: "React Developer",
      date: "",
      tasks: [
        "Develop reusable components.",
        "Improve website performance and accessibility.",
      ],
      delay: 0.1,
    },
    {
      title: "Web Developer",
      date: "",
      tasks: [
        "Create static and dynamic websites.",
        "Work with HTML, CSS, and JavaScript.",
      ],
      delay: 0.2,
    },
  ];

  return (
    <div className="min-h-screen w-full bg-[#020617] text-white overflow-x-hidden">
      <Navbar />



      {/* ================= EXPERIENCE SECTION ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-14">
          Experience
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Tech Stack */}
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-5 max-w-md">
            {techStack.map((tech, i) => (
              <div
                key={i}
                className="group h-20 w-20 bg-black/40 border border-gray-800 rounded-2xl flex flex-col items-center justify-center shadow-lg transition-all duration-300 hover:scale-105 hover:border-blue-500/40 hover:shadow-blue-500/20"
              >
                <div className={`text-3xl ${tech.color}`}>
                  {tech.icon}
                </div>
                <span className="text-[11px] mt-1 text-gray-400 group-hover:text-white transition">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>

          {/* Experience Cards */}
          <div className="space-y-6">
            {experienceCards.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: exp.delay }}
                className="bg-black/40 border border-gray-800 rounded-2xl p-6 shadow-xl hover:border-blue-500/40 hover:shadow-blue-500/10 transition"
              >
                <h3 className="text-lg md:text-xl font-semibold mb-1">
                  {exp.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {exp.date}
                </p>
                <ul className="text-gray-300 space-y-2 text-sm">
                  {exp.tasks.map((task, j) => (
                    <li key={j}>• {task}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
};

export default Experience;
