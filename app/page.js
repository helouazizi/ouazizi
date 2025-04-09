import Header from "./components/header";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="min-h-screen font-sans text-black dark:text-white">
      {/* Header Component */}
      <Header />

      {/* Main Content */}
      <section className="flex flex-col-reverse sm:flex-row items-center justify-between gap-12 sm:gap-24 text-center sm:text-left">
        {/* Text Content */}
        <div className="flex-1">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
            Hey, I’m <span className="text-blue-600 dark:text-blue-400">Ouazizi</span> 👋
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-xl">
            Full-Stack Developer crafting modern web apps & APIs using Go, React, and cutting-edge tech. I focus on clean code, performance, and user-first design.
          </p>

          <div className="mt-6 flex flex-wrap justify-center sm:justify-start gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-full bg-blue-600 text-white font-semibold transition-all hover:bg-blue-700 transform hover:scale-105"
            >
              View My Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-full border border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 font-semibold transition-all hover:bg-blue-600 hover:text-white dark:hover:text-white dark:hover:bg-blue-400"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Profile Image or Illustration */}
        <div className="w-40 h-40 sm:w-64 sm:h-64 rounded-full overflow-hidden shadow-lg border-4 border-blue-600 dark:border-blue-400">
          <img
            src="/me.jpg"
            alt="Ouazizi portrait"
            className="w-full h-full object-cover"
          />
        </div>
      </section>


      {/* Footer Component */}
      <Footer />
    </div>
  );
}
