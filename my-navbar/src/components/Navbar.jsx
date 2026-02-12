import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-black/60 backdrop-blur-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

        {/* LOGO */}
        <Link to="/" className="text-white text-2xl font-bold">
          Portfolio<span className="text-blue-500"></span>
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-10 text-gray-300 text-sm">
          <li><Link to="/" className="hover:text-white">Home</Link></li>
          <li><Link to="/about" className="hover:text-white">About</Link></li>
          <li><Link to="/experience" className="hover:text-white">Experience</Link></li>
          <li><Link to="/projects" className="hover:text-white">Projects</Link></li>
          <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
        </ul>

        {/* MOBILE BUTTON */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-white text-2xl">
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-black/80 px-6 pb-6">
          <ul className="flex flex-col gap-5 text-gray-300 text-sm">
            <li><Link onClick={() => setOpen(false)} to="/">Home</Link></li>
            <li><Link onClick={() => setOpen(false)} to="/about">About</Link></li>
            <li><Link onClick={() => setOpen(false)} to="/experience">Experience</Link></li>
            <li><Link onClick={() => setOpen(false)} to="/projects">Projects</Link></li>
            <li><Link onClick={() => setOpen(false)} to="/contact">Contact</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
