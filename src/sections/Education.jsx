function Education() {
  return (
    <section
      id="education"
      className="bg-[#1A1625] py-32 px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="mb-24">
          <h2 className="text-5xl md:text-6xl font-bold text-pink-100">
            Education, Experience & Achievements
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl text-lg leading-relaxed">
            My academic journey, professional experience, and achievements
            in technology and software development.
          </p>
        </div>

        {/* ================= EDUCATION ================= */}
        <div className="bg-[#1E162C] rounded-3xl p-10 border border-white/5 shadow-2xl mb-10">

          <div className="mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white">
              Education
            </h3>
            <p className="text-gray-400 mt-2">
              Academic background & qualifications
            </p>
          </div>

          <div className="space-y-6">

            {/* B.Tech */}
            <div className="bg-[#241A36] p-6 rounded-2xl border border-white/5 
                            hover:border-pink-400/30 hover:translate-x-2 transition duration-300">

              <h4 className="text-xl font-semibold text-white">
                B.Tech Computer Science Engineering
              </h4>

              <p className="text-pink-300 mt-1">
                Dnyanshree Institute of Engineering and Technology
              </p>

              <p className="text-gray-400 mt-2 text-sm">
                2024 – 2027
              </p>

              <p className="text-gray-400 mt-4 text-sm leading-relaxed">
                Currently pursuing Computer Science Engineering with focus on Android development,
                AI systems, and modern software engineering practices.
              </p>

            </div>

            {/* Diploma */}
            <div className="bg-[#241A36] p-6 rounded-2xl border border-white/5 
                            hover:border-pink-400/30 hover:translate-x-2 transition duration-300">

              <h4 className="text-xl font-semibold text-white">
                Diploma in Computer Engineering
              </h4>

              <p className="text-pink-300 mt-1">
                Polytechnic Education
              </p>

              <p className="text-gray-400 mt-2 text-sm">
                Completed
              </p>

              <p className="text-gray-400 mt-4 text-sm leading-relaxed">
                Built strong foundation in programming, database systems, networking,
                and software development.
              </p>

            </div>

          </div>
        </div>

        {/* ================= EXPERIENCE ================= */}
        <div className="bg-[#1E162C] rounded-3xl p-10 border border-white/5 shadow-2xl mb-10">

          <div className="mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white">
              Experience
            </h3>
            <p className="text-gray-400 mt-2">
              Internships & professional journey
            </p>
          </div>

          <div className="space-y-6">

            <div className="bg-[#241A36] p-6 rounded-2xl border border-white/5 hover:border-pink-400/30 transition duration-300">
              <h4 className="text-xl font-semibold text-white">
                Volunteer Coordinator
              </h4>
              <p className="text-pink-300 mt-1">
                XFounders • Jul 2025 – Feb 2026
              </p>
              <p className="text-gray-400 mt-3 text-sm">
                Coordinated volunteers and managed event operations smoothly.
              </p>
            </div>

            <div className="bg-[#241A36] p-6 rounded-2xl border border-white/5 hover:border-pink-400/30 transition duration-300">
              <h4 className="text-xl font-semibold text-white">
                Web Developer
              </h4>
              <p className="text-pink-300 mt-1">
                Athang Infotech Pvt Ltd • Aug 2025 – Sep 2025
              </p>
              <p className="text-gray-400 mt-3 text-sm">
                Worked on development tasks and debugging modules.
              </p>
            </div>

            <div className="bg-[#241A36] p-6 rounded-2xl border border-white/5 hover:border-pink-400/30 transition duration-300">
              <h4 className="text-xl font-semibold text-white">
                Android Developer Intern
              </h4>
              <p className="text-pink-300 mt-1">
                Tamizhan Skills Pvt Ltd • Jun 2025 – Aug 2025
              </p>
              <p className="text-gray-400 mt-3 text-sm">
                Built Android apps using Java and worked on UI + APIs.
              </p>
            </div>

            <div className="bg-[#241A36] p-6 rounded-2xl border border-white/5 hover:border-pink-400/30 transition duration-300">
              <h4 className="text-xl font-semibold text-white">
                Android Developer Intern
              </h4>
              <p className="text-pink-300 mt-1">
                Navyug Infotech Pvt Ltd • Jun 2023 – Aug 2023
              </p>
              <p className="text-gray-400 mt-3 text-sm">
                Learned Android fundamentals and built basic applications.
              </p>
            </div>

          </div>
        </div>

        {/* ================= ACHIEVEMENTS ================= */}
        <div className="bg-[#241D33] rounded-3xl p-10 border border-white/5 shadow-xl">

          <div className="mb-10">
            <h3 className="text-3xl font-semibold text-pink-100">
              Achievements
            </h3>
            <p className="text-gray-400 mt-1">
              Awards, hackathons & contributions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-[#2B233D] p-6 rounded-2xl border border-pink-300/10">
              <h4 className="text-white font-semibold">ROTAREX Recognition</h4>
              <p className="text-pink-300 mt-1">State Level</p>
              <p className="text-gray-400 mt-3 text-sm">
                Awarded for CarePoint project.
              </p>
            </div>

            <div className="bg-[#2B233D] p-6 rounded-2xl border border-pink-300/10">
              <h4 className="text-white font-semibold">AI Hackathon</h4>
              <p className="text-pink-300 mt-1">Participant</p>
              <p className="text-gray-400 mt-3 text-sm">
                Built AI-based solutions in competition.
              </p>
            </div>

            <div className="bg-[#2B233D] p-6 rounded-2xl border border-pink-300/10">
              <h4 className="text-white font-semibold">Open Source</h4>
              <p className="text-pink-300 mt-1">ECWoC 2026</p>
              <p className="text-gray-400 mt-3 text-sm">
                Contributed to open-source projects.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Education;