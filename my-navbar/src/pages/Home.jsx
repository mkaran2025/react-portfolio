import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import About from "../pages/About";
import Experience from "../pages/Experience";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import girlImg from "../assets/Home.png";

const Home = () => {
  const navigate = useNavigate();

  // Roles array must be declared inside the component, but outside JSX
  const roles = ["Frontend Developer", "React Developer", "UI Designer"];

  // Dynamic role index based on time
  const roleIndex = Math.floor(Date.now() / 2000) % roles.length;

  return (
    <div className="min-h-screen w-full bg-[#020617] text-white overflow-x-hidden">

      <Navbar />

      {/* ================= HERO SECTION ================= */}
      <section className="relative max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-28 grid md:grid-cols-2 gap-20 items-center overflow-hidden">
        {/* BACKGROUND BLUR */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -right-32 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl" />

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative z-10 text-center md:text-left"
        >
          {/* DYNAMIC ROLE TEXT */}
          <motion.p
            key={roleIndex} // changes every few seconds
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-blue-400 uppercase tracking-[0.35em] mb-5 text-xs md:text-sm"
          >
            {roles[roleIndex]}
          </motion.p>

          {/* NAME */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold leading-tight mb-6">
            Hi, I’m{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Karan Singh
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p className="text-gray-400 mb-10 max-w-xl mx-auto md:mx-0 text-base md:text-lg leading-relaxed">
            A passionate Frontend Developer focused on building modern,
            responsive, and user-friendly web interfaces. I work with{" "}
            <span className="text-gray-300">
              HTML, CSS, JavaScript, React, and Tailwind CSS
            </span>
            , and I’m continuously improving my skills by building real-world
            projects.
          </p>

          {/* CONTACT BUTTON */}
          <div className="flex flex-wrap justify-center md:justify-start gap-8">
            <button
              onClick={() => navigate("/Contact")}
              className="bg-blue-500 hover:bg-blue-600 hover:scale-105 px-7 py-4 rounded-full shadow-lg transition-all duration-300"
            >
              Contact Me
            </button>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative z-10 flex justify-center md:justify-end"
        >
          <motion.img
            src={girlImg}
            alt="Frontend Developer Illustration"
            className="w-[220px] sm:w-[260px] md:w-[320px] lg:w-[360px] object-contain drop-shadow-2xl"
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          />
        </motion.div>
      </section>


      <About />
      <Experience />
      <Projects />
      <Contact />

      <Footer />
    </div>
  );
};

export default Home;
5