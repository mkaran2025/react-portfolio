import Navbar from "../components/Navbar";
import aboutImg from "../assets/About.png";
import resume from "../assets/Karan_Singh_resume.pdf";


const About = () => {
  return (
    <div className="min-h-screen w-full bg-[#020617] text-white overflow-x-hidden">
      <Navbar />

      {/* ================= ABOUT SECTION ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <div className="relative bg-[#020617]/95 border border-gray-800 rounded-3xl p-6 sm:p-10 md:p-16 shadow-2xl overflow-hidden">

          {/* Background Glow */}
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl" />

          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">

            {/* LEFT */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-12">
                About <span className="text-blue-400">Me</span>
              </h2>

              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-400/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition duration-500" />
                <img
                  src={aboutImg}
                  alt="Developer Illustration"
                  className="relative z-10 w-[260px] sm:w-[280px] md:w-[320px] drop-shadow-[0_25px_45px_rgba(0,0,0,0.45)] transition-all duration-500 group-hover:-translate-y-2 group-hover:scale-105"
                />
              </div>
            </div>

            {/* RIGHT */}
            <div className="space-y-6">

              {/* Frontend */}
              <div className="group border border-gray-800 rounded-2xl p-6 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10 transition">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400">
                  Frontend Developer
                </h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  I have completed a six-month internship at Bridge Group of
                  Solutions (BGS), Gurgaon, where I worked as a Front-End
                  Developer. I built responsive UI components using HTML5,
                  CSS3, JavaScript, and gained basic experience with React.js
                  and Tailwind CSS.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["React", "Tailwind", "JavaScript", "HTML", "CSS"].map(
                    (skill) => (
                      <span
                        key={skill}
                        className="text-xs px-3 py-1 rounded-full bg-gray-800 text-gray-300"
                      >
                        {skill}
                      </span>
                    )
                  )}
                </div>
              </div>

              {/* Backend */}
              <div className="group border border-gray-800 rounded-2xl p-6 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10 transition">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400">
                  Backend (Learning)
                </h3>
                <p className="text-gray-400 text-sm">
                  Node.js, Express & REST APIs basics.
                </p>
              </div>

              {/* Database */}
              <div className="group border border-gray-800 rounded-2xl p-6 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10 transition">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400">
                  Database & Tools (Learning)
                </h3>
                <p className="text-gray-400 text-sm">
                  SQL basics, CRUD & data handling.
                </p>
              </div>

              {/* CTA */}
              <a
                href={resume}
                download
                className="inline-block mt-2 px-6 py-3 rounded-full bg-blue-500 hover:bg-blue-600 transition shadow-lg hover:scale-105"
              >
                Download CV
              </a>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
