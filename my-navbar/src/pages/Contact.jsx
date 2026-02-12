import Navbar from "../components/Navbar";

const Contact = () => {
  return (
    <div className="min-h-screen w-full bg-[#020617] text-white overflow-x-hidden">


      <Navbar />

      {/* ================= CONTACT SECTION ================= */}
      <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 py-20">

        {/* SECTION HEADER */}
        <div className="text-center mb-18">
          <p className="text-blue-400 uppercase tracking-widest text-xs mb-1">
            Get In Touch
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            Contact Me
          </h2>
        </div>

        {/* CONTENT */}
        <div className="grid md:grid-cols-2 gap-8 items-start">

          {/* LEFT INFO */}
          <div className="md:pt-3">
            <h3 className="text-xl sm:text-2xl font-semibold mb-6">
              Let’s work together
            </h3>
            <p className="text-gray-400 mb-7 leading-relaxed text-sm sm:text-base">
              I’m currently learning full-stack development and open to
              frontend, backend,  and freelance roles.
            </p>

            <div className="space-y-2.5 text-gray-300 text-sm">
              <p className="flex items-center gap-3">
                📧 <span>mkaransingh101998@gmail.com</span>
              </p>
              <p className="flex items-center gap-3">
                📞 <span>+91 7906421622</span>
              </p>
              <p className="flex items-center gap-3">
                📍 <span>India</span>
              </p>
            </div>
          </div>

          {/* FORM */}
          <form className="bg-[#020617] border border-gray-800 rounded-xl p-6 sm:p-7 space-y-3.5 shadow-sm">

            <div>
              <label className="block text-xs sm:text-sm text-gray-400 mb-1">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full bg-transparent border border-gray-700 rounded-md px-4 py-2 text-sm text-white placeholder-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
              />
            </div>

            <div>
              <label className="block text-xs sm:text-sm text-gray-400 mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent border border-gray-700 rounded-md px-4 py-2 text-sm text-white placeholder-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
              />
            </div>

            <div>
              <label className="block text-xs sm:text-sm text-gray-400 mb-1">
                Message
              </label>
              <textarea
                rows={4}
                placeholder="Write your message..."
                className="w-full bg-transparent border border-gray-700 rounded-md px-4 py-2 text-sm text-white placeholder-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none resize-none transition"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 hover:shadow-md hover:shadow-blue-500/20 transition py-2.5 rounded-full font-medium text-sm"
            >
              Send Message
            </button>

          </form>
        </div>
      </section>



    </div>
  );
};

export default Contact;
