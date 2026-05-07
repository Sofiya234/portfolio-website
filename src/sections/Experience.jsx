function Experience() {
  const experiences = [
    {
      role: "Volunteer Coordinator",
      company: "XFounders",
      duration: "Jul 2025 – Feb 2026",
      description:
        "Managed volunteer activities, coordinated event operations, and ensured smooth execution of technical and non-technical events through effective communication and teamwork.",
    },

    {
      role: "Web Developer",
      company: "Athang Infotech Pvt Ltd",
      duration: "Aug 2025 – Sep 2025",
      description:
        "Worked on frontend development tasks, debugging modules, and improving website functionality while gaining practical experience in modern web technologies.",
    },

    {
      role: "Android Developer Intern",
      company: "Tamizhan Skills Pvt Ltd",
      duration: "Jun 2025 – Aug 2025",
      description:
        "Developed Android application interfaces using Java, worked with APIs, and improved understanding of mobile application architecture and user experience.",
    },

    {
      role: "Android Developer Intern",
      company: "Navyug Infotech Pvt Ltd",
      duration: "Jun 2023 – Aug 2023",
      description:
        "Learned Android development fundamentals, built basic applications, and explored core concepts of mobile app development and UI design.",
    },
  ];

  return (
    <section
      id="experience"
      className="bg-[#120F1A] py-32 px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-24">

          <h2 className="text-5xl md:text-6xl font-bold text-pink-100">
            Experience
          </h2>

          <div className="w-28 h-1 bg-pink-300 mx-auto mt-5 rounded-full"></div>

          <p className="text-gray-400 mt-8 max-w-3xl mx-auto text-lg leading-relaxed">
            My professional journey, internships, and experiences that
            helped me strengthen my technical and collaborative skills.
          </p>

        </div>

        {/* Timeline */}
        <div className="relative border-l border-pink-300/20 ml-4 md:ml-8 space-y-12">

          {experiences.map((exp, index) => (

            <div
              key={index}
              className="relative pl-10"
            >

              {/* Timeline Dot */}
              <div className="absolute -left-[11px] top-3 w-5 h-5 rounded-full bg-pink-300 shadow-lg shadow-pink-300/40"></div>

              {/* Card */}
              <div className="bg-[#241D33] border border-pink-300/10 rounded-[28px] p-8 shadow-2xl hover:border-pink-300/30 hover:-translate-y-2 transition duration-300">

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                  <div>

                    <h3 className="text-2xl md:text-3xl font-semibold text-pink-100">
                      {exp.role}
                    </h3>

                    <p className="text-pink-300 mt-2 text-lg">
                      {exp.company}
                    </p>

                  </div>

                  <div className="px-5 py-2 rounded-full bg-[#2D2440] text-pink-200 border border-pink-300/10 text-sm w-fit">
                    {exp.duration}
                  </div>

                </div>

                <p className="text-gray-400 mt-6 leading-relaxed text-lg">
                  {exp.description}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Experience;