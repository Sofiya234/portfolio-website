function Navbar() {
  const navLinks = [
    "About",
    "Education",
    "Skills",
    "Experience",
    "Achievements",
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 py-5">

      <div className="max-w-7xl mx-auto">

        <div className="bg-[#241D33]/80 backdrop-blur-xl border border-pink-300/10 rounded-full px-8 py-4 shadow-2xl flex items-center justify-center">

          {/* Navigation */}
          <nav className="flex flex-wrap items-center justify-center gap-4 md:gap-6">

            {navLinks.map((link, index) => (

              <a
                key={index}
                href={`#${link.toLowerCase().replace(/\s+/g, "")}`}
                className="px-5 py-2 rounded-full text-gray-300 hover:text-black hover:bg-pink-300 transition duration-300 text-sm md:text-base font-medium"
              >
                {link}
              </a>

            ))}

          </nav>

        </div>

      </div>

    </header>
  );
}

export default Navbar;