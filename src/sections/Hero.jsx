import profile from "../assets/profile.png";

import {
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-[#1E1B2E] flex items-center justify-center px-6"
    >

      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-20 items-center">

        {/* Left Side */}
        <div>

          <h1 className="text-5xl md:text-7xl font-bold text-pink-100 leading-tight">
            Hi there, I’m Sofiya
          </h1>

          <p className="text-gray-300 mt-6 text-lg max-w-lg leading-relaxed">
            Android Developer & Frontend Developer crafting
            elegant and user-friendly digital experiences.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-5 mt-10">

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-pink-300 text-black font-semibold shadow-lg hover:scale-105 transition duration-300"
            >
              My Resume
            </a>

            <a
              href="mailto:sofiyamujawar827@gmail.com"
              className="px-8 py-4 rounded-full border border-pink-300 text-pink-200 hover:bg-pink-300 hover:text-black transition duration-300"
            >
              Email Me
            </a>

          </div>

          {/* Social Media */}
          <div className="flex gap-5 mt-10">

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/sofiya-mujawar-24bb152ba"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full border border-pink-300/20 bg-[#241D33] flex items-center justify-center text-pink-200 text-xl hover:bg-pink-300 hover:text-black transition duration-300"
            >
              <FaLinkedinIn />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/Sofiya234"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full border border-pink-300/20 bg-[#241D33] flex items-center justify-center text-pink-200 text-xl hover:bg-pink-300 hover:text-black transition duration-300"
            >
              <FaGithub />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/_.sofiyyaaa._?utm_source=qr&igsh=dXJsNzNoNDBobWgw"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full border border-pink-300/20 bg-[#241D33] flex items-center justify-center text-pink-200 text-xl hover:bg-pink-300 hover:text-black transition duration-300"
            >
              <FaInstagram />
            </a>

          </div>

        </div>

        {/* Right Side */}
        <div className="flex justify-center">

          <div className="w-[320px] h-[320px] rounded-[35px] bg-pink-300/20 border border-pink-300/20 overflow-hidden shadow-2xl">

            <img
              src={profile}
              alt="Sofiya"
              className="w-full h-full object-cover rounded-[35px]"
            />

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;