function About() {
  return (
    <section
  id="about"
  className="bg-[#1A1625] py-28 px-6"
>

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-20">

          <h2 className="text-5xl font-bold text-pink-100">
            About Me
          </h2>

          <div className="w-24 h-1 bg-pink-300 mx-auto mt-4 rounded-full"></div>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="bg-[#241D33] border border-pink-300/20 rounded-3xl p-8 shadow-lg hover:-translate-y-2 transition duration-300">

            <h3 className="text-2xl font-semibold text-pink-200 mb-4">
              👩‍💻 Who I Am
            </h3>

            <p className="text-gray-300 leading-relaxed">
              Passionate Computer Science student focused on
              Android development, frontend design, and creating
              clean user experiences.
            </p>

          </div>

          {/* Card 2 */}
          <div className="bg-[#241D33] border border-pink-300/20 rounded-3xl p-8 shadow-lg hover:-translate-y-2 transition duration-300">

            <h3 className="text-2xl font-semibold text-pink-200 mb-4">
              💡 What I Love
            </h3>

            <p className="text-gray-300 leading-relaxed">
              I enjoy building modern applications, experimenting
              with UI/UX, animations, and solving real-world problems
              through technology.
            </p>

          </div>

          {/* Card 3 */}
          <div className="bg-[#241D33] border border-pink-300/20 rounded-3xl p-8 shadow-lg hover:-translate-y-2 transition duration-300">

            <h3 className="text-2xl font-semibold text-pink-200 mb-4">
              🚀 My Goal
            </h3>

            <p className="text-gray-300 leading-relaxed">
              To become a skilled software developer creating
              impactful digital products with beautiful and
              intuitive experiences.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;