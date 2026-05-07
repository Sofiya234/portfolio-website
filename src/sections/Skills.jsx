const skillCategories = [
  {
    title: "Frontend Development",
    icon: "💻",
    skills: [
      "React.js",
      "JavaScript",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
      "Responsive Design",
    ],
  },

  {
    title: "Mobile Development",
    icon: "📱",
    skills: [
      "Flutter",
      "Java",
      "Firebase",
      "Android Studio",
      "XML",
    ],
  },

  {
    title: "Backend & Database",
    icon: "⚙️",
    skills: [
      "Node.js",
      "MongoDB",
      "SQL",
      "REST APIs",
    ],
  },

  {
    title: "Tools & Design",
    icon: "🎨",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Figma",
      "UI/UX",
    ],
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="bg-[#1E1B2E] py-32 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-24">

          <h2 className="text-5xl md:text-6xl font-bold text-pink-100">
            Skills & Expertise
          </h2>

          <div className="w-28 h-1 bg-pink-300 mx-auto mt-5 rounded-full"></div>

          <p className="text-gray-400 mt-8 max-w-3xl mx-auto text-lg leading-relaxed">
            A combination of development, creativity, and modern technologies
            that help me build responsive, interactive, and visually engaging
            digital experiences.
          </p>

        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">

          {skillCategories.map((category, index) => (

            <div
              key={index}
              className="group bg-[#241D33] border border-pink-300/10 rounded-[32px] p-8 hover:border-pink-300/30 hover:-translate-y-2 transition duration-300 shadow-xl"
            >

              {/* Top */}
              <div className="flex items-center gap-4 mb-8">

                <div className="text-4xl">
                  {category.icon}
                </div>

                <h3 className="text-2xl md:text-3xl font-semibold text-pink-200">
                  {category.title}
                </h3>

              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-4">

                {category.skills.map((skill, i) => (

                  <div
                    key={i}
                    className="px-5 py-3 rounded-2xl bg-[#2E2640] border border-pink-300/10 text-gray-200 hover:bg-pink-300 hover:text-black hover:scale-105 transition duration-300 cursor-default shadow-md"
                  >
                    {skill}
                  </div>

                ))}

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;