function Projects() {
  const projects = [
    {
  title: "CarePoint",
  description:
    "A doctor appointment management system designed to simplify appointment booking, patient management, and healthcare communication through a clean and user-friendly Android interface.",
  tech: ["Java", "Firebase", "Android Studio", "REST APIs"],
  github: "#",
  live: "#",
  emoji: "🏥",
},
    {
  title: "Healthcare Donation Application",
  description:
    "A healthcare donation platform developed to connect donors with people in need through a modern and user-friendly system for medical support and fundraising management. The project was built as a full-stack web application and later structured like a mobile app using Android Studio.",
  tech: [
    "React.js",
    "Node.js",
    "MongoDB",
    "Android Studio",
    "REST APIs",
  ],
  github: "#",
  live: "https://healthcaredonation.lovable.app/",
  emoji: "❤️",
},

    {
  title: "AgroRover",
  description:
    "A modern agriculture-focused platform developed to provide smart digital solutions for farming and agricultural management. The website focuses on creating an informative, responsive, and user-friendly experience with clean UI and modern web technologies.",
  tech: [
    "React.js",
    "Node.js",
    "MongoDB",
    "Tailwind CSS",
    "REST APIs",
  ],
  github: "#",
  live: "https://www.agrorover.com/",
  emoji: "🌱",
},
  ];

  return (
    <section
      id="projects"
      className="bg-[#120F1A] py-32 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-24">

          <h2 className="text-5xl md:text-6xl font-bold text-pink-100">
            Projects
          </h2>

          <div className="w-28 h-1 bg-pink-300 mx-auto mt-5 rounded-full"></div>

          <p className="text-gray-400 mt-8 max-w-3xl mx-auto text-lg leading-relaxed">
            A collection of projects that showcase my creativity,
            development skills, and passion for building modern
            digital experiences.
          </p>

        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (

            <div
              key={index}
              className="group bg-[#241D33] border border-pink-300/10 rounded-[32px] p-8 shadow-2xl hover:border-pink-300/30 hover:-translate-y-2 transition duration-300 flex flex-col justify-between"
            >

              {/* Top */}
              <div>

                {/* Emoji */}
                <div className="w-16 h-16 rounded-2xl bg-[#2D2440] flex items-center justify-center text-3xl mb-6 shadow-lg">
                  {project.emoji}
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-semibold text-pink-100">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 mt-6 leading-relaxed text-lg">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3 mt-8">

                  {project.tech.map((tech, i) => (

                    <div
                      key={i}
                      className="px-4 py-2 rounded-xl bg-[#2D2440] border border-pink-300/10 text-pink-200 text-sm"
                    >
                      {tech}
                    </div>

                  ))}

                </div>

              </div>

              {/* Buttons */}
              <div className="flex gap-4 mt-10">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 text-center px-5 py-3 rounded-2xl bg-[#2D2440] text-white hover:bg-pink-300 hover:text-black transition duration-300"
                >
                  GitHub
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 text-center px-5 py-3 rounded-2xl bg-pink-300 text-black hover:scale-105 transition duration-300"
                >
                  Live Demo
                </a>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;