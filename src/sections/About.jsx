function About() {
  return (
    <section
      id="about"
      className="bg-[#1A1625] py-32 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-20">

          <h2 className="text-5xl md:text-6xl font-bold text-pink-100">
            About Me
          </h2>

          <div className="w-28 h-1 bg-pink-300 mx-auto mt-5 rounded-full"></div>

        </div>

        {/* Main About Container */}
        <div className="bg-[#241D33] border border-pink-300/20 rounded-[40px] p-10 md:p-16 shadow-2xl">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* Left Side */}
            <div>

              <h3 className="text-3xl md:text-4xl font-bold text-pink-200 leading-snug mb-8">
                Turning Ideas Into Creative Digital Experiences ✨
              </h3>

              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Hey! I’m Sofiya Mujawar 👋, a Computer Science Engineering student who enjoys creating modern websites, interactive applications, and digital experiences that are both functional and visually appealing. I love exploring new technologies and turning creative ideas into real projects through code and design.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I’m deeply interested in frontend development, Android application development, and UI/UX design 💻🎨. Working with technologies like React.js, Java, Tailwind CSS, Firebase, and modern web tools has helped me understand how to build responsive, user-friendly, and efficient applications that provide a smooth experience across different devices.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed">
                For me, development is more than just writing code ⚡ — it’s about solving problems, improving experiences, and continuously learning something new every day. I enjoy experimenting with layouts, animations, and modern interfaces while also focusing on performance and clean design.
              </p>

            </div>

            {/* Right Side Cards */}
            <div className="grid gap-6">

              {/* Card 1 */}
              <div className="bg-[#2D2440] border border-pink-300/10 rounded-3xl p-7 hover:-translate-y-2 transition duration-300 shadow-lg">

                <h4 className="text-2xl font-semibold text-pink-200 mb-3">
                  🚀 Passion & Creativity
                </h4>

                <p className="text-gray-300 leading-relaxed">
                  I enjoy creating engaging digital experiences with modern UI designs, smooth interactions, and clean layouts that feel intuitive and visually appealing.
                </p>

              </div>

              {/* Card 2 */}
              <div className="bg-[#2D2440] border border-pink-300/10 rounded-3xl p-7 hover:-translate-y-2 transition duration-300 shadow-lg">

                <h4 className="text-2xl font-semibold text-pink-200 mb-3">
                  📚 Continuous Learning
                </h4>

                <p className="text-gray-300 leading-relaxed">
                  Exploring new technologies, improving development skills, and staying updated with modern trends are some of the things that keep me motivated every day.
                </p>

              </div>

              {/* Card 3 */}
              <div className="bg-[#2D2440] border border-pink-300/10 rounded-3xl p-7 hover:-translate-y-2 transition duration-300 shadow-lg">

                <h4 className="text-2xl font-semibold text-pink-200 mb-3">
                  🌍 Vision & Growth
                </h4>

                <p className="text-gray-300 leading-relaxed">
                  I believe consistency, curiosity, and creativity are the key elements that help transform ideas into meaningful and impactful digital solutions.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;