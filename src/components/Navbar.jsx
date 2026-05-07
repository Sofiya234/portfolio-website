function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full border-b border-gray-800 bg-[#1E1B2E]/80 backdrop-blur-md z-50">

      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

        <h1 className="text-2xl font-bold text-white">
          Sofiya
        </h1>

        <ul className="hidden md:flex gap-8 text-gray-300">

          <li>
            <a href="#home" className="hover:text-pink-300 transition">
              Home
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-pink-300 transition">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="hover:text-pink-300 transition">
              Skills
            </a>
          </li>

          <li>
            <a href="#education" className="hover:text-pink-300 transition">
              Education
            </a>
          </li>

        </ul>

      </div>

    </nav>
  );
}

export default Navbar;