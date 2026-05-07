function Achievements() {
  const achievements = [
    {
      title: "ROTAREX 2025 Recognition",
      subtitle: "CarePoint Project",
      description:
        "Received recognition for presenting the CarePoint doctor appointment management system at ROTAREX 2025.",
      icon: "🏆",
    },

    {
      title: "AI Hackathon Participant",
      subtitle: "Innovation & Problem Solving",
      description:
        "Participated in hackathon events focused on developing innovative and practical AI-based solutions.",
      icon: "🤖",
    },

    {
      title: "Open Source Contribution",
      subtitle: "ECWoC 2026",
      description:
        "Contributed to open-source projects and collaborated with developers while improving development skills.",
      icon: "🌍",
    },

    {
      title: "Frontend & Android Projects",
      subtitle: "Development Experience",
      description:
        "Built responsive websites and Android applications using modern technologies and clean UI/UX practices.",
      icon: "💻",
    },
  ];

  return (
    <section
      id="achievements"
      className="bg-[#1A1625] py-32 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-24">

          <h2 className="text-5xl md:text-6xl font-bold text-pink-100">
            Achievements
          </h2>

          <div className="w-28 h-1 bg-pink-300 mx-auto mt-5 rounded-full"></div>

          <p className="text-gray-400 mt-8 max-w-3xl mx-auto text-lg leading-relaxed">
            Milestones, recognitions, and experiences that reflect my
            learning journey, creativity, and passion for technology.
          </p>

        </div>

        {/* Achievement Cards */}
        <div className="grid md:grid-cols-2 gap-8">

          {achievements.map((achievement, index) => (

            <div
              key={index}
              className="group bg-[#241D33] border border-pink-300/10 rounded-[32px] p-8 shadow-2xl hover:border-pink-300/30 hover:-translate-y-2 transition duration-300"
            >

              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-[#2D2440] flex items-center justify-center text-3xl mb-6 shadow-lg">
                {achievement.icon}
              </div>

              {/* Content */}
              <h3 className="text-2xl md:text-3xl font-semibold text-pink-100">
                {achievement.title}
              </h3>

              <p className="text-pink-300 mt-3 text-lg">
                {achievement.subtitle}
              </p>

              <p className="text-gray-400 mt-6 leading-relaxed text-lg">
                {achievement.description}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Achievements;