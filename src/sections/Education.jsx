function Education() {
  return (
    <section
      id="education"
      className="bg-[#1A1625] py-32 px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="mb-24 text-center">

          <h2 className="text-5xl md:text-6xl font-bold text-pink-100">
            Education
          </h2>

          <div className="w-28 h-1 bg-pink-300 mx-auto mt-5 rounded-full"></div>

          <p className="text-gray-400 mt-8 max-w-3xl mx-auto text-lg leading-relaxed">
            My academic journey and educational background in
            Computer Science Engineering and software development.
          </p>

        </div>

        {/* Education Container */}
        <div className="space-y-8">

          {/* B.Tech */}
          <div className="bg-[#241D33] border border-pink-300/10 rounded-[32px] p-8 md:p-10 shadow-2xl hover:border-pink-300/30 hover:-translate-y-2 transition duration-300">

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

              <div>

                <h3 className="text-2xl md:text-3xl font-semibold text-pink-100">
                  B.Tech in Computer Science Engineering
                </h3>

                <p className="text-pink-300 mt-2 text-lg">
                  Dnyanshree Institute of Engineering and Technology
                </p>

              </div>

              <div className="px-5 py-2 rounded-full bg-[#2D2440] text-pink-200 border border-pink-300/10 text-sm w-fit">
                2024 – 2027
              </div>

            </div>

            <p className="text-gray-400 mt-6 leading-relaxed text-lg">
              Currently pursuing Computer Science Engineering with a strong
              interest in frontend development, Android application development,
              UI/UX design, and modern software technologies. Continuously
              exploring new tools and technologies while building practical
              real-world projects.
            </p>

          </div>

          {/* Diploma */}
          <div className="bg-[#241D33] border border-pink-300/10 rounded-[32px] p-8 md:p-10 shadow-2xl hover:border-pink-300/30 hover:-translate-y-2 transition duration-300">

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

              <div>

                <h3 className="text-2xl md:text-3xl font-semibold text-pink-100">
                  Diploma in Computer Engineering
                </h3>

                <p className="text-pink-300 mt-2 text-lg">
                  Polytechnic Education
                </p>

              </div>

              <div className="px-5 py-2 rounded-full bg-[#2D2440] text-pink-200 border border-pink-300/10 text-sm w-fit">
                Completed
              </div>

            </div>

            <p className="text-gray-400 mt-6 leading-relaxed text-lg">
              Built a strong foundation in programming, database systems,
              networking, software development, and problem-solving concepts.
              This phase helped me develop technical skills and gain practical
              exposure to application development.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Education;