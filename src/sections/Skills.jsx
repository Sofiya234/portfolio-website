const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "Tailwind CSS", "JavaScript", "HTML", "CSS"],
  },

  {
    title: "Mobile Development",
    skills: ["Flutter", "Java", "Firebase"],
  },

  {
    title: "Backend & Database",
    skills: ["SQL", "Node.js", "MongoDB"],
  },

  {
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Figma"],
  },
];

function Skills() {
  return (
    <section
  id="skills"
  className="bg-[#1E1B2E] py-32 px-6"
>

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="mb-20">

          <h2 className="text-5xl md:text-6xl font-bold text-pink-100">
            Skills & Expertise
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl text-lg leading-relaxed">
            Technologies and tools I use to design,
            develop, and create modern digital experiences.
          </p>

        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">

          {skillCategories.map((category, index) => (

            <div
              key={index}
              className="bg-[#241D33] border border-pink-300/10 rounded-3xl p-8 hover:border-pink-300/30 transition duration-300"
            >

              {/* Category Title */}
              <h3 className="text-2xl font-semibold text-pink-200 mb-8">
                {category.title}
              </h3>

              {/* Skills */}
              <div className="flex flex-wrap gap-4">

                {category.skills.map((skill, i) => (

                  <div
                    key={i}
                    className="px-5 py-2 rounded-full bg-[#2E2640] text-gray-200 hover:bg-pink-300 hover:text-black transition duration-300"
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