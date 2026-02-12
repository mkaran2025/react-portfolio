import { Link } from "react-router-dom";
import { FaLinkedinIn, FaGithub, FaBriefcase } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-gray-800 bg-[#020617]">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-12">

        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* LEFT TEXT */}
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {new Date().getFullYear()}{" "}
            <span className="text-white font-medium">Karan</span>.<br className="md:hidden" />
            All rights reserved.
          </p>

          {/* CENTER NAV */}
          <ul className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            {["Home", "About", "Experience", "Projects", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="relative hover:text-white transition after:absolute after:left-0 after:-bottom-1 .after:h-[1px] after:w-0 after:bg-white hover:after:w-full after:transition-all"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          {/* RIGHT SOCIALS */}
          <div className="flex gap-6 text-xl">

            {/* Website */}
            <a
              href="https://yourwebsite.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Website"
              className="text-gray-400 hover:text-white transition transform hover:-translate-y-1 hover:scale-110"
            >
              🌐
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/karan-singh-014372259?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-400 hover:text-[#0A66C2] transition transform hover:-translate-y-1 hover:scale-110"
            >
              <FaLinkedinIn />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/mkaran2025/Portfolio-website-project/blob/main/README.md"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-400 hover:text-white transition transform hover:-translate-y-1 hover:scale-110"
            >
              <FaGithub />
            </a>

            {/* Naukri */}
            <a
              href="https://www.naukri.com/mnjuser/profile"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Naukri"
              className="text-gray-400 hover:text-blue-400 transition transform hover:-translate-y-1 hover:scale-110"
            >
              <FaBriefcase />
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
